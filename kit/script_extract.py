"""Read the run-of-show docx and return its spoken/cue paragraphs grouped by slide, act and pillar.
Used by build_deck.py (speaker notes) and build.py (presenter panel). Needs python-docx."""
import re, pathlib
from docx import Document
D = pathlib.Path(__file__).parent
ACT_SLIDE = {'Act I —': 5, 'Act II —': 7, 'Act III —': 9, 'Act IV —': 10, 'Act V —': 11, 'Close': 12}
ACT_KEY = {'Act I —': 'a1', 'Act II —': 'a2', 'Act III —': 'a3', 'Act IV —': 'a4', 'Act V —': 'a5', 'Close': 'close'}
CUE = re.compile(r'^(SAY|DO|CLICK|WATCH FOR|IF SHORT ON TIME):\s*(.*)$', re.S)
def load(path=None):
    doc = Document(path or D / 'script-template.docx')
    slides, acts, pillars = {}, {}, {}
    cur_slide, cur_act, cur_pillar, started = 1, 'opening', None, False
    for p in doc.paragraphs:
        t = p.text.strip()
        if not t: continue
        if t.startswith('Opening Line'): started = True; continue
        if not started: continue
        if t.startswith('Appendix'): break
        m = re.match(r'^\d+\.\s+(.*)$', t)
        if m:
            head = m.group(1)
            for k in ACT_SLIDE:
                if head.startswith(k):
                    cur_slide, cur_act, cur_pillar = ACT_SLIDE[k], ACT_KEY[k], None
            if head.startswith('Framework'): cur_act, cur_pillar = 'framework', None
            continue
        pm = re.match(r'^Pillar (\d) —', t)
        if pm:
            cur_pillar = int(pm.group(1)) - 1
            item = {'type': 'HEAD', 'text': t}
        elif re.match(r'^\S+\s+·\s+(Slides?|Interactive)', t) or re.match(r'^\{\{', t): continue
        else:
            c = CUE.match(t)
            item = {'type': c.group(1), 'text': c.group(2).strip()} if c else {'type': 'NOTE', 'text': t}
        slides.setdefault(cur_slide, []).append(item)
        acts.setdefault(cur_act, []).append(item)
        if cur_pillar is not None: pillars.setdefault(cur_pillar, []).append(item)
        sm = re.search(r'Advance to Slide (\d+)', item['text']) if item['type'] == 'DO' else None
        if sm: cur_slide = int(sm.group(1))
        if t.startswith('DO: Say this over Slide 1'): cur_slide = 2
    return {'slides': slides, 'acts': acts, 'pillars': {str(k): v for k, v in pillars.items()}}
def as_text(items):
    out = []
    for i in items:
        out.append(i['text'] if i['type'] in ('HEAD', 'NOTE') else f"{i['type']}: {i['text']}")
    return '\n\n'.join(out)
if __name__ == '__main__':
    r = load()
    for s in sorted(r['slides']): print('slide', s, len(r['slides'][s]), 'items')
    print({k: len(v) for k, v in r['acts'].items()}, {k: len(v) for k, v in r['pillars'].items()})
