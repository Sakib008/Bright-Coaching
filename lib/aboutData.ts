// ─────────────────────────────────────────────────────────────────────────────
// lib/aboutData.ts  —  Single source of truth for the About page
// ─────────────────────────────────────────────────────────────────────────────

export const INSTITUTE_META = {
  name:     "Bright Minds Coaching Institute",
  founded:  2011,
  tagline:  "Structured learning, measurable outcomes, lifelong confidence.",
  location: "Connaught Place, New Delhi",
};

// ── Stats ────────────────────────────────────────────────────────────────────
export type Stat = {
  id:      string;
  value:   number;
  suffix:  string;
  label:   string;
  sub:     string;
};

export const STATS: Stat[] = [
  { id: "students",  value: 12000, suffix: "+", label: "Students mentored",      sub: "Since 2011"                },
  { id: "selection", value: 92,    suffix: "%",  label: "Selection rate",         sub: "JEE · NEET · CUET 2026"   },
  { id: "faculty",   value: 45,    suffix: "+",  label: "Expert faculty members", sub: "Avg 14 yrs experience"    },
  { id: "years",     value: 15,    suffix: "",   label: "Years of excellence",    sub: "Established 2011"         },
  { id: "toppers",   value: 250,   suffix: "+",  label: "Top 100 AIR ranks",      sub: "JEE Advanced + NEET UG"   },
  { id: "batches",   value: 98,    suffix: "%",  label: "Parent satisfaction",    sub: "Annual survey 2026"       },
];

// ── Story timeline ───────────────────────────────────────────────────────────
export type StoryChapter = {
  id:    string;
  year:  string;
  phase: string;
  title: string;
  body:  string;
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id:    "founding",
    year:  "2011",
    phase: "The Beginning",
    title: "A single classroom in Karol Bagh.",
    body:  "Bright Minds started with 18 students, two teachers, and one simple conviction — that every serious student deserves a mentor who takes their goal personally, not just a seat in a crowded hall.",
  },
  {
    id:    "growth",
    year:  "2016",
    phase: "The Expansion",
    title: "400 students, a new centre, and our first AIR Top 100.",
    body:  "By 2016 we had outgrown two buildings. Our structured weekly test system and 1:12 mentor ratio started producing consistently measurable results — not occasional miracles.",
  },
  {
    id:    "vision",
    year:  "2026",
    phase: "The Vision Ahead",
    title: "Technology + mentorship for the next generation.",
    body:  "Today we blend live teaching, AI-powered performance tracking, and senior mentor check-ins to ensure every student improves week-on-week, not just before the exam.",
  },
];

// ── Faculty ──────────────────────────────────────────────────────────────────
export type FacultyMember = {
  id:          string;
  name:        string;
  subject:     string;
  experience:  string;
  qualification: string;
  highlight:   string;
  img:    string;
  color:       string;
};

