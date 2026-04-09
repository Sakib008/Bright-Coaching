// ─────────────────────────────────────────────────────────────────────────────
// lib/jeeData.ts  ·  Single source of truth for the JEE landing page
// ─────────────────────────────────────────────────────────────────────────────

export const JEE_META = {
  title:       "Best JEE Coaching Institute in Delhi — Bright Minds",
  description: "Join Bright Minds — Delhi's top JEE coaching institute. Expert IIT faculty, small batches, weekly tests, and 250+ IIT selections. Book your free demo class today.",
  keywords:    ["best JEE coaching", "JEE coaching near me", "top IIT JEE institute", "JEE Main preparation Delhi", "IIT JEE coaching institute"],
  canonical:   "https://brightminds.edu/jee",
};

// ── Benefits ─────────────────────────────────────────────────────────────────
export type Benefit = {
  id:     string;
  icon:   string;
  title:  string;
  body:   string;
  accent: string;
};

export const BENEFITS: Benefit[] = [
  { id:"faculty",    icon:"graduation-cap", title:"IIT-Educated Faculty",          body:"Every subject mentor holds an IIT, IISc, or equivalent qualification. No fresh graduates — only proven teachers.",            accent:"#0B3C5D" },
  { id:"ratio",      icon:"users",          title:"1:12 Mentor Ratio",              body:"Small enough that your mentor knows your error patterns, study hours, and target college — not just your name.",              accent:"#27AE60" },
  { id:"test",       icon:"clipboard-list", title:"Weekly Diagnostic Tests",        body:"Not revision tests — diagnostic ones. After every test you get an error-map, not just a rank.",                             accent:"#7C3AED" },
  { id:"doubt",      icon:"message-circle", title:"Daily Doubt Resolution",         body:"Dedicated daily doubt slots. No student at Bright Minds waits more than 24 hours for an answer.",                            accent:"#0891B2" },
  { id:"track",      icon:"bar-chart-2",    title:"AI-Assisted Progress Tracking",  body:"Your weekly performance is visualised — weak topics, improvement velocity, and predicted rank all in one dashboard.",       accent:"#F39C12" },
  { id:"material",   icon:"book-open",      title:"Curated Study Material",         body:"Chapter-wise theory notes, solved examples, and 6,000+ topic-tagged practice questions — all updated for JEE 2026.",       accent:"#DB2777" },
];

// ── Course Timeline ───────────────────────────────────────────────────────────
export type TimelineStep = {
  id:       string;
  phase:    string;
  duration: string;
  title:    string;
  body:     string;
  tags:     string[];
  color:    string;
};

export const TIMELINE: TimelineStep[] = [
  {
    id:       "foundation",
    phase:    "Phase 1",
    duration: "3 months",
    title:    "Foundation & Concept Building",
    body:     "Deep conceptual understanding across Physics, Chemistry, and Maths. NCERT mastery + JEE-level extensions. Weekly topic tests.",
    tags:     ["Class 11 Syllabus", "NCERT + Beyond", "Weekly Tests"],
    color:    "#0B3C5D",
  },
  {
    id:       "advanced",
    phase:    "Phase 2",
    duration: "4 months",
    title:    "JEE-Level Problem Solving",
    body:     "Advanced problem solving, multi-concept questions, and JEE Advanced pattern practice. Error analysis after every test set.",
    tags:     ["JEE Advanced Pattern", "Error Analysis", "Peer Benchmarking"],
    color:    "#27AE60",
  },
  {
    id:       "testseries",
    phase:    "Phase 3",
    duration: "3 months",
    title:    "Full-Length Test Series",
    body:     "20 full-length mock tests simulating exact JEE Main and Advanced conditions. Rank projection and personalised revision plan.",
    tags:     ["20 Mock Tests", "Rank Projection", "Personalised Revision"],
    color:    "#7C3AED",
  },
  {
    id:       "revision",
    phase:    "Phase 4",
    duration: "2 months",
    title:    "Rapid Revision + Exam Strategy",
    body:     "High-yield topic revision, time-management drills, and exam-day strategy sessions with faculty who have scored 99+ percentile.",
    tags:     ["High-Yield Topics", "Time Management", "Exam Strategy"],
    color:    "#F39C12",
  },
];

// ── Results ───────────────────────────────────────────────────────────────────
export type Result = {
  id:      string;
  name:    string;
  rank:    string;
  college: string;
  branch:  string;
  year:    string;
  score:   string;
  initials:string;
  color:   string;
};

