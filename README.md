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

## Presenting it

- **Presenter notes on the page:** open the demo and press **P** (or click "Presenter notes"). A side panel shows the script (SAY, DO, WATCH FOR, IF SHORT ON TIME) for the act and pillar you are on. Hidden by default.
- **Speaker notes in the deck:** every slide in `Stochastic_SPM_Demo_Deck.pptx` carries its part of the script in PowerPoint's notes pane.
- **Read the full script:** [docs/presenting-the-demo.md](docs/presenting-the-demo.md) (timing, talk track, pillar-by-pillar cues, anticipated questions, and what to do if the live demo fails).

All three come from one source, `kit/script-template.docx`. Edit it in Word, run `python3 build_all.py`, and the notes, deck and Markdown all update.

## Ready-made files (no build needed)

In `examples/`:
- `Stochastic_SPM_Demo_Deck.pptx` - the 12-slide deck the script follows (slide numbers in the script refer to it)
- `Stochastic_SPM_Run_of_Show.docx` - the full presenter script
- `demo-config.example.json` - the config that produced them

The interactive demo is `docs/index.html`. Using them as-is gives you the complete 60-minute demo; rebuild from `kit/` when you want your own names, numbers and story.

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
