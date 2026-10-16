"""Render every PDF page exactly as it appears (clipped to the page, rotation applied).

Usage: python tools/render_pages.py <level> <SB.pdf>

The scans are rendered at their own resolution (capped), so label positions measured on the PDF page
line up with the images on the site.
"""
import sys
from pathlib import Path

import pymupdf
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent


def native_dpi(page: pymupdf.Page) -> float:
    imgs = page.get_images(full=True)
    if not imgs:
        return 150
    rects = page.get_image_rects(imgs[0][0])
    if not rects or rects[0].width <= 0:
        return 150
    return imgs[0][2] / rects[0].width * 72


def main(level: str, pdf: str):
    doc = pymupdf.open(pdf)
    out = ROOT / 'public' / level / 'pages'
    out.mkdir(parents=True, exist_ok=True)
    for i, page in enumerate(doc):
        dpi = int(round(max(110, min(native_dpi(page), 200))))
        pix = page.get_pixmap(dpi=dpi)
        im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
        if max(im.size) > 2000:
            im.thumbnail((1400, 2000))
        im.save(out / f'p{i + 1:03d}.webp', 'WEBP', quality=86, method=5)
    print(level, doc.page_count, 'pages')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
