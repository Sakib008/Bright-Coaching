// lib/siteData.ts — Shared data for About, Results, and Contact pages

// ── ABOUT ──────────────────────────────────────────────────────────────────

export type Milestone = {
  year:  string;
  title: string;
  desc:  string;
};

export type Value = {
  title: string;
  desc:  string;
  icon:  string; // lucide icon name (string key — resolved in component)
};

export type TeamMember = {
  id:        string;
  name:      string;
  role:      string;
  subjects:  string[];
  exp:       string;
  quote:     string;
  image:  string;
  color:     string;
};

export const MILESTONES: Milestone[] = [
  { year: '2011', title: 'Founded in Connaught Place', desc: 'Started with 3 faculty and 40 students in a single-room classroom focused on Class 10 board coaching.' },
  { year: '2014', title: 'Launched JEE & NEET batches', desc: 'Expanded into competitive exam coaching as demand grew from existing board-prep families.' },
  { year: '2017', title: 'Crossed 2,000 students', desc: 'Extended to full building, hired 12 faculty. First batch of IIT selections from Bright Minds.' },
  { year: '2019', title: 'Integrated digital tools', desc: 'Introduced weekly online test series, performance dashboards, and parent WhatsApp reporting.' },
  { year: '2021', title: 'Launched CUET program', desc: 'Became one of Delhi\'s first institutes to offer dedicated CUET coaching when the exam was announced.' },
  { year: '2026', title: '12,000+ students taught', desc: 'Over 250 selections across JEE, NEET, and CUET in 2026 alone. 100% board pass rate since inception.' },
];

export const VALUES: Value[] = [
  { title: 'Concept-first teaching',   desc: 'Every topic is built from first principles. Memorisation without understanding is never acceptable.',               icon: 'BrainCircuit' },
  { title: 'Data-driven mentoring',    desc: 'Weekly tests feed into a student dashboard. Mentors review numbers, not feelings.',                                 icon: 'BarChart2'    },
  { title: 'Parent transparency',      desc: 'Parents receive weekly attendance, test scores, and monthly faculty notes — with no follow-up required.',            icon: 'ShieldCheck'  },
  { title: 'Small, focused batches',   desc: 'Maximum 25 students per batch so each student is known by name, not roll number.',                                   icon: 'Users'        },
  { title: 'Disciplined scheduling',   desc: 'Classes start on time. Syllabi are covered as planned. Every missed class is compensated, not skipped.',             icon: 'Clock'        },
  { title: 'Measurable outcomes',      desc: 'We set score targets at enrollment and track against them every fortnight. Vague progress is not progress.',         icon: 'Target'       },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 'mehta',   name: 'Dr. R. Mehta',    role: 'Physics', subjects: ['JEE Physics', 'Class 11–12'],   exp: '18 years', quote: 'Physics is not memorisation. It\'s the ability to see a system clearly.',           image: 'RM', color: 'bg-[#0B3C5D]'  },
  { id: 'sharma',  name: 'Prof. A. Sharma', role: 'Chemistry',subjects: ['JEE Chem', 'NEET Chem'],      exp: '14 years', quote: 'Reactions make sense only when a student stops fearing the formula sheet.',          image: 'AS', color: 'bg-[#27AE60]'  },
  { id: 'kapoor',  name: 'Ms. S. Kapoor',   role: 'Biology', subjects: ['NEET Biology', 'Class 11–12'], exp: '11 years', quote: 'NCERT is the scripture. Everything else is commentary.',                            image: 'SK', color: 'bg-[#7C3AED]'  },
  { id: 'verma',   name: 'Mr. P. Verma',    role: 'Mathematics',subjects: ['JEE Maths', 'Foundation'], exp: '16 years', quote: 'Maths anxiety disappears the moment a student solves something no one showed them.', image: 'PV', color: 'bg-[#F39C12]'  },
  { id: 'singh',   name: 'Ms. N. Singh',    role: 'Commerce', subjects: ['Accounts', 'Economics', 'CUET'], exp: '9 years', quote: 'A student who can read a balance sheet can navigate anything.',                  image: 'NS', color: 'bg-[#0891B2]'  },
  { id: 'mishra',  name: 'Dr. V. Mishra',   role: 'Humanities',subjects: ['History', 'Poly Sci', 'CUET'], exp: '12 years', quote: 'The best humanities students think in arguments, not answers.',                 image: 'VM', color: 'bg-[#DB2777]'  },
];

// ── RESULTS ────────────────────────────────────────────────────────────────────

export type TopperCard = {
  id:      string;
  name:    string;
  exam:    string;
  score:   string;
  college: string;
  year:    string;
  batch:   string;
  image:string;
  color:   string;
};

export type ResultStat = {
  value:    string;
  label:    string;
  sub?:     string;
};

export type YearResult = {
  year:     string;
  jee:      string;
  neet:     string;
  cuet:     string;
  boards:   string;
};

export const RESULT_STATS: ResultStat[] = [
  { value: '250+',  label: 'Total selections in 2026',          sub: 'JEE · NEET · CUET combined'       },
  { value: '710',   label: 'Highest NEET score in 2026',        sub: 'Out of 720'                       },
  { value: 'AIR 42',label: 'Best JEE Advanced rank in 2026',   sub: 'IIT Bombay — Computer Science'    },
  { value: '98.2%', label: 'Highest CUET percentile',           sub: 'DU BA (Hons) Economics'           },
  { value: '100%',  label: 'Board pass rate — every year',      sub: 'CBSE Class 10 & 12'               },
  { value: '180+',  label: 'Students scoring 95%+ in boards',   sub: 'Class 10 & 12 combined'           },
];

