// ─────────────────────────────────────────────────────────────
// lib/coursesData.ts
// Single source of truth for the Courses page.
// All JSX components pull from here via map() — zero hardcoding.
// ─────────────────────────────────────────────────────────────

// ── Types ────────────────────────────────────────────────────

export type Stream = 'science' | 'commerce' | 'arts';

export type Course = {
  id:          string;
  stream:      Stream;
  title:       string;
  subtitle:    string;
  subjects:    string[];
  duration:    string;
  sessions:    string;
  badge?:      string;
  badgeColor?: 'primary' | 'secondary' | 'accent';
  featured?:   boolean;
  href:        string;
};

export type ExamCard = {
  id:        string;
  exam:      string;
  tagline:   string;
  subjects:  string[];
  keyStats:  { label: string; value: string }[];
  color:     string;      // Tailwind bg class
  textColor: string;
  href:      string;
};

export type ComparisonRow = {
  feature:   string;
  class1012: string | boolean;
  jee:       string | boolean;
  neet:      string | boolean;
  cuet:      string | boolean;
};

export type FAQ = {
  q: string;
  a: string;
};

// ── Streams ──────────────────────────────────────────────────

export const STREAMS: { id: Stream; label: string }[] = [
  { id: 'science',  label: 'Science'  },
  { id: 'commerce', label: 'Commerce' },
  { id: 'arts',     label: 'Arts'     },
];

// ── Courses ──────────────────────────────────────────────────

export const COURSES: Course[] = [
  // SCIENCE
  {
    id:         'foundation-9-10',
    stream:     'science',
    title:      'Class 9 & 10 Foundation',
    subtitle:   'Build deep concepts before the board race begins.',
    subjects:   ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    duration:   '2 years',
    sessions:   '5 days/week · 2 hr/session',
    href:       '/courses/foundation',
  },
  {
    id:         'class-11-12-science',
    stream:     'science',
    title:      'Class 11 & 12 Science',
    subtitle:   'CBSE boards + competitive exam integration.',
    subjects:   ['Physics', 'Chemistry', 'Biology / Maths', 'English'],
    duration:   '2 years',
    sessions:   '6 days/week · 2.5 hr/session',
    badge:      'Most Popular',
    badgeColor: 'accent',
    featured:   true,
    href:       '/courses/class-11-12-science',
  },
  {
    id:         'jee-main-advanced',
    stream:     'science',
    title:      'JEE Main + Advanced',
    subtitle:   'Full syllabus with weekly mock tests and rank tracking.',
    subjects:   ['Physics', 'Chemistry', 'Mathematics'],
    duration:   '1–2 years',
    sessions:   '6 days/week · 3 hr/session',
    badge:      'High Demand',
    badgeColor: 'secondary',
    href:       '/courses/jee',
  },
  {
    id:         'neet-ug',
    stream:     'science',
    title:      'NEET UG',
    subtitle:   'NCERT-first strategy for 720-score aspirants.',
    subjects:   ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    duration:   '1–2 years',
    sessions:   '6 days/week · 3 hr/session',
    badge:      'High Demand',
    badgeColor: 'secondary',
    href:       '/courses/neet',
  },
  // COMMERCE
  {
    id:         'class-11-12-commerce',
    stream:     'commerce',
    title:      'Class 11 & 12 Commerce',
    subtitle:   'CBSE-aligned coaching with CA Foundation base.',
    subjects:   ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
    duration:   '2 years',
    sessions:   '5 days/week · 2 hr/session',
    badge:      'New Batch',
    badgeColor: 'primary',
    href:       '/courses/class-11-12-commerce',
  },
  {
    id:         'cuet-commerce',
    stream:     'commerce',
    title:      'CUET UG Commerce',
    subtitle:   'Score-maximisation strategy for top DU & BHU colleges.',
    subjects:   ['Accountancy', 'Business Studies', 'Economics', 'English'],
    duration:   '6–12 months',
    sessions:   '5 days/week · 2 hr/session',
    href:       '/courses/cuet-commerce',
  },
  // ARTS
  {
    id:         'class-11-12-arts',
    stream:     'arts',
    title:      'Class 11 & 12 Arts',
    subtitle:   'Humanities coaching with UPSC and university prep outlook.',
    subjects:   ['History', 'Political Science', 'Sociology', 'English'],
    duration:   '2 years',
    sessions:   '5 days/week · 2 hr/session',
    href:       '/courses/class-11-12-arts',
  },
  {
    id:         'cuet-arts',
    stream:     'arts',
    title:      'CUET UG Arts',
    subtitle:   'Section-wise strategy with language and domain paper mastery.',
    subjects:   ['History', 'Political Science', 'General Test', 'English'],
    duration:   '6–12 months',
    sessions:   '5 days/week · 2 hr/session',
    href:       '/courses/cuet-arts',
  },
];

// ── Exam Cards (Carousel) ─────────────────────────────────────

