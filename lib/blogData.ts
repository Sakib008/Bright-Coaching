// lib/blogData.ts — Single source of truth for Blog listing page

export const BLOG_META = {
  title:       "JEE & NEET Preparation Blog — Bright Minds Coaching Institute",
  description: "Expert tips, study strategies, and syllabus breakdowns for JEE Main, JEE Advanced, NEET, and CUET. Updated weekly by Bright Minds faculty.",
  canonical:   "https://brightminds.edu/blog",
};

export type Category = {
  id:    string;
  label: string;
  color: string;
};

export const CATEGORIES: Category[] = [
  { id: "all",      label: "All Articles",       color: "#0B3C5D" },
  { id: "jee",      label: "JEE Prep",            color: "#0B3C5D" },
  { id: "neet",     label: "NEET Prep",           color: "#27AE60" },
  { id: "cuet",     label: "CUET",                color: "#7C3AED" },
  { id: "strategy", label: "Study Strategy",      color: "#F39C12" },
  { id: "faculty",  label: "Faculty Insights",    color: "#0891B2" },
  { id: "results",  label: "Results & Rankings",  color: "#DB2777" },
];

export type BlogPost = {
  id:        string;
  slug:      string;
  category:  string;
  tag:       string;
  title:     string;
  excerpt:   string;
  author:    string;
  authorRole:string;
  date:      string;
  readTime:  string;
  featured:  boolean;
  gradient:  string;
  img:  string;
  accentColor: string;
};

