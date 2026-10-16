"""Contact sheets of every label candidate on unit pages, with the OCR guess, for eyeballing."""
import json, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
ROOT = Path(__file__).resolve().parent.parent
level, out = sys.argv[1], Path(sys.argv[2])
scan = json.loads((ROOT / 'tools' / level / 'scan.json').read_text(encoding='utf-8'))
cfg = json.loads((ROOT / 'tools' / level / 'units.json').read_text(encoding='utf-8'))
last = max(u[3] for u in cfg['units'])
items = []
for p in scan:
    if p['n'] > last:
        continue
    for raw, x, y, w, h in p['labels']:
        items.append((p['n'], raw, x, y, w, h))
f = ImageFont.truetype('arial.ttf', 15)
cols, cw, ch, per = 4, 260, 56, 64
for s in range(0, len(items), per):
    chunk = items[s:s + per]
    sheet = Image.new('RGB', (cols * cw, ((len(chunk) + cols - 1) // cols) * ch), 'white')
    dr = ImageDraw.Draw(sheet)
    for i, (pg, raw, x, y, w, h) in enumerate(chunk):
        im = Image.open(ROOT / 'public' / level / 'pages' / f'p{pg:03d}.webp')
        W, H = im.size
        crop = im.crop((int(W * (x - 0.5) / 100), int(H * (y - 0.4) / 100), int(W * (x + w + 3) / 100), int(H * (y + h + 0.4) / 100)))
        crop.thumbnail((150, 40))
        cx, cy = (i % cols) * cw, (i // cols) * ch
        sheet.paste(crop, (cx + 105, cy + 8))
        dr.text((cx + 4, cy + 6), f'{s + i}', fill=(0, 0, 200), font=f)
        dr.text((cx + 4, cy + 26), f'p{pg} {raw[:9]}', fill=(200, 0, 0), font=f)
    sheet.save(out / f'{level}_lab{s // per}.png')
(ROOT / 'tools' / level / 'sheet_index.json').write_text(json.dumps([f'{pg}:{round(x)}:{round(y)}' for pg, raw, x, y, w, h in items]))
print(len(items))
