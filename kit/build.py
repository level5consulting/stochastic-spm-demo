#!/usr/bin/env python3
"""Build demo.html from template.html + demo-config.json (self-contained, opens by double-click)."""
import json, pathlib
d = pathlib.Path(__file__).parent
cfg = json.loads((d/'demo-config.json').read_text())
html = (d/'template.html').read_text().replace('__CONFIG__', json.dumps(cfg, ensure_ascii=False).replace('</','<\\/'))
(d/'demo.html').write_text(html)
print('wrote', d/'demo.html')