export const FACULTY: FacultyMember[] = [
  { id: "mehta",   name: "Dr. Anil Mehta",    subject: "Physics",   experience: "18 yrs", qualification: "PhD — IIT Delhi",    highlight: "Concept-clarity specialist. 200+ JEE Top-100 students.",   img: "https://images.pexels.com/photos/36781271/pexels-photo-36781271.jpeg", color: "#0B3C5D" },
  { id: "sharma",  name: "Prof. Sunita Sharma",subject: "Chemistry", experience: "14 yrs", qualification: "M.Sc Gold Medalist", highlight: "NCERT mastery + error-map methodology.",                   img: "https://images.pexels.com/photos/35745677/pexels-photo-35745677.jpeg", color: "#27AE60" },
  { id: "kapoor",  name: "Ms. Priya Kapoor",  subject: "Biology",   experience: "12 yrs", qualification: "MSc Biotechnology",  highlight: "High-yield diagrams + memory systems for NEET.",           img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", color: "#7C3AED" },
  { id: "gupta",   name: "Mr. Rohit Gupta",   subject: "Maths",     experience: "16 yrs", qualification: "IIT Kharagpur",      highlight: "Shortcut-free, concept-rooted problem solving.",           img: "https://images.pexels.com/photos/17811182/pexels-photo-17811182.jpeg", color: "#0891B2" },
  { id: "verma",   name: "Dr. Neha Verma",    subject: "English",   experience: "10 yrs", qualification: "MPhil — DU",         highlight: "CUET English + communication skills coaching.",            img: "https://images.pexels.com/photos/35769752/pexels-photo-35769752.jpeg", color: "#DB2777" },
  { id: "joshi",   name: "Mr. Suresh Joshi",  subject: "Economics", experience: "11 yrs", qualification: "MA Eco — JNU",       highlight: "CUET Social Science + Economics topper record.",          img: "https://images.pexels.com/photos/18870255/pexels-photo-18870255.jpeg", color: "#F39C12" },
];

// ── Vision & Mission ─────────────────────────────────────────────────────────
export type VisionItem = {
  id:    string;
  type:  "vision" | "mission" | "value";
  icon:  string;
  title: string;
  body:  string;
};

export const VISION_MISSION: VisionItem[] = [
  {
    id:    "vision",
    type:  "vision",
    icon:  "eye",
    title: "Our Vision",
    body:  "To become India's most trusted coaching institute — measured not by headcount but by the consistency of our students' outcomes, year after year.",
  },
  {
    id:    "mission",
    type:  "mission",
    icon:  "target",
    title: "Our Mission",
    body:  "To provide structured, mentor-led preparation that turns serious aspirants into consistent performers — with data, discipline, and deep care for every student.",
  },
  {
    id:    "integrity",
    type:  "value",
    icon:  "shield",
    title: "Integrity First",
    body:  "We show verified results, honest timelines, and realistic expectations — because students deserve honesty, not marketing copy.",
  },
  {
    id:    "data",
    type:  "value",
    icon:  "bar-chart",
    title: "Data-Driven Growth",
    body:  "Every test, every score, every doubt session is tracked. Students know exactly where they stand and exactly what to fix next.",
  },
];

// ── Why Choose Us ─────────────────────────────────────────────────────────────
export type ChooseItem = {
  id:      string;
  icon:    string;
  title:   string;
  body:    string;
  accent:  string;
};

export const WHY_CHOOSE: ChooseItem[] = [
  { id: "ratio",    icon: "users",        title: "1:12 mentor ratio",          body: "Small enough that every student is known by name — not just a roll number.",       accent: "#0B3C5D" },
  { id: "test",     icon: "clipboard",    title: "Weekly diagnostic tests",    body: "Not revision — actual error analysis. You know what's wrong before the exam.",      accent: "#27AE60" },
  { id: "doubt",    icon: "message",      title: "Daily doubt resolution",     body: "Dedicated daily slots — no student waits a week to get an answer.",                 accent: "#7C3AED" },
  { id: "report",   icon: "bar-chart-2",  title: "Progress reports to parents",body: "Attendance, test scores, and improvement notes — transparent and weekly.",          accent: "#0891B2" },
  { id: "alumni",   icon: "award",        title: "15 years of verified alumni", body: "Real selections at IIT, AIIMS, MAMC, DU — not isolated toppers but consistent batches.",accent: "#F39C12"},
  { id: "flexible", icon: "calendar",     title: "Flexible batch timings",     body: "Morning, evening, and weekend batches for school-going students and droppers.",     accent: "#DB2777" },
];

// ── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = {
  id:     string;
  name:   string;
  role:   string;
  text:   string;
  result: string;
  img: string;
  color:  string;
};

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Arjun Mehta",     role: "JEE Advanced 2026 — AIR 42",         text: "The weekly test review system helped me understand exactly where I was losing marks, not just that I was. That precision changed my preparation completely.",       result: "IIT Bombay — CS",   img: "AM", color: "#0B3C5D" },
  { id: "t2", name: "Priya Sharma",    role: "NEET UG 2026 — 710/720",              text: "After two average attempts elsewhere, Bright Minds gave me a structured system — not just more classes. The doubt sessions were genuinely solved, not postponed.", result: "AIIMS New Delhi",   img: "PS", color: "#27AE60" },
  { id: "t3", name: "Parent of Riya",  role: "CUET 2026 — 98.2 percentile",         text: "Communication from the institute was exemplary. Weekly progress notes, test scores, and attendance — we always knew exactly where Riya stood.",                   result: "DU Economics Hons", img: "RV", color: "#7C3AED" },
  { id: "t4", name: "Karan Singh",     role: "JEE Main 2026 — 99.4 percentile",     text: "I joined as a dropper feeling defeated. The mentorship at Bright Minds restored both my preparation and my confidence. Best decision I made.",                    result: "NIT Trichy",        img: "KS", color: "#0891B2" },
  { id: "t5", name: "Ananya Gupta",    role: "NEET UG 2026 — 695/720",              text: "The 1:1 mentor sessions every fortnight were what separated Bright Minds from every other institute I had attended. Someone was actually tracking my progress.",    result: "MAMC Delhi",        img: "AG", color: "#DB2777" },
];

// ── Gallery ──────────────────────────────────────────────────────────────────
export type GalleryItem = {
  id:      string;
  label:   string;
  alt:     string;
  size:    "large" | "medium" | "small";
  img:      string;
};

export const GALLERY: GalleryItem[] = [
  { id: "g1", label: "Main lecture hall",         alt: "Students in Bright Minds main lecture hall during Physics class",  size: "large",  img: "https://images.pexels.com/photos/27892094/pexels-photo-27892094.jpeg" },
  { id: "g2", label: "Doubt resolution room",     alt: "Small group doubt session with faculty at Bright Minds",           size: "medium", img: "https://images.pexels.com/photos/36834054/pexels-photo-36834054.jpeg" },
  { id: "g3", label: "Result celebration 2026",   alt: "Students celebrating 2026 JEE and NEET selections",               size: "medium", img: "https://images.pexels.com/photos/30701321/pexels-photo-30701321.jpeg" },
  { id: "g4", label: "Digital test lab",          alt: "Students at computer terminals in the Bright Minds test lab",      size: "small",  img: "https://images.pexels.com/photos/5453909/pexels-photo-5453909.jpeg" },
  { id: "g5", label: "Mentorship session",        alt: "Faculty mentor in 1-on-1 session with a JEE aspirant",            size: "small",  img: "https://images.pexels.com/photos/35745620/pexels-photo-35745620.jpeg" },
  { id: "g6", label: "Library and study zone",    alt: "Students studying in the Bright Minds library and reading room",   size: "medium", img: "https://images.pexels.com/photos/35551100/pexels-photo-35551100.jpeg" },
  { id: "g6", label: "Studing in Classroom",    alt: "Students studying in the Bright Minds library and reading room",   size: "medium", img: "https://images.pexels.com/photos/5494260/pexels-photo-5494260.jpeg" },
];