export const POSTS: BlogPost[] = [
  {
    id: "p1", slug: "jee-advanced-2026-complete-strategy",
    category: "jee", tag: "JEE Advanced",
    title: "JEE Advanced 2026: The complete 90-day strategy that actually works",
    excerpt: "Most students in the final stretch study more, not smarter. Here is the exact 90-day framework our AIR 42 student used — week-by-week, subject-by-subject.",
    author: "Dr. R. Mehta", authorRole: "Physics Faculty · IIT Delhi", img: "https://images.pexels.com/photos/6668929/pexels-photo-6668929.jpeg",
    date: "Mar 28, 2026", readTime: "9 min read", featured: true,
    gradient: "linear-gradient(135deg,#0B3C5D 0%,#1A5276 100%)",
    accentColor: "#0B3C5D",
  },
  {
    id: "p2", slug: "neet-biology-high-yield-topics-2026",
    category: "neet", tag: "NEET Biology",
    title: "NEET 2026 Biology: 18 high-yield topics that cover 68% of the paper",
    excerpt: "Not all chapters are equal. After analysing 8 years of NEET papers, these 18 topics consistently dominate. Focus here first.",
    author: "Ms. A. Kapoor", authorRole: "Biology Expert · AIIMS alumni", img: "https://images.pexels.com/photos/4031320/pexels-photo-4031320.jpeg",
    date: "Mar 22, 2026", readTime: "7 min read", featured: false,
    gradient: "linear-gradient(135deg,#27AE60 0%,#1E8449 100%)",
    accentColor: "#27AE60",
  },
  {
    id: "p3", slug: "jee-main-april-2026-preparation",
    category: "jee", tag: "JEE Main",
    title: "JEE Main April 2026: Last 30 days — what to revise and what to skip",
    excerpt: "With 30 days left, the biggest mistake is adding new topics. Here is what our faculty team recommends based on score patterns from 1,200+ students.",
    author: "Prof. S. Sharma", authorRole: "Chemistry Faculty · IIT Bombay", img: "https://images.pexels.com/photos/1019470/abacus-mathematics-addition-subtraction-1019470.jpeg",
    date: "Mar 18, 2026", readTime: "6 min read", featured: false,
    gradient: "linear-gradient(135deg,#1A6E9F 0%,#0B3C5D 100%)",
    accentColor: "#0B3C5D",
  },
  {
    id: "p4", slug: "how-to-build-study-timetable-jee",
    category: "strategy", tag: "Study Strategy",
    title: "How to build a JEE study timetable that you will actually follow",
    excerpt: "The problem with most timetables is they are built around an ideal version of yourself. This guide teaches you to build one around your real schedule and energy levels.",
    author: "Dr. R. Mehta", authorRole: "Physics Faculty · IIT Delhi", img: "https://images.pexels.com/photos/33935830/pexels-photo-33935830.jpeg",
    date: "Mar 12, 2026", readTime: "8 min read", featured: false,
    gradient: "linear-gradient(135deg,#F39C12 0%,#D68910 100%)",
    accentColor: "#F39C12",
  },
  {
    id: "p5", slug: "cuet-2026-domain-selection-guide",
    category: "cuet", tag: "CUET 2026",
    title: "CUET 2026 domain subject selection: The definitive guide for DU aspirants",
    excerpt: "Which domain subjects to pick for Delhi University's most competitive programmes — and how to prepare each one in under 60 days.",
    author: "Ms. P. Verma", authorRole: "CUET Mentor · Delhi University gold medalist", img: "https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg",
    date: "Mar 8, 2026", readTime: "10 min read", featured: false,
    gradient: "linear-gradient(135deg,#7C3AED 0%,#5B21B6 100%)",
    accentColor: "#7C3AED",
  },
  {
    id: "p6", slug: "bright-minds-jee-results-2026",
    category: "results", tag: "Results 2026",
    title: "Bright Minds JEE 2026 results: 250+ IIT selections — a full breakdown",
    excerpt: "AIR 42 to 521 — where our students landed, which subjects they scored highest in, and what the data says about our teaching approach.",
    author: "Bright Minds Team", authorRole: "Academic Team", img: "https://images.pexels.com/photos/25489520/pexels-photo-25489520.jpeg",
    date: "Mar 3, 2026", readTime: "5 min read", featured: false,
    gradient: "linear-gradient(135deg,#DB2777 0%,#9D174D 100%)",
    accentColor: "#DB2777",
  },
  {
    id: "p7", slug: "neet-chemistry-physical-organic",
    category: "neet", tag: "NEET Chemistry",
    title: "Physical vs Organic: Which NEET Chemistry section to prioritise first",
    excerpt: "Physical Chemistry is more predictable. Organic Chemistry offers higher upside. Here is how to sequence both for maximum marks in the time you have.",
    author: "Prof. S. Sharma", authorRole: "Chemistry Faculty · IIT Bombay", img: "https://images.pexels.com/photos/35157344/pexels-photo-35157344.jpeg",
    date: "Feb 27, 2026", readTime: "7 min read", featured: false,
    gradient: "linear-gradient(135deg,#059669 0%,#27AE60 100%)",
    accentColor: "#27AE60",
  },
  {
    id: "p8", slug: "jee-maths-calculus-complete-guide",
    category: "jee", tag: "JEE Maths",
    title: "Calculus for JEE: The one chapter that changes your Maths score permanently",
    excerpt: "Calculus appears in 35–40% of JEE Maths questions. This is the structured approach our faculty uses to get students from basics to JEE Advanced level in 6 weeks.",
    author: "Dr. R. Mehta", authorRole: "Physics Faculty · IIT Delhi", img: "https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg",
    date: "Feb 20, 2026", readTime: "11 min read", featured: false,
    gradient: "linear-gradient(135deg,#0891B2 0%,#0E7490 100%)",
    accentColor: "#0891B2",
  },
  {
    id: "p9", slug: "how-bright-minds-faculty-teach",
    category: "faculty", tag: "Faculty Insight",
    title: "Why we teach Physics with derivations first — and why it improves JEE rank",
    excerpt: "Most coaching skips derivations to save time. Our faculty do the opposite — and the test data proves why concept-first teaching produces higher ranks.",
    author: "Dr. R. Mehta", authorRole: "Physics Faculty · IIT Delhi", img: "https://images.pexels.com/photos/6256110/pexels-photo-6256110.jpeg",
    date: "Feb 14, 2026", readTime: "6 min read", featured: false,
    gradient: "linear-gradient(135deg,#3B82F6 0%,#1D4ED8 100%)",
    accentColor: "#3B82F6",
  },
];

export const NEWSLETTER = {
  heading: "Get JEE & NEET prep insights every week.",
  subheading: "Written by IIT-educated faculty. No fluff. Direct to your inbox every Tuesday.",
  placeholder: "Enter your email address",
  cta: "Subscribe free",
};
