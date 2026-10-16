"""List tracks that never appear on their own unit's pages (only in audioscripts etc.)."""
import json, re, sys
from pathlib import Path
level = sys.argv[1]
src = Path(__file__).resolve().parent.parent / 'src' / 'data' / level / 'book.ts'
book = json.loads(re.search(r'= (\{.*\});', src.read_text(encoding='utf-8'), re.S)[1])
on_unit = set()
for u in book['units']:
    for p in range(u['from'], u['to'] + 1):
        for h in book['pages'].get(str(p), []):
            on_unit.add(h[0])
print('only outside units:', ' '.join(t for t in book['posts'] if t not in on_unit) or '-')
