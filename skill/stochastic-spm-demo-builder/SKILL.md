---
name: stochastic-spm-demo-builder
description: Build a tailored 60-minute demo kit (interactive HTML walkthrough, slide deck, run-of-show script) from the Stochastic SPM Demo Kit. Use when someone wants to create, customize or rehearse a demo or presentation using the 5-act / 7-pillar structure.
---

# Stochastic SPM Demo Builder

Turns the kit in `kit/` into a demo that fits the user's company, audience and story. One file, `kit/demo-config.json`, drives all three outputs.

## Fast path ("just give me something that works")

Ask at most these four questions, in one message, and accept "skip" for any of them:

1. What is the company or fictional prospect called, and what industry? (default: keep the sample company)
2. Who is the audience: executives, operators, or mixed? (default: mixed)
3. What should the call-to-action button say and link to? (default: keep the existing booking link and label)
4. Any initiative names or numbers you want to show instead of the sample ones? (default: keep the sample data)

Then:
1. Copy `kit/` to a working folder.
2. Edit `demo-config.json`: `brand`, `cta`, `footer`, `tracker.initiatives`, and any `story`, `numbers` or `series` values the user supplied. Keep every string in the same JSON shape. Do not remove the attribution line or the illustrative-data disclaimer.
3. Run `pip install python-pptx python-docx` if needed, then `python3 build_all.py`.
4. Open `demo.html` and check that all five acts and all seven pillars show their charts. Check that no placeholder text like `{{` appears in the deck or script.
5. Deliver `demo.html`, `deck.pptx` and `run-of-show.docx` with a two-line summary of what changed.

## Ambitious path ("I want to change everything")

- Edit any section of `demo-config.json`. Numbers and chart series live under `numbers` and `series`; text under `story`.
- Act titles and timings are under `acts`; keep them adding up to the demo length.
- For new slides or layouts, edit `deck-template.pptx` in PowerPoint and use `{{path.to.value}}` placeholders. For script text, edit `script-template.docx` the same way.
- For new screens or charts, edit `template.html`; read data from the `CFG` object, never hard-code numbers.

## Rules

- All data is illustrative. Say so in the footer and keep the disclaimer.
- Keep content vendor-neutral unless the user supplies their own product names.
- Numbers that appear in more than one place (for example hours per week) must agree everywhere; check this before delivering.
- Use plain, honest numbers. Do not present simulated results as real customer outcomes.