export const TOPPERS: TopperCard[] = [
  { id: 't1',  name: 'Arjun Mehta',    exam: 'JEE Advanced', score: 'AIR 42',         college: 'IIT Bombay — CS',            year: '2026', batch: 'JEE 2-Year',           image:'https://images.pexels.com/photos/3985198/pexels-photo-3985198.jpeg ', color: 'bg-[#0B3C5D]'  },
  { id: 't2',  name: 'Priya Sharma',   exam: 'NEET UG',      score: '710 / 720',      college: 'AIIMS New Delhi',            year: '2026', batch: 'NEET 2-Year',        image:'https://images.pexels.com/photos/5211457/pexels-photo-5211457.jpeg', color: 'bg-[#27AE60]'  },
  { id: 't3',  name: 'Riya Verma',     exam: 'CUET UG',      score: '98.2 %ile',      college: 'DU — BA Eco (Hons)',         year: '2026', batch: 'CUET Commerce',       image:'https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg', color: 'bg-[#7C3AED]'  },
  { id: 't4',  name: 'Karan Singh',    exam: 'JEE Main',     score: '99.4 %ile',      college: 'NIT Trichy — Mech',         year: '2026', batch: 'JEE 1-Year',          image:'https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg', color: 'bg-[#0891B2]'  },
  { id: 't5',  name: 'Ananya Gupta',   exam: 'NEET UG',      score: '695 / 720',      college: 'MAMC Delhi',                year: '2026', batch: 'NEET 1-Year Dropper',  image:'https://images.pexels.com/photos/5211457/pexels-photo-5211457.jpeg', color: 'bg-[#DB2777]'  },
  { id: 't6',  name: 'Rohan Kapoor',   exam: 'CBSE Class 12',score: '98.6%',          college: 'Sciences — PCM',            year: '2026', batch: 'Class 11–12 Science', image: 'https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg' , color: 'bg-[#F39C12]'  },
  { id: 't7',  name: 'Divya Nair',     exam: 'JEE Advanced', score: 'AIR 184',        college: 'IIT Delhi — Electrical',    year: '2026', batch: 'JEE 2-Year',         image:'https://images.pexels.com/photos/31367494/pexels-photo-31367494.jpeg' , color: 'bg-[#0B3C5D]'  },
  { id: 't8',  name: 'Sahil Malhotra', exam: 'CUET UG',      score: '97.8 %ile',      college: 'JNU — MA Economics',        year: '2026', batch: 'CUET Arts',          image:'https://images.pexels.com/photos/3985198/pexels-photo-3985198.jpeg ', color: 'bg-[#7C3AED]'  },
];

export const YEAR_RESULTS: YearResult[] = [
  { year: '2022', jee: '38',  neet: '52',  cuet: '28', boards: '140' },
  { year: '2023', jee: '55',  neet: '72',  cuet: '41', boards: '158' },
  { year: '2024', jee: '68',  neet: '88',  cuet: '52', boards: '165' },
  { year: '2025', jee: '74',  neet: '96',  cuet: '58', boards: '172' },
  { year: '2026', jee: '80+', neet: '110+',cuet: '60+',boards: '180+'},
];

// ── CONTACT ────────────────────────────────────────────────────────────────────

export type ContactMethod = {
  id:      string;
  icon:    string;
  title:   string;
  value:   string;
  sub:     string;
  href:    string;
  color:   string;
};

export const CONTACT_METHODS: ContactMethod[] = [
  { id: 'phone', icon: 'Phone',         title: 'Call us directly',  value: '+91 98765 43210',         sub: 'Available 9 AM – 7 PM, Mon–Sat',    href: 'tel:+919876543210',                  color: 'bg-[#EEF4F8] text-[#0B3C5D]'  },
  { id: 'wa',    icon: 'MessageSquare', title: 'WhatsApp',          value: '+91 98765 43210',         sub: 'Response within 30 minutes',         href: 'https://wa.me/919876543210',         color: 'bg-[#F0FAF5] text-[#27AE60]'  },
  { id: 'email', icon: 'Mail',          title: 'Email',             value: 'hello@brightminds.edu',   sub: 'Reply within 2 hours',               href: 'mailto:hello@brightminds.edu',       color: 'bg-[#F5F3FF] text-[#7C3AED]'  },
  { id: 'visit', icon: 'MapPin',        title: 'Visit our centre',  value: '12-B, Connaught Place',   sub: 'New Delhi – 110001',                 href: 'https://maps.google.com/?q=Connaught+Place+Delhi', color: 'bg-[#FEF9EE] text-[#F39C12]'  },
];

export const CONTACT_FAQ = [
  { q: 'How quickly will someone respond to my enquiry?',     a: 'Phone and WhatsApp enquiries are answered within 30 minutes during working hours (9 AM – 7 PM). Email enquiries within 2 hours.' },
  { q: 'Can I visit the centre without an appointment?',      a: 'Yes, walk-ins are welcome Monday to Saturday, 9 AM to 6 PM. However, booking a free counselling session ensures you get dedicated time with an academic advisor.' },
  { q: 'Is the free counselling session truly free?',         a: 'Completely free, with no obligation to enrol. The session is 30 minutes and focuses on recommending the right batch for your goal.' },
  { q: 'How do I know which batch is right for my child?',    a: 'During the counselling session, we assess current class, target exam, study hours available, and baseline level — then recommend the most suitable batch with a clear rationale.' },
];
