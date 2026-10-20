const pptxgen = require('pptxgenjs');
const { applyTheme } = require("/root/.claude/skills/synced/412d888f-7e80-4a6a-beef-16368f5958aa_5616ea20-3a19-445a-ad4d-61194a4bdd09/pptx/scripts/apply_theme.js");
const THEME={name:"Halvern",headFontFace:"Cambria",bodyFontFace:"Calibri",colors:{dk1:"1B2420",lt1:"FFFFFF",dk2:"1F6B5C",lt2:"EEF3F0",accent1:"1F6B5C",accent2:"B3261E",accent3:"A15C00",accent4:"5D6B64",accent5:"E1EFE9",accent6:"FBE9E7",hlink:"1F6B5C",folHlink:"5D6B64"}};
const pres=new pptxgen(); pres.layout="LAYOUT_WIDE"; pres.theme={headFontFace:"Cambria",bodyFontFace:"Calibri"};
pres.title="Tributary - AI-Enabled Early Warning"; pres.author="Greg Stellflue";
const C=pres.SchemeColor;
pres.defineSlideMaster({title:"TITLE",background:{color:"FFFFFF"},objects:[
 {placeholder:{options:{name:"title",type:"title",x:0.8,y:2.3,w:11.7,h:1.4,fontSize:48,bold:true,color:C.text2,fontFace:"Cambria",valign:"bottom",align:"left"},text:""}},
 {placeholder:{options:{name:"body",type:"body",x:0.8,y:3.8,w:11.7,h:1.2,fontSize:22,color:C.accent4,valign:"top"},text:""}}]});
pres.defineSlideMaster({title:"CONTENT",background:{color:"FFFFFF"},objects:[
 {placeholder:{options:{name:"title",type:"title",x:0.6,y:0.4,w:12.1,h:0.9,fontSize:36,bold:true,color:C.text1,fontFace:"Cambria",valign:"middle",align:"left"},text:""}},
 {text:{text:"Halvern Medical and Tributary are fictional · figures are illustrative",options:{x:0.6,y:7.0,w:8,h:0.3,fontSize:10,color:C.accent4}}}],
 slideNumber:{x:12.3,y:7.0,w:0.5,h:0.3,fontSize:10,color:"5D6B64"}});
const card=(s,x,y,w,h,fill,name)=>s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x,y,w,h,rectRadius:0.08,fill:{color:fill},line:{color:"DDE2DC",width:0.75},objectName:name});
const tx=(s,t,o)=>s.addText(t,Object.assign({isTextBox:true,margin:0,fontFace:"Calibri",color:C.text1},o));

// 1 Title
pres.addSection({title:"Open"});
let s=pres.addSlide({masterName:"TITLE",sectionTitle:"Open"});
s.addText("Tributary",{placeholder:"title"});
s.addText("An AI-enabled early warning system for third-party risk · A medical device story",{placeholder:"body"});
tx(s,"Greg Stellflue · October 20, 2026",{x:0.8,y:6.4,w:8,h:0.4,fontSize:14,color:C.accent4});
s.addNotes("Trailer: introduce Tributary, an AI-enabled early warning system. A device maker gets bad news from a critical supplier. Its VP of supplier quality has until 5 o'clock to tell the COO how exposed they are, and she can't. By the end she answers in minutes, with evidence. Confirm roles from the pre-read: the first volunteer is Dana, the second is the COO, anyone else is Maya. Discovery is already done - go straight to Slide 2.");

// 2 Meet Halvern
pres.addSection({title:"Act I"});
s=pres.addSlide({masterName:"CONTENT",sectionTitle:"Act I"});
s.addText("Meet Halvern Medical",{placeholder:"title"});
tx(s,"Mid-size US device maker · ~1,400 third parties · growth product: Steadia continuous glucose monitor",{x:0.6,y:1.35,w:12,h:0.4,fontSize:16,color:C.accent4});
const ppl=[["Dana Whitfield","VP, Global Supplier Quality & Third-Party Risk","Answers to FDA for supplier controls"],["The COO","Dana's boss","Owns the Steadia launch commitments"],["Maya Ortiz","Senior Third-Party Risk Analyst","Runs the program day to day"]];
ppl.forEach((p,i)=>{const x=0.6+i*2.75; card(s,x,2.0,2.55,2.4,"EEF3F0","person"+i);
 s.addShape(pres.shapes.OVAL,{x:x+0.25,y:2.25,w:0.6,h:0.6,fill:{color:C.accent1},line:{type:"none"}});
 tx(s,p[0].split(" ").map(w=>w[0]).join("").slice(0,2),{x:x+0.25,y:2.25,w:0.6,h:0.6,fontSize:16,bold:true,color:C.background1,align:"center",valign:"middle"});
 tx(s,p[0],{x:x+0.25,y:3.0,w:2.1,h:0.35,fontSize:16,bold:true});
 tx(s,p[1],{x:x+0.25,y:3.35,w:2.1,h:0.5,fontSize:12,color:C.accent4});
 tx(s,p[2],{x:x+0.25,y:3.85,w:2.1,h:0.45,fontSize:12});});
