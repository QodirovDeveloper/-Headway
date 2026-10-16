"""Print the next batch of [filename, post] pairs still missing on disk (as JSON)."""
import json, os, sys
from pathlib import Path
SRC = Path('D:/ikkinchi-miya/headway-src')
posts = json.load(open(Path(__file__).with_name('posts.json')))
limit = int(sys.argv[1]) if len(sys.argv) > 1 else 60
out = []
for lv, tracks in posts.items():
    ext = 'wma' if lv == 'intermediate' else 'mp3'
    for t, post in tracks.items():
        if not (SRC / lv / f'{t}.{ext}').exists():
            out.append([f'{lv}__{t}.{ext}', post])
print(json.dumps(out[:limit]))
print(len(out), 'remaining', file=sys.stderr)
