"""Merge sheet-index corrections into units.json "fix".

Usage: python tools/apply_fixes.py <level> '{"10": "T1.5", "0": null, ...}'   (null = not a label)
"""
import json, sys
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
level, fixes = sys.argv[1], json.loads(sys.argv[2])
idx = json.loads((ROOT / 'tools' / level / 'sheet_index.json').read_text())
p = ROOT / 'tools' / level / 'units.json'
cfg = json.loads(p.read_text(encoding='utf-8'))
for i, t in fixes.items():
    cfg.setdefault('fix', {})[idx[int(i)]] = t
p.write_text(json.dumps(cfg, ensure_ascii=False, indent=1), encoding='utf-8')
print(len(fixes), 'fixes applied')