export const EXAM_CARDS: ExamCard[] = [
  {
    id:       'jee',
    exam:     'JEE',
    tagline:  'IIT & NIT Admissions',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    keyStats: [
      { label: 'Best AIR',       value: 'AIR 42'   },
      { label: 'Selections 2026',value: '80+'       },
      { label: 'Avg improvement',value: '+42 marks' },
    ],
    color:     'bg-[#0B3C5D]',
    textColor: 'text-white',
    href:      '/courses/jee',
  },
  {
    id:       'neet',
    exam:     'NEET',
    tagline:  'MBBS & BDS Admissions',
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    keyStats: [
      { label: 'Best Score',     value: '710/720' },
      { label: 'Selections 2026',value: '110+'    },
      { label: 'Avg improvement',value: '+65 marks'},
    ],
    color:     'bg-[#27AE60]',
    textColor: 'text-white',
    href:      '/courses/neet',
  },
  {
    id:       'cuet',
    exam:     'CUET',
    tagline:  'DU · BHU · JNU Admissions',
    subjects: ['Domain Subjects', 'English', 'General Test'],
    keyStats: [
      { label: 'Top 0.5% scorers', value: '35+'   },
      { label: 'Selections 2026',  value: '60+'   },
      { label: 'Avg %ile',         value: '98.2%' },
    ],
    color:     'bg-[#7C3AED]',
    textColor: 'text-white',
    href:      '/courses/cuet',
  },
  {
    id:       'olympiads',
    exam:     'Olympiads',
    tagline:  'NSO · IMO · NTSE · KVPY',
    subjects: ['Mathematics', 'Science', 'Mental Ability'],
    keyStats: [
      { label: 'Medals 2026',    value: '22+'    },
      { label: 'NTSE selections', value: '18+'   },
      { label: 'KVPY selections', value: '8+'    },
    ],
    color:     'bg-[#F39C12]',
    textColor: 'text-white',
    href:      '/courses/olympiads',
  },
  {
    id:       'boards',
    exam:     'Board Exams',
    tagline:  'CBSE Class 10 & 12',
    subjects: ['All Subjects', 'Practical Training', 'Internal Assessment'],
    keyStats: [
      { label: '95%+ scorers',  value: '180+' },
      { label: '100/100 in Math',value: '42+' },
      { label: 'Pass rate',      value: '100%'},
    ],
    color:     'bg-[#0891B2]',
    textColor: 'text-white',
    href:      '/courses/boards',
  },
];

// ── Comparison Table ──────────────────────────────────────────

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: 'Target Audience',  class1012: 'Class 9–12 students', jee: 'Class 11–12 + Droppers',   neet: 'Class 11–12 + Droppers',   cuet: 'Class 12 + Gap year'   },
  { feature: 'Duration',         class1012: '1–2 years',           jee: '1–2 years',                neet: '1–2 years',               cuet: '6–12 months'           },
  { feature: 'Weekly Sessions',  class1012: '5 days/week',         jee: '6 days/week',              neet: '6 days/week',             cuet: '5 days/week'           },
  { feature: 'Mock Tests',       class1012: true,                  jee: true,                       neet: true,                      cuet: true                    },
  { feature: '1-on-1 Mentoring', class1012: true,                  jee: true,                       neet: true,                      cuet: true                    },
  { feature: 'Parent Reports',   class1012: true,                  jee: true,                       neet: true,                      cuet: true                    },
  { feature: 'Doubt Sessions',   class1012: true,                  jee: true,                       neet: true,                      cuet: true                    },
  { feature: 'Board Integration',class1012: true,                  jee: true,                       neet: true,                      cuet: false                   },
  { feature: 'Demo Class',       class1012: true,                  jee: true,                       neet: true,                      cuet: true                    },
  { feature: 'Fee (per month)',  class1012: 'From ₹8,000',         jee: 'From ₹12,000',             neet: 'From ₹12,000',            cuet: 'From ₹10,000'          },
];

// ── FAQ ───────────────────────────────────────────────────────

export const COURSES_FAQS: FAQ[] = [
  {
    q: 'Which coaching courses does Bright Minds offer for Class 9 and 10?',
    a: 'We offer a dedicated Foundation Program for Class 9 & 10 covering Mathematics, Physics, Chemistry, and Biology — aligned with CBSE/ICSE curriculum and designed to build competitive exam readiness from the ground up.',
  },
  {
    q: 'Is JEE coaching available for Class 11 students?',
    a: 'Yes. Our JEE batch accepts Class 11 students into an integrated 2-year track that covers the full JEE Main and Advanced syllabus alongside board preparation. Early enrollment gives students more time for revision and rank improvement.',
  },
  {
    q: 'How is NEET coaching different from regular science coaching?',
    a: 'NEET coaching is NCERT-first with high-yield recall frameworks, daily biology sessions, full-length 720-score mocks, and chapter-wise error tracking — all optimised for the NEET UG exam specifically.',
  },
  {
    q: 'What subjects are covered in the CUET coaching program?',
    a: 'Our CUET program covers domain subjects (based on your stream), the English language paper, and the General Test. We also provide section-wise time management strategy and university-specific score-maximisation plans.',
  },
  {
    q: 'Are there separate batches for Commerce and Arts students?',
    a: 'Yes. We have dedicated Commerce batches (Accountancy, Business Studies, Economics, Maths) and Arts batches (History, Political Science, Sociology, English) for Class 11–12 and CUET preparation.',
  },
  {
    q: 'Can I attend a free demo class before enrolling?',
    a: 'Absolutely. After a free 30-minute counselling session with our academic team, students can attend one demo class in their target batch at no cost — no payment required.',
  },
  {
    q: 'Does Bright Minds offer online classes?',
    a: 'Currently all batches are offline at our Connaught Place centre. Enrolled students get hybrid access — class recordings and online doubt sessions — when they miss a class due to illness or travel.',
  },
];