export const RESULTS: Result[] = [
  { id:"r1", name:"Arjun Mehta",    rank:"AIR 42",   college:"IIT Bombay",    branch:"Computer Science",  year:"2026", score:"JEE Adv", initials:"AM", color:"#0B3C5D" },
  { id:"r2", name:"Divya Nair",     rank:"AIR 184",  college:"IIT Delhi",     branch:"Electrical Engg",   year:"2026", score:"JEE Adv", initials:"DN", color:"#27AE60" },
  { id:"r3", name:"Karan Singh",    rank:"99.4 %ile", college:"NIT Trichy",   branch:"Mechanical",        year:"2026", score:"JEE Main",initials:"KS", color:"#7C3AED" },
  { id:"r4", name:"Sneha Rastogi",  rank:"AIR 310",  college:"IIT Kharagpur", branch:"Mathematics",       year:"2026", score:"JEE Adv", initials:"SR", color:"#0891B2" },
  { id:"r5", name:"Rohan Kapoor",   rank:"99.1 %ile", college:"BITS Pilani",  branch:"CS & Eco",          year:"2025", score:"JEE Main",initials:"RK", color:"#F39C12" },
  { id:"r6", name:"Ayesha Siddiqui",rank:"AIR 521",  college:"IIT Madras",    branch:"Chemical Engg",     year:"2025", score:"JEE Adv", initials:"AS", color:"#DB2777" },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
export type JEETestimonial = {
  id:      string;
  name:    string;
  role:    string;
  text:    string;
  result:  string;
  initials:string;
  color:   string;
};

export const TESTIMONIALS: JEETestimonial[] = [
  {
    id:"t1", name:"Arjun Mehta", role:"IIT Bombay CS — AIR 42, JEE 2026",
    text:"Bright Minds didn't give me more content to study — they gave me a system to study smarter. The weekly error-map was the single biggest difference from every other institute I had tried.",
    result:"IIT Bombay — CS", initials:"AM", color:"#0B3C5D",
  },
  {
    id:"t2", name:"Divya Nair", role:"IIT Delhi EE — AIR 184, JEE 2026",
    text:"The daily doubt resolution policy is real. I never waited more than a day for a complex Physics problem to be solved. That consistency built my confidence during the final months.",
    result:"IIT Delhi — EE", initials:"DN", color:"#27AE60",
  },
  {
    id:"t3", name:"Parent of Karan Singh", role:"NIT Trichy, JEE Main 2026",
    text:"As a parent, I was sceptical. But the weekly progress reports with actual test data — not just words — earned our trust. We knew exactly where Karan stood every single week.",
    result:"NIT Trichy — Mech", initials:"KP", color:"#7C3AED",
  },
  {
    id:"t4", name:"Sneha Rastogi", role:"IIT Kharagpur Math — AIR 310, JEE 2026",
    text:"The test series in Phase 3 is not just practice — it's genuinely stressful in the best way. By exam day, I had already been through 20 full mocks. Nothing surprised me.",
    result:"IIT Kharagpur — Math", initials:"SR", color:"#0891B2",
  },
  {
    id:"t5", name:"Rohan Kapoor", role:"BITS Pilani CS Eco, JEE Main 2025",
    text:"I switched to Bright Minds after 8 months at another institute. The structure, the mentor relationship, and the material quality were on a completely different level.",
    result:"BITS Pilani — CS", initials:"RK", color:"#F39C12",
  },
];

// ── FAQs ──────────────────────────────────────────────────────────────────────
export type FAQ = {
  id:  string;
  q:   string;
  a:   string;
};

export const FAQS: FAQ[] = [
  {
    id:"f1",
    q: "Which is the best JEE coaching institute in Delhi?",
    a: "Bright Minds is consistently rated among the top JEE coaching institutes in Delhi, with 250+ IIT selections in 2026 alone and a 1:12 mentor-to-student ratio that ensures personalised attention.",
  },
  {
    id:"f2",
    q: "How do I prepare for IIT JEE from scratch?",
    a: "Start with NCERT mastery and concept clarity in Physics, Chemistry, and Maths. At Bright Minds, we follow a 4-phase programme — Foundation → Advanced → Test Series → Rapid Revision — designed for students starting from Class 11.",
  },
  {
    id:"f3",
    q: "What is the batch size at Bright Minds for JEE?",
    a: "We maintain a strict 1:12 mentor-to-student ratio. No batch exceeds 24 students, ensuring each student gets regular attention, doubt resolution, and personalised feedback.",
  },
  {
    id:"f4",
    q: "When should I start JEE preparation?",
    a: "Ideally from Class 11 with a 2-year programme for the best results. However, our 1-year intensive and dropper batches are also highly effective for students starting in Class 12 or repeating.",
  },
  {
    id:"f5",
    q: "Does Bright Minds offer online JEE coaching?",
    a: "We offer both offline classroom coaching at our Connaught Place centre and a hybrid model. Live sessions, recorded lectures, and the weekly test series are all accessible online.",
  },
  {
    id:"f6",
    q: "What is the fee structure for JEE coaching at Bright Minds?",
    a: "Fees vary by batch and programme duration. We encourage you to book a free counselling session first — our academic team will recommend the right batch and walk you through the fee structure with no obligation.",
  },
];

// ── Stats strip (used in HeroSection) ────────────────────────────────────────
export const HERO_STATS = [
  { value:"250+",  label:"IIT Selections in 2026" },
  { value:"AIR 42",label:"Best JEE Advanced Rank" },
  { value:"1:12",  label:"Mentor Ratio"           },
  { value:"15 Yrs",label:"Teaching Excellence"    },
];
