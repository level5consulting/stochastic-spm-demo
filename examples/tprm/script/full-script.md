# Supplier Early Warning - Full Script

Halvern Medical demo · Greg Stellflue · Oct 2026

## BACKGROUND - MEET HALVERN MEDICAL

### The company

Halvern Medical is a mid-size US medical device maker (fictional) with about 1,400 active third parties. Its growth product is **Steadia**, a continuous glucose monitor: a disposable wearable sensor, a reusable transmitter, and a companion mobile app. Steadia is sold in the US and Latin America and is regulated by FDA.

### The people

- **Dana Whitfield** - VP, Global Supplier Quality and Third-Party Risk. Reports to the COO. Accountable for supplier risk and for supplier controls when FDA inspects. *(Played by a volunteer from the audience)*
- **The COO** - Dana's boss. Owns the Steadia launch commitments. *(Played by a second volunteer from the audience)*
- **Maya Ortiz** - Senior Third-Party Risk Analyst. Runs the day-to-day program: intake, questionnaires, assessments, reporting. *(Played by anyone else in the room)*

### The critical third parties

| Supplier | What they do for Steadia | Why they matter |
| --- | --- | --- |
| Brightwater Sterilization | Sterilizes every sensor (EtO) | Effectively single-source |
| Kestrel Contract Manufacturing (Penang) | Assembles the sensor | GxP quality, offshore |
| Aldermoor Adhesives | Skin adhesive patch | Direct patient contact |
| Corvane Semiconductor | Bluetooth chip in the transmitter | Long lead times |
| Northpeak Cloud | Hosts the app and patient data | Cybersecurity and privacy |
| Meridian Distribution | Latin American distributor | Anti-bribery exposure |

### The situation today

Supplier reviews run on an annual calendar using self-reported questionnaires. Years of audit reports, corrective action responses, and supplier correspondence sit in documents and inboxes nobody has time to read. Halvern is due for an FDA surveillance inspection. In the demo you'll see Tributary, a fictional AI-enabled early warning system for third-party risk.

### The question that starts the story

This morning, Brightwater reported that one of its sites may lose capacity. The COO has asked Dana: *"How exposed is the Steadia launch?"*

### Discovery recap

We've already met with Halvern. Here's what each of you told us - play your role from here.

- **Dana:** "When a critical supplier has a problem, we usually find out because the supplier tells us, or it shows up as a late shipment."
- **The COO:** "What I need from Dana is a straight answer. How bad is it, and what are we doing about it."
- **Maya:** "Most of my time goes to chasing questionnaires and building the quarterly report."

### Your role

- A volunteer plays Dana Whitfield.
- A second volunteer plays the COO.
- **Anyone else** plays Maya Ortiz.

Answer in role when Greg asks you a question. Push back the way a real buyer would.

## OPEN (2 min)

### The trailer

[Slide 1: Tributary - An AI-enabled early warning system for third-party risk]

Thank you, and thanks everyone for the time.

Over the next 45 minutes I'm going to tell you a story about a medical device company that gets bad news from a critical supplier on a Tuesday morning. Its VP of supplier quality has until 5 o'clock to tell the COO how exposed they are. And she can't.

[Pause]

By the end, she'll answer that question in minutes - with evidence an FDA investigator would accept.

What changes isn't that her team works harder. It's that the answer was already sitting in her own files. Years of audit reports, corrective actions, supplier emails - evidence no team could ever read. Tributary, an AI-enabled early warning system, makes it possible to read all of it, and to see which suppliers are slipping before they tell you.

That's the movie. And you're in it.

### Casting

As you saw in the pre-read, for the next 45 minutes you're Halvern's team, and we've already had our discovery call. [First volunteer], you're Dana Whitfield, VP of Supplier Quality and Third-Party Risk. [Second volunteer], you're the COO - and you asked Dana a question this morning that she couldn't answer. [Anyone else], you're Maya Ortiz, Dana's lead analyst.

## ACT I - THE LEADER'S EXPOSURE (5 min)

[Slide 2: Meet Halvern Medical]

Let me introduce you to Halvern Medical. It's a fictional mid-size device maker, but if you've worked with life sciences customers, I think you'll recognize everything in it.

Halvern's growth product is Steadia, a continuous glucose monitor. A disposable sensor, a transmitter, and a phone app. People wear the sensor every day and replace it every couple of weeks, which means Halvern doesn't ship a product once - it has to keep shipping, every month, without a gap.