card(s,8.95,2.0,3.75,2.4,"FBE9E7","brightwater");
tx(s,"Brightwater Sterilization",{x:9.2,y:2.25,w:3.3,h:0.4,fontSize:18,bold:true,color:C.accent2});
tx(s,"Sterilizes every Steadia sensor",{x:9.2,y:2.7,w:3.3,h:0.35,fontSize:14});
tx(s,"Effectively single-source",{x:9.2,y:3.05,w:3.3,h:0.35,fontSize:14});
tx(s,"7:40 AM: one site under state review, capacity may drop",{x:9.2,y:3.45,w:3.3,h:0.8,fontSize:13,italic:true,color:C.accent4});
tx(s,"“How exposed are we?”",{x:0.6,y:4.9,w:12.1,h:1.0,fontSize:40,fontFace:"Cambria",bold:true,color:C.text2,align:"center"});
tx(s,"The COO, 9:15 AM · answer needed by 5 o'clock",{x:0.6,y:5.85,w:12.1,h:0.4,fontSize:14,color:C.accent4,align:"center"});
s.addNotes("Introduce Halvern and Steadia. Dana's name is on supplier controls. 7:40 email from Brightwater, 9:15 COO in the doorway, answer by end of day for the CEO tomorrow. Then switch to Tributary and press B for the old tracker view (the system itself is introduced by name in Act III).");

// 3 Maya's week
pres.addSection({title:"Act II"});
s=pres.addSlide({masterName:"CONTENT",sectionTitle:"Act II"});
s.addText("Maya's week",{placeholder:"title"});
const days=[["Monday","Chasing overdue questionnaires","Brightwater took almost two months this year. Note to follow up."],["Tuesday","Waiting on InfoSec, Privacy, Quality","Kestrel audit report lives in another system. Never seen it."],["Wednesday","Business escalation","Why does a new supplier take six weeks?"],["Thursday","Rekeying evidence","PDFs and emails into a spreadsheet"],["Friday","Quarterly risk report","Rebuilt by hand"]];
days.forEach((d,i)=>{const x=0.6+i*2.47; card(s,x,1.5,2.27,3.3,"EEF3F0","day"+i);
 tx(s,d[0],{x:x+0.2,y:1.7,w:1.9,h:0.4,fontSize:18,bold:true,fontFace:"Cambria",color:C.text2});
 tx(s,d[1],{x:x+0.2,y:2.2,w:1.9,h:0.8,fontSize:15,bold:true});
 tx(s,d[2],{x:x+0.2,y:3.05,w:1.9,h:1.6,fontSize:13,color:C.accent4});});
tx(s,"Scheduled review hours this year",{x:0.6,y:5.15,w:4,h:0.35,fontSize:14,bold:true});
s.addShape(pres.shapes.RECTANGLE,{x:0.6,y:5.6,w:8.4,h:0.45,fill:{color:"A15C00"},line:{type:"none"}});
tx(s,"Needed  ~7,000",{x:0.75,y:5.6,w:4,h:0.45,fontSize:14,bold:true,color:C.background1,valign:"middle"});
s.addShape(pres.shapes.RECTANGLE,{x:0.6,y:6.15,w:6.0,h:0.45,fill:{color:"1F6B5C"},line:{type:"none"}});
tx(s,"Available  ~5,000",{x:0.75,y:6.15,w:4,h:0.45,fontSize:14,bold:true,color:C.background1,valign:"middle"});
tx(s,"Behind before the year starts. Reviews run on anniversaries, not on risk.",{x:9.3,y:5.55,w:3.4,h:1.1,fontSize:14,italic:true,color:C.accent4});
s.addNotes("Walk every day; speed up from Wednesday. Plant the Brightwater clue on Monday without emphasis. Ask Maya: does that week look familiar? Then the tier arithmetic.");

// 4 Evidence pile
s=pres.addSlide({masterName:"CONTENT",sectionTitle:"Act II"});
s.addText("The evidence nobody reads",{placeholder:"title"});
const ev=[["Audit reports","Quality system"],["Corrective action responses","Quality system"],["Quality agreement deviations","Quality system"],["Certificate renewals","Shared drive"],["Questionnaire free text","TPRM spreadsheet"],["Supplier emails","Inboxes"]];
ev.forEach((e,i)=>{const col=i%3,row=Math.floor(i/3),x=0.6+col*2.9,y=1.6+row*1.75; card(s,x,y,2.7,1.5,"FFFFFF","doc"+i);
 s.addShape(pres.shapes.RECTANGLE,{x:x+0.25,y:y+0.3,w:0.35,h:0.45,fill:{color:"E1EFE9"},line:{color:"1F6B5C",width:1}});
 tx(s,e[0],{x:x+0.8,y:y+0.22,w:1.75,h:0.7,fontSize:15,bold:true});
 tx(s,e[1],{x:x+0.8,y:y+0.95,w:1.75,h:0.35,fontSize:12,color:C.accent4});});
