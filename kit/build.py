#!/usr/bin/env python3
"""Build demo.html from template.html + demo-config.json (self-contained, opens by double-click)."""
import json, pathlib
d = pathlib.Path(__file__).parent
cfg = json.loads((d/'demo-config.json').read_text())
import sys; sys.path.insert(0, str(d))
try:
    import script_extract
    r = script_extract.load(d/'script-template.docx')
    cfg['presenter'] = {'acts': r['acts'], 'pillars': r['pillars']}
except Exception as e:  # python-docx missing or template absent: demo still builds, just without notes
    print('presenter notes skipped:', e)
html = (d/'template.html').read_text().replace('__CONFIG__', json.dumps(cfg, ensure_ascii=False).replace('</','<\\/'))
(d/'demo.html').write_text(html)
print('wrote', d/'demo.html')