This is Dana Whitfield, VP of Global Supplier Quality and Third-Party Risk. When FDA walks in and asks how Halvern controls its suppliers, Dana is the one who answers. Her name is on that.

At 7:40 this morning, Dana's phone buzzed. It was an email from Brightwater Sterilization - the company that sterilizes every single Steadia sensor. One of their sites is under state environmental review. They may have to reduce capacity. No timeline. No details.

[Pause]

Every sensor Halvern ships goes through Brightwater. No sterilization, no sensors. No sensors, and patients who depend on Steadia start looking at other products. The launch revenue the board has been promised starts slipping.

By 9:15, the COO is in her doorway. One question: [pause] "How exposed are we?"

And he wants an answer by end of day, because he's presenting to the CEO tomorrow.

COO, that's you. What's the CEO going to ask you tomorrow?

> *[COO]: "Whether we'll hit the launch numbers."*

Dana's first call is to supply chain: how many days of sterilized sensors do we have on hand? The answer: "We'll get back to you."

[Switch to Tributary and press B: the Supplier Risk Tracker opens on Brightwater's row]

So Dana opens Brightwater's record. Risk tier: set at onboarding, three years ago. Last review: an annual questionnaire - which Brightwater filled out themselves, this August.

That's all she has.

[Same view: point to "Backup sterilizer, by system"]

So she asks the next question. Who's our backup sterilizer? Procurement has one answer. Quality has another. The ERP system has a third. And one of the three was never qualified.

[Pause. Let them find it.]

Think about where Dana is sitting right now. She doesn't know how much inventory she has. She has a COO waiting for a number. She has an FDA surveillance inspection coming, and supplier controls will be on the list. And she's realizing that if the investigator asked her today, "show me how you know Brightwater is under control," she'd be showing him a self-reported questionnaire from last year and a backup supplier that may not exist.

She's not going to give the COO an answer at 5 o'clock. She's going to give him a guess - and hope it holds.

[Pause]

That's the anxiety. Not that Dana's team isn't working. They're working very hard. It's that she's accountable for a risk she can only describe from old paperwork and memory.

Dana, is that how this morning felt?

> *[Dana]: "Pretty much. I'd be giving him a guess."*

COO, would you take a guess at 5 o'clock?

> *[COO]: "Not to the CEO, no."*

That's the gap. And here's the part that stings - we'll come back to it. The warning signs about Brightwater were already sitting in Halvern's own files. Nobody had time to read them.

To understand why, we need to meet the person who runs this program every day.

## ACT II - THE ANALYST'S CALENDAR (6 min)

[Switch back to the deck, Slide 2: point to Maya]

This is Maya Ortiz, Senior Third-Party Risk Analyst. Maya is the reason Halvern's program works at all. She and two other analysts are responsible for about 1,400 active third parties.

When the COO asked "how exposed are we," Maya was the first person Dana called. And Maya couldn't answer either. Not because she isn't good. Because of how her program is built.

[Slide 3: Maya's week]

Here's Maya's week.

Monday, she's chasing suppliers for overdue questionnaires. Some are three weeks late. A few have stopped answering. Brightwater was slow this year too - it took them almost two months to send theirs back. She'd made a note to follow up. She hasn't had time.

Tuesday, she's waiting on InfoSec, Privacy, and Quality to finish their sections of assessments she sent a month ago. And Supplier Quality ran an on-site audit at Kestrel, their sensor manufacturer, last spring. Maya has never seen the report. It lives in a different system.

[Pick up the pace from here]

Wednesday, a product team needs a new supplier approved by Friday and wants to know why it takes six weeks. Thursday, she's copying answers out of PDFs and emails into a spreadsheet. Friday, she's rebuilding the quarterly risk report by hand.

[Pause]

Notice what's not on that calendar: deciding which suppliers actually need her attention.

Maya, does that week look familiar?

> *[Maya]: "Wednesday is every day."*

[Slide 3: point to the review-hours bars]

Halvern does tier its suppliers. But the tiers were set at onboarding and rarely change. And the difference between a medium review and a high review is mostly the length of the questionnaire. So reviews happen on anniversaries, not on risk.

The scheduled reviews this year need roughly 7,000 hours of analyst and reviewer time. Three analysts have about 5,000. The program is behind before the year starts, and when something has to give, it's the work that takes judgment, not the work that has a deadline.

[Slide 4: The evidence nobody reads]

And here's what nobody gets to. Over the years, Halvern has collected a mountain of evidence about its suppliers. Audit reports, like the one at Kestrel. Corrective action responses. Quality agreement deviations. Certificate renewals. Years of questionnaire answers, including the free-text comments. Emails explaining why something is late.

Thousands of documents. Read together, they'd tell you which suppliers are slipping. But they sit in folders and inboxes, in Quality's system and in Maya's spreadsheet, and the only time anyone looks is after something goes wrong.

[Slide 4: point to the status quo line]

So what are Dana's options? The obvious one is to hire two more analysts. Roughly a quarter of a million dollars a year. That helps with the backlog - maybe. But they'd be doing the same thing: same anniversaries, same questionnaires, same unread folders. Halvern would be paying more to stay reactive.

COO, would you approve two more analysts?

> *[COO]: "Maybe. But I'd want to know it fixes the problem, not just the backlog."*

Exactly.

[Pause]

Dana doesn't need more people reviewing suppliers on a calendar. She needs to know which suppliers need attention right now - and why.

So let's go back to this morning. Same suppliers. Same Brightwater email. Same COO in the doorway. But this time, Halvern can read its own evidence - with Tributary.

## ACT III - THE HERO MOMENT (16 min)

[Switch to Tributary and press B to leave the tracker: the Watch list is open]

Here's the same morning at a Halvern that runs Tributary - the AI-enabled early warning system I mentioned at the start. Halvern's audit reports, corrective actions, questionnaires, supplier correspondence, and public filings have been read by AI, turned into consistent data, and checked by Quality. Let's see what Dana sees in Tributary.

### Beat 1 - The watch list (3 min)

In Tributary, Maya's week starts with a watch list instead of a calendar.

These are the suppliers whose early warning scores moved this week, ranked by how much attention they need. Every one shows why - the top signals that moved it.

Some signals come from inside Halvern: an audit finding, a slipping delivery record, a corrective action that didn't close. Some come from outside: a regulatory filing, a cybersecurity disclosure, a financial event. The model weighs both.

[Point to Northpeak Cloud]

Northpeak, who hosts the Steadia app, moved up yesterday. That's an outside signal - a published vulnerability in software they run. Maya routes it to InfoSec to confirm Northpeak has patched.

[Point to Kestrel]

Kestrel moved last month. That's an inside signal - findings from the audit report Maya has now actually seen, plus two late corrective actions. Maya has already scheduled a follow-up with Supplier Quality.

[Pause]

A few things I want to be clear about. This is a ranking, not a verdict. It doesn't approve or reject anyone. Most weeks, most of these turn out to be fine. That's the point. Maya checks 20 instead of guessing at 1,400.

And the rest aren't ignored. Every supplier still gets baseline monitoring - certificate expirations and public regulatory notices, at minimum.

Dana, in our discovery call you told me you usually find out from the supplier. Here's the evidence telling you first.

Maya, this is your Monday now. Twenty suppliers, not 1,400.

> *[Maya]: "I'd take that."*

### Beat 2 - The rewind (6 min)

[Point to Brightwater, the top row]

Now look who's on the list. Brightwater.

[Click Brightwater: the record opens on the Risk history tab]

Here's Brightwater's early warning history in Tributary. Let's rewind.

[Point to the flat start of the line, Aug 18 to Aug 25]

Two months ago, Brightwater looked fine. Low score, stable.

[Click marker 1: questionnaire latency]

Here's the first signal. Brightwater's annual questionnaire. In past years they answered in about a week. This year it took almost two months.

[Pause]

That's the one Maya mentioned on Monday. She noticed. She made a note. She didn't have time to follow up.

Maya, you noticed this one.

> *[Maya]: "I did. I just never got back to it."*

On its own, a slow response doesn't mean much. People go on vacation. So the model doesn't treat it as a problem. It treats it as something to watch.

[Click marker 2: attestation mismatch]

Here's the second signal. In that questionnaire, Brightwater attested that it had no open regulatory actions at any facility.

[Point to the questionnaire answer, then the state notice]

But three weeks earlier, a state environmental agency had posted a notice of review at one of Brightwater's sterilization sites. Public record. Nobody at Halvern connected the two, because nobody reads every state filing for 1,400 suppliers.

What the supplier said and what the evidence showed don't match. That's the kind of signal that matters most.

[Click marker 3: recycled corrective action]

And the third. A corrective action Halvern had open with Brightwater on a documentation issue. Their response reused most of the language from a response they sent two years earlier. Same root cause, same fix, nearly word for word.

None of these is alarming alone. Together, they tell a story.

[Click marker 4: today's notification]

[Point to the vertical line: Crossed watch line, Sep 8]

Brightwater crossed into the top of the watch list here - six weeks before this morning's email.

[Long pause]

Dana, if you'd seen this six weeks ago, what would you have done?

> *[Dana]: "Called Brightwater, and started qualifying a backup sterilizer."*

Six weeks of head start on a qualification that takes months.

Halvern didn't need Brightwater to tell them. The evidence already had. It was in Maya's inbox, in a corrective action file, and in a public notice. The only thing missing was the ability to read it all and connect it.

### Beat 3 - Where scores don't belong (2 min)

[Click Due diligence in the left nav, then Meridian Distribution]

Before Dana goes back to the COO, one contrast - because not everything belongs on a watch list.

This is from a different part of the program. Halvern is onboarding Meridian, a new distributor in Latin America. Due diligence screening just came back: one of Meridian's owners has a close relationship with a government health official.

[Pause]

That doesn't get a score. It doesn't get a probability. It's a red flag. Onboarding stops, and it goes straight to Compliance.

Early warning is for spotting trends in evidence. Some risks aren't trends. They're facts, and they need a human decision immediately. Knowing the difference is part of running a good program.

### Beat 4 - The answer at 5 o'clock (5 min)

[Click Reviews in the left nav, then RV-0412: the Brightwater review]

Now back to Brightwater, and Dana's deadline.

A flag isn't worth anything unless someone acts on it. And in a regulated company, a flag that nobody reviews can become evidence that you knew and did nothing.

So every Tributary flag routes to a documented review. An owner, a date, a decision, and the evidence behind it. That record is exactly what an FDA investigator wants to see when they ask how you control your suppliers.

[Same page: the Exposure window chart]

By early afternoon, supply chain finally came back with the number Dana asked for this morning: about six weeks of sterilized sensors on hand. Brightwater's other site is validated for Steadia, but it's running near capacity. Validating a new sterilizer takes months, not weeks.

So the exposure is real, and it's specific. If Brightwater's capacity drops for more than six weeks, and the other site can't absorb it, Halvern has a gap. And Tributary puts a number on it: about $32 million a month of Steadia supply runs through Marlow. Halvern is covered for about eight weeks. Past that, it's exposed at roughly $7 to $8 million a week until a second sterilizer is qualified. Worst case, more than $100 million.

[Same page: point to the Actions list]

And remember the three backup sterilizers? The system flags that the one Procurement listed was never qualified. So Dana's actions are clear. Secure priority capacity at Brightwater's other site. Start qualifying a second sterilizer now. Tell the COO the exposure window and the plan.

[Click Record decision] At 5 o'clock, that's not a guess. It's an answer with evidence behind it.

COO, is that an answer you can take to the CEO?

> *[COO]: "That I can take in. A window and a plan."*

And Dana - pulling that together took you about four minutes.

So that's what changes for Dana and Maya. Now let's talk about what it's worth.

## ACT IV - THE VALUE HYPOTHESIS (7 min)

[Switch back to the deck, Slide 5: A 90-day pilot]

Dana just had a good afternoon. But one good afternoon doesn't get funded. So let's talk about what this is worth - as a hypothesis we'd prove together, not a promise.

COO, in our discovery call you said what you need from Dana is a straight answer - how bad is it and what are we doing about it. So let's start with what a bad answer costs.

### The cost of not knowing

Steadia brings in about $40 million a month, so a single week of supply interruption is worth $7 to $8 million in revenue - illustrative. And that's before the customers who switch and don't come back, and before the notifications to FDA and customers that a supply interruption on a device people rely on every day can trigger.

Dana, you said if you'd seen Brightwater six weeks earlier, you'd have started qualifying a backup. That head start is where the value is. Not in the dashboard. In the weeks.

### What we'd measure

[Slide 5: the measures table]

Here's what I'd propose we measure in a 90-day pilot on Halvern's critical and high-tier suppliers:

- Critical suppliers with evidence newer than 90 days
- Single-source critical suppliers without a qualified alternate
- Time to produce supplier control evidence for an FDA investigator
- Analyst hours spent on critical suppliers vs. low-risk ones
- Early warning accuracy against Halvern's own history

[Don't read the list. Let the screen carry it and go straight to the COO.]

COO, if you could only fund two of these, which would you pick?

> *[COO]: "Single-source exposure, and the accuracy test. If it can't show me it would have caught Brightwater, I'm not interested."*

That's the right instinct. Single-source exposure tells you where you're vulnerable - today, Dana doesn't know that number, and Brightwater is one of them.

The accuracy test tells you whether to trust the tool. We replay the last year of Halvern's own history and ask: did the suppliers that got flagged turn out to be the ones that had problems? In a year, there may only be a handful of real events, so it's evidence, not proof. But it's evidence from your suppliers, not from a demo.

### The alternative on the table

Now let's compare it to the option Dana already has.

Two more analysts: roughly a quarter of a million dollars a year. Shorter backlog, maybe. Same calendar, same questionnaires, same unread evidence. Brightwater still tells you first.

Tributary: Maya's three-person team spends its hours on the 20 suppliers that need them. The evidence tells you first. And every flag leaves a documented review behind it.

COO, I know your next question.

> *[COO]: "What does it cost?"*

Less than the two analysts, and we'd scope the pilot to your critical and high-tier suppliers. You're paying to learn, not to roll out. If the accuracy test doesn't hold up, you've spent a pilot, not a program.

Maya, which would you rather have?

> *[Maya]: "Honestly? The one where I stop chasing questionnaires."*

Dana, if the pilot shows it would have caught Brightwater, is that enough for you to take to the COO?

> *[Dana]: "If it caught Brightwater, yes."*

[Pause. Let it land.]

### The next step

Then here's what I'd propose. A 90-day Tributary pilot on your critical and high-tier suppliers, with Dana as the sponsor and Maya running it day to day. Success is the two measures the COO picked: single-source exposure identified with a plan, and an accuracy test on your own history. We'd start the first week of next month.

COO, can we put that on the calendar?

> *[COO]: "Send me the scope."*

Then let's see what that looks like two quarters from now.

## ACT V - THE OUTCOME REALIZED (4 min)

[Slide 6: Two quarters later]

Two quarters later.

### Brightwater

Brightwater's site review ran about two months. Because Dana had secured priority capacity at Brightwater's other site that same week, Halvern kept shipping. Supply was tight for a few weeks, and the allocation decisions about which customers got sensors first were documented, just like the review.

The second sterilizer isn't qualified yet. Validation takes months, and it's on track for next quarter. But Halvern finally has a real backup in progress instead of a name on a list.

### The pilot

The accuracy test came back. Of the handful of real supplier problems in Halvern's past year, early warning would have flagged most of them weeks ahead. Not all of them - one slipped through. But every one it flagged left a trail Maya could have acted on.

And Brightwater wasn't the only single-source exposure. The pilot found four more critical suppliers with no qualified alternate. Each one now has an owner and a plan. Kestrel's late corrective actions are closed. Northpeak patched within a week.

After the pilot, the COO approved rolling Tributary out across all supplier tiers.

Maya, how's your week now?

> *[Maya]: "I start with the list. And I finally read the audit reports."*

### The inspection

Then the FDA investigator walked in, unannounced, for a surveillance inspection. Supplier controls were on the list, just like Dana knew they would be.

The investigator asked: "Show me how you control your sterilization supplier."

Dana pulled up Brightwater. Current evidence. The early warning history in Tributary. The documented review from that Tuesday, with the decision and the actions. The allocation record. The qualification in progress for a second sterilizer.

Dana, how long did that take?

> *[Dana]: "Minutes, instead of days."*

The documented reviews held up. No observations on supplier controls.

[Pause]

### What's still open

Not everything is solved. Corvane, the chip supplier for the transmitter, is still on the watch list. Lead times keep stretching, and there's no easy alternate for that part. Dana knows it, the COO knows it, and Maya is watching it every week.

That's what a working program looks like. Not zero risk. Risk you can see, and a record of what you did about it.

COO, remember the question you asked Dana that morning?

> *[COO]: "How exposed are we."*

Today she can answer that for any critical supplier - in minutes, with evidence.

## CLOSE (90 sec)

[Slide 7: The evidence was already yours]

[Step out of the role-play]

Let me step out of Halvern - and thank you for playing along.

The answer to the COO's question was in Halvern's evidence all along. It was already theirs. AI - in this case Tributary - made it possible to read it.

That's how I'd approach your customers: start with the question their leader can't answer today, and show them the answer is closer than they think.

Third-party risk used to ask suppliers how risky they are. Now the evidence answers continuously.

Thank you. I'd love to take your questions.

[Transition to Q&A]

---

Presenter notes: see presenter-notes.md
