# Stochastic SPM Demo Kit

Give a better demo. One config file builds an **interactive walkthrough**, a **slide deck** and a **run-of-show script** for a 60-minute, five-act demo of AI-enabled strategic portfolio management (SPM), built on the 7 Pillars framework.

**Live demo:** enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / `docs`) and it will appear at `https://level5consulting.github.io/stochastic-spm-demo/`.

> *Stochastic (adj.)* - governed by probability, not fixed rules. The opposite of a guess.

## Just want to play? (2 minutes)

1. Open `docs/index.html` in a browser. That is the full walkthrough.
2. Want it to say your company name and show your CTA? Edit `kit/demo-config.json`, then run:

```bash
pip install python-pptx python-docx
cd kit
python3 build_all.py
```

You get `demo.html`, `deck.pptx` and `run-of-show.docx` in `kit/`.

## Use it with Claude

Copy `skill/stochastic-spm-demo-builder/` into your Claude skills folder. Then ask: *"Build me an SPM demo for a regional bank."* The skill asks up to four questions and builds all three files for you.

## Want to change everything?

- `kit/demo-config.json` - every name, number, chart series and line of story text.
- `kit/template.html` - the interactive demo (reads from the config).
- `kit/deck-template.pptx`, `kit/script-template.docx` - edit in PowerPoint or Word; `{{path.to.value}}` placeholders are filled from the config.

## What is in the demo

Pre-roll: the 7 Pillars. Then five acts: I The Leader's Anxiety, II The Operator's Grind, III The Hero Moment (all 7 pillars), IV The Value Hypothesis, V The Outcome Realized.

## Important

All data, names and charts are **simulated and illustrative**. No real product or client is shown.

## License

Code: MIT (`LICENSE`). Framework content: CC BY 4.0 (`LICENSE-CONTENT.md`). Please credit "Stochastic SPM Demo Kit by Level 5ive Consulting".

## Want help applying this to your own portfolio?

[Book a 20-minute walkthrough with Level 5ive Consulting](https://bookings.cloud.microsoft/bookwithme/user/dcceec89368b4eaaa3b2558d75329dc2@level5iveconsulting.com/meetingtype/u9JHaejWVk6c7OBoClRCmA2?anonymous&ismsaljsauthenabled&ep=mcard)
