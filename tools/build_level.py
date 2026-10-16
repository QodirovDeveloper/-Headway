"""Build one Headway level from its Student's Book PDF.

Usage (needs pymupdf, pillow, opencv, rapidocr_onnxruntime):
    python tools/build_level.py <level-id> <SB.pdf>

Writes:
    public/<level>/pages/pNNN.webp   native-resolution page scans
    public/<level>/cover.webp        cover thumbnail
    tools/<level>/scan.json          page sizes, footer text, and OCR'd track labels
"""
import io
import json
import re
import sys
from pathlib import Path

import cv2
import numpy as np
import pymupdf
from PIL import Image, ImageFilter, ImageOps
from rapidocr_onnxruntime import RapidOCR

ROOT = Path(__file__).resolve().parent.parent
LABEL = re.compile(r'^T\s*(\d{1,2})\s*[.,]\s*(\d{1,2})$')


def page_image(page: pymupdf.Page) -> Image.Image:
    """The page's own scan at native resolution (falls back to rendering)."""
    imgs = page.get_images(full=True)
    if len(imgs) == 1:
        pix = pymupdf.Pixmap(page.parent, imgs[0][0])
        if pix.n - pix.alpha != 3:
            pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
        return Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    pix = page.get_pixmap(dpi=150)
    return Image.frombytes('RGB', (pix.width, pix.height), pix.samples)


def candidates(page: pymupdf.Page):
    """Solid dark or coloured boxes about the size of a 'T 1.2' label (in page % units)."""
    pix = page.get_pixmap(dpi=100)
    a = np.frombuffer(pix.samples, np.uint8).reshape(pix.height, pix.width, pix.n)[:, :, :3].astype(int)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    lum = (r * 3 + g * 6 + b) // 10
    sat = a.max(axis=2) - a.min(axis=2)
    mask = ((lum < 95) | ((sat > 90) & (lum < 150))).astype(np.uint8)
    n, _, stats, _ = cv2.connectedComponentsWithStats(mask, connectivity=4)
    W, H = pix.width, pix.height
    out = []
    for i in range(1, n):
        x, y, w, h, area = stats[i]
        if not (0.025 * W <= w <= 0.09 * W and 0.010 * H <= h <= 0.026 * H):
            continue
        if area < 0.45 * w * h or w < 1.4 * h:
            continue
        out.append((x / W * 100, y / H * 100, w / W * 100, h / H * 100))
    return out


def read_label(ocr, page, box):
    x, y, w, h = box
    R = page.rect
    clip = pymupdf.Rect(R.width * x / 100 - 0.5, R.height * y / 100 - 0.5,
                        R.width * (x + w) / 100 + 0.5, R.height * (y + h) / 100 + 0.5)
    pix = page.get_pixmap(dpi=300, clip=clip)
    im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('L')
    im = ImageOps.invert(im).point(lambda v: 255 if v > 140 else 0)
    im = ImageOps.expand(im, border=30, fill=255)
    buf = io.BytesIO()
    im.save(buf, 'PNG')
    res, _ = ocr(buf.getvalue())
    text = ' '.join(t[1] for t in res) if res else ''
    t = text.replace('I', '1').replace('l', '1').replace('|', '1').replace('O', '0').strip()
    m = LABEL.match(t) or LABEL.match('T' + t.lstrip('Tt '))
    return (f'T{int(m[1])}.{int(m[2])}' if m else None), text


def main(level: str, pdf_path: str):
    doc = pymupdf.open(pdf_path)
    pages_dir = ROOT / 'public' / level / 'pages'
    pages_dir.mkdir(parents=True, exist_ok=True)
    scan_dir = ROOT / 'tools' / level
    scan_dir.mkdir(parents=True, exist_ok=True)
    ocr = RapidOCR()

    cover = page_image(doc[0])
    cover.thumbnail((640, 900))
    cover.save(ROOT / 'public' / level / 'cover.webp', 'WEBP', quality=85)

    pages = []
    for i, page in enumerate(doc):
        n = i + 1
        im = page_image(page).filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
        if max(im.size) > 2000:  # keep files light on phones
            im.thumbnail((1400, 2000))
        im.save(pages_dir / f'p{n:03d}.webp', 'WEBP', quality=86, method=5)

        labels = []
        for box in candidates(page):
            track, raw = read_label(ocr, page, box)
            if track:
                labels.append([track, *[round(v, 2) for v in box]])
            elif raw.strip():
                labels.append(['?' + raw.strip()[:12], *[round(v, 2) for v in box]])
        text = page.get_text()
        pages.append({
            'n': n,
            'ratio': round(page.rect.height / page.rect.width, 4),
            'labels': labels,
            'head': ' '.join(text.split())[:160],
            'foot': ' '.join(text.strip().splitlines()[-4:])[:160],
        })
        print(n, len([l for l in labels if not l[0].startswith('?')]), flush=True)

    (scan_dir / 'scan.json').write_text(json.dumps(pages, ensure_ascii=False, indent=0), encoding='utf-8')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