tx(s,"Thousands",{x:9.5,y:1.9,w:3.2,h:0.9,fontSize:44,bold:true,fontFace:"Cambria",color:C.text2});
tx(s,"of documents across separate systems",{x:9.5,y:2.8,w:3.2,h:0.7,fontSize:15,color:C.accent4});
tx(s,"Read together, they'd show which suppliers are slipping. Today they're read only after something goes wrong.",{x:9.5,y:3.7,w:3.2,h:1.6,fontSize:15});
tx(s,"The status quo option: two more analysts, roughly $250K a year. Same calendar, same unread evidence.",{x:0.6,y:5.35,w:8.5,h:0.8,fontSize:15,italic:true,color:C.accent3});
s.addNotes("Mountain of evidence, nobody has time. Ask the COO: would you approve two more analysts? Then: Dana needs to know which suppliers need attention now, and why. Switch to Tributary for Act III and reintroduce it: the AI-enabled early warning system from the trailer.");

// 5 Pilot measures
pres.addSection({title:"Act IV"});
s=pres.addSlide({masterName:"CONTENT",sectionTitle:"Act IV"});
s.addText("A 90-day Tributary pilot: what we'd measure",{placeholder:"title"});
const rows=[[{text:"Measure",options:{bold:true,color:"FFFFFF",fill:{color:"1F6B5C"}}},{text:"Today",options:{bold:true,color:"FFFFFF",fill:{color:"1F6B5C"}}},{text:"Pilot target",options:{bold:true,color:"FFFFFF",fill:{color:"1F6B5C"}}}],
 ["Critical suppliers with evidence newer than 90 days","Under half","Nearly all"],
 ["Single-source critical suppliers without a qualified alternate","Unknown","All identified, each with a plan"],
 ["Time to produce supplier control evidence for FDA","Days","Minutes"],
 ["Analyst hours on critical vs. low-risk suppliers","Spread by calendar","Weighted to risk"],
 ["Early warning accuracy on Halvern's own history","Not measured","Backtested on the past year"]];
s.addTable(rows,{x:0.6,y:1.5,w:12.1,colW:[6.1,2.6,3.4],fontSize:15,fontFace:"Calibri",color:"1B2420",border:{type:"solid",color:"DDE2DC",pt:0.75},rowH:0.62,valign:"middle",fill:{color:"FFFFFF"}});
tx(s,"Tributary pilot scope: critical and high-tier suppliers · Sponsor: Dana · Run by: Maya",{x:0.6,y:5.6,w:12,h:0.4,fontSize:14,color:C.accent4});
s.addNotes("Don't read the list. Ask the COO which two he'd fund. Explain single-source exposure and the accuracy test (evidence, not proof). Price question: less than two analysts, scoped to a pilot. Ask Dana: if it caught Brightwater, enough? Close with the next step and a date.");

// 6 Two quarters later
pres.addSection({title:"Act V"});
s=pres.addSlide({masterName:"CONTENT",sectionTitle:"Act V"});
s.addText("Two quarters later",{placeholder:"title"});
const out=[["No supply gap","Ashby capacity secured the same week; second sterilizer on track for next quarter","1F6B5C"],["4 more exposures found","Found by the Tributary pilot; each now has an owner and a plan","1F6B5C"],["No observations","FDA inspection: Tributary reviews held up as supplier-control evidence","1F6B5C"],["Still open: Corvane","Chip lead times keep stretching; on the Tributary watch list every week","A15C00"]];
out.forEach((o,i)=>{const col=i%2,row=Math.floor(i/2),x=0.6+col*6.15,y=1.6+row*2.2; card(s,x,y,5.95,1.95,i===3?"FDF0DC":"EEF3F0","out"+i);
 tx(s,o[0],{x:x+0.35,y:y+0.3,w:5.3,h:0.6,fontSize:26,bold:true,fontFace:"Cambria",color:o[2]});
 tx(s,o[1],{x:x+0.35,y:y+0.95,w:5.3,h:0.8,fontSize:15});});
s.addNotes("Brightwater outcome, pilot accuracy (one miss), four more exposures, rollout approved. Maya: I finally read the audit reports. FDA inspection: minutes instead of days, no observations on supplier controls. Corvane still open. COO: how exposed are we? Answerable in minutes.");

// 7 Close
pres.addSection({title:"Close"});
s=pres.addSlide({masterName:"TITLE",sectionTitle:"Close"});
s.addText("The evidence was already yours",{placeholder:"title"});
s.addText("Third-party risk used to ask suppliers how risky they are. With Tributary, the evidence answers continuously.",{placeholder:"body"});
s.addNotes("Step out of the role-play and thank them. Name Tributary once more as the illustration of the idea. One sentence on how you'd approach their customers. Then open Q&A.");

pres.writeFile({fileName:"Supplier_Early_Warning_Deck.pptx"}).then(()=>applyTheme("Supplier_Early_Warning_Deck.pptx",THEME)).then(()=>console.log("ok"));
