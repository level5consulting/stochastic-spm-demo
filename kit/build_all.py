#!/usr/bin/env python3
"""One command: builds demo.html, deck.pptx and run-of-show.docx from demo-config.json."""
import subprocess, sys, pathlib
d = pathlib.Path(__file__).parent
for s in ('build.py', 'build_deck.py', 'build_script.py'):
    subprocess.run([sys.executable, str(d/s)], check=True)
