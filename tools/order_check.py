"""Flag hotspots whose track number breaks the reading order inside a unit."""
import json, re, sys
from pathlib import Path
level = sys.argv[1]
src = Path(__file__).resolve().parent.parent / 'src' / 'data' / level / 'book.ts'
book = json.loads(re.search(r'= (\{.*\});', src.read_text(encoding='utf-8'), re.S)[1])
for u in book['units']:
    seq = []
    for p in range(u['from'], u['to'] + 1):
        hs = book['pages'].get(str(p), [])
        # reading order: left column then right column, top to bottom
        hs = sorted(hs, key=lambda h: (h[1] > 48, h[2]))
        seq += [(int(h[0].split('.')[1]), p, h[0]) for h in hs]
    nums = [s[0] for s in seq]
    bad = [f'{t}@p{p}' for i, (n, p, t) in enumerate(seq) if i and n < nums[i - 1] - 1 and (i + 1 >= len(nums) or n < nums[i + 1] - 1)]
    print(f"U{u['n']}: {' '.join(str(n) for n in nums)}" + (f'   <-- check {bad}' if bad else ''))
