/**
 * lib/examData.ts
 *
 * ARCHITECT'S RULE:
 * This is the ONLY file you touch to add a new exam/page.
 * Zero component changes. Zero route changes.
 *
 * To add "foundation-class8": add one object here. Done.
 */

import type { ExamConfig, ExamKey } from '@/types/exam';

// ─────────────────────────────────────────────────────────────────────────────
// JEE
// ─────────────────────────────────────────────────────────────────────────────
const JEE: ExamConfig = {
  key:   'jee',
  label: 'JEE Main + Advanced',
  seo: {
    title:       'JEE Coaching in Delhi | Bright Minds — IIT-Educated Faculty',
    description: 'Crack JEE Main and Advanced with Bright Minds. IIT-educated faculty, small batches, 250+ IIT selections in 2026.',
    keywords:    ['JEE coaching Delhi','JEE Main preparation','JEE Advanced coaching','IIT coaching near me'],
  },
  hero: {
    eyebrow:      'IIT JEE 2026–27 Batches',
    heading:      'Crack JEE with a system built by IIT graduates.',
    subheading:   'Small batches. IIT-educated faculty. Weekly tests with data-backed review. Not generic coaching — a structured path to IIT.',
    primaryCTA:   'Book Free Demo Class',
    secondaryCTA: 'View JEE Results',
    accentColor:  '#0B3C5D',
    badge:        '⚡ Only 12 seats left in April batch',
    stats: [
      { value: '250+', label: 'IIT selections in 2026' },
      { value: '1:12',  label: 'Mentor-to-student ratio' },
      { value: 'AIR 42',label: 'Top rank — JEE Advanced' },
    ],
  },
  benefits: {
    eyebrow: 'Why Bright Minds for JEE',
    heading: 'The difference between clearing JEE and missing it is a system.',
    items: [
      { icon: '🏛️', title: 'IIT-educated faculty',       description: 'Every faculty member cleared JEE themselves. They teach strategy, not just syllabus.' },
      { icon: '📊', title: 'Test analytics dashboard',    description: 'Weekly tests with chapter-wise error analysis — you know exactly where marks are lost.' },
      { icon: '🎯', title: 'Rank-improvement batches',    description: 'Separate dropper and rank-improvement tracks designed around real score data.' },
      { icon: '📖', title: 'Concept-first teaching',      description: 'Derivations before formulas. Understanding before memorisation. Better retention, higher ranks.' },
      { icon: '🤝', title: '1:1 mentorship',              description: 'Personal mentors track your progress, adjust your plan, and resolve doubts weekly.' },
      { icon: '📅', title: 'Structured revision calendar',description: 'No guesswork. A pre-built revision schedule aligned to JEE exam dates.' },
    ],
  },
  timeline: {
    eyebrow: 'JEE Preparation Roadmap',
    heading: 'A phase-by-phase plan from first principle to rank.',
    phases: [
      { phase:'Phase 1', duration:'4 months', title:'Foundation & Concept Building', topics:['Newton\'s Laws','Organic Chemistry basics','Algebra & Coordinate Geometry'], milestone:'First full-syllabus mock — baseline set' },
      { phase:'Phase 2', duration:'4 months', title:'Advanced Problem Solving',       topics:['Electrodynamics','Physical Chemistry numericals','Calculus & Differential Equations'], milestone:'JEE Main mock score crosses 200+ target' },
      { phase:'Phase 3', duration:'2 months', title:'Intensive Revision & Mock Drills',topics:['JEE Advanced pattern mocks','Error log correction','Time management under exam conditions'], milestone:'AIR projected by faculty. Rank strategy locked.' },
    ],
  },
  results: {
    eyebrow: 'JEE Results 2026',
    heading: 'Real outcomes from real students.',
    cards: [
      { name:'Arjun Mehta',   rank:'AIR 42',   rankLabel:'AIR', year:2026, subject:'JEE Advanced', avatar:'AM' },
      { name:'Priya Sharma',  rank:'AIR 178',  rankLabel:'AIR', year:2026, subject:'JEE Advanced', avatar:'PS' },
      { name:'Rohan Verma',   rank:'99.4%ile', rankLabel:'Percentile', year:2026, subject:'JEE Main', avatar:'RV' },
      { name:'Anika Singh',   rank:'AIR 521',  rankLabel:'AIR', year:2026, subject:'JEE Advanced', avatar:'AS' },
    ],
  },
  testimonials: {
    eyebrow: 'What our students say',
    heading: 'Outcomes, in their own words.',
    items: [
      { name:'Arjun Mehta',  role:'IIT Bombay — CSE, 2026',        score:'AIR 42',  quote:'The test analytics showed me exactly which chapter was bleeding marks. Fixed that in 2 weeks. My score jumped 40 points.' },
      { name:'Priya Sharma', role:'IIT Delhi — Electrical, 2026',   score:'AIR 178', quote:'I had tried two other coaching institutes. Bright Minds was the first place where faculty actually knew my name and my weak areas.' },
      { name:'Rohan\'s Dad', role:'Parent, Noida',                  score:'',        quote:'The weekly progress reports are genuinely useful. I could see which subjects needed attention before the exams.' },
    ],
  },
  faq: {
    eyebrow: 'Common questions',
    heading: 'Answered before you need to ask.',
    items: [
      { question:'What is the batch size?',              answer:'Maximum 12 students per batch. This is a hard limit — we don\'t increase it to accommodate demand.' },
      { question:'Do you offer dropper batches?',        answer:'Yes. Our JEE Dropper Batch is a separate track with a tighter schedule, more test frequency, and rank-improvement focus.' },
      { question:'How are doubts resolved?',             answer:'Through dedicated doubt sessions, 1:1 mentor check-ins, and a student WhatsApp group monitored by faculty daily.' },
      { question:'Is there an online mode available?',   answer:'All live classes are recorded. Online-only seats are available in limited numbers for outstation students.' },
    ],
  },
  cta: {
    heading:  'One free demo class. No commitment. Full clarity.',
    sub:      'Attend a live class, meet your faculty, and see the system in action before you decide.',
    primary:  'Book Free Demo Class',
    secondary:'Call for Counselling',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// NEET
// ─────────────────────────────────────────────────────────────────────────────
const NEET: ExamConfig = {
  key:   'neet',
  label: 'NEET UG',
  seo: {
    title:       'NEET Coaching in Delhi | Bright Minds — AIIMS-Alumni Faculty',
    description: 'Prepare for NEET UG with Bright Minds. AIIMS-alumni faculty, Biology-first strategy, 180+ MBBS selections in 2026.',
    keywords:    ['NEET coaching Delhi','NEET UG preparation','MBBS coaching','NEET Biology strategy'],
  },
  hero: {
    eyebrow:      'NEET 2026–27 Batches',
    heading:      'Score 680+ in NEET with a Biology-first strategy.',
    subheading:   'AIIMS-alumni faculty. High-yield chapter selection. Weekly mock tests with NCert-mapped revision. Built for serious NEET aspirants.',
    primaryCTA:   'Book Free Demo Class',
    secondaryCTA: 'View NEET Results',
    accentColor:  '#27AE60',
    badge:        '⚡ April batch filling fast — 5 seats left',
    stats: [
      { value: '180+', label: 'MBBS selections in 2026' },
      { value: '680+', label: 'Average top-batch score'  },
      { value: '96%',  label: 'Syllabus completion rate' },
    ],
  },
  benefits: {
    eyebrow: 'Why Bright Minds for NEET',
    heading: 'NEET is an NCert exam. Our system treats it that way.',
    items: [
      { icon: '🔬', title: 'AIIMS-alumni Biology faculty',   description: 'Biology drives 360 of 720 marks. Our faculty built the chapter strategy around 8 years of NEET paper analysis.' },
      { icon: '📋', title: 'High-yield chapter matrix',      description: 'Not all chapters are equal. We identify the 18 chapters covering 68% of the paper and front-load them.' },
      { icon: '📝', title: 'NCERT line-by-line coverage',    description: 'Every NEET question traces back to NCERT. We teach the book, not summaries of it.' },
      { icon: '🧪', title: 'Chemistry shortcut systems',     description: 'Physical Chemistry numericals, Organic reaction maps — taught with retention systems, not raw memorisation.' },
      { icon: '📊', title: 'Subject-wise score tracking',    description: 'Know your Bio vs Chem vs Physics split after every mock. Fix the right subject first.' },
      { icon: '🗓️', title: 'Revision-first scheduling',      description: 'Our schedule has more revision hours than most institutes have teaching hours. That\'s why scores improve.' },
    ],
  },
  timeline: {
    eyebrow: 'NEET Preparation Roadmap',
    heading: 'Phase by phase — from NCERT to 680+.',
    phases: [
      { phase:'Phase 1', duration:'4 months', title:'NCERT Mastery & Concept Clarity',    topics:['Cell Biology & Genetics','Inorganic Chemistry',      'Laws of Motion & Thermodynamics'], milestone:'NCERT Biology 100% complete. First diagnostic mock taken.' },
      { phase:'Phase 2', duration:'4 months', title:'High-Yield Problem Solving',          topics:['Ecology & Human Physiology','Organic Chemistry maps', 'Modern Physics & Current Electricity'], milestone:'Mock score crosses 560+ target.' },
      { phase:'Phase 3', duration:'2 months', title:'Full Revision & Mock Exam Sprint',    topics:['Previous 10-year papers','Error log revision','Speed and accuracy under timed conditions'], milestone:'Score projection above 640. Weak areas eliminated.' },
    ],
  },
  results: {
    eyebrow: 'NEET Results 2026',
    heading: 'Students who trusted the system.',
    cards: [
      { name:'Sneha Kapoor',  rank:'720/720',  rankLabel:'Score', year:2026, subject:'NEET UG', avatar:'SK' },
      { name:'Rahul Gupta',   rank:'695/720',  rankLabel:'Score', year:2026, subject:'NEET UG', avatar:'RG' },
      { name:'Divya Patel',   rank:'671/720',  rankLabel:'Score', year:2026, subject:'NEET UG', avatar:'DP' },
      { name:'Amit Tiwari',   rank:'658/720',  rankLabel:'Score', year:2026, subject:'NEET UG', avatar:'AT' },
    ],
  },
  testimonials: {
    eyebrow: 'What our students say',
    heading: 'Real voices, real results.',
    items: [
      { name:'Sneha Kapoor',  role:'AIIMS Delhi — MBBS, 2026',     score:'720/720', quote:'The high-yield chapter system saved me from revising everything with equal effort. That single insight changed my preparation completely.' },
      { name:'Rahul Gupta',   role:'Maulana Azad Medical College', score:'695',     quote:'Physics always pulled my score down. The subject-wise tracking showed me exactly which chapters — I fixed three chapters in 10 days.' },
      { name:'Sneha\'s Mom',  role:'Parent, Delhi',                score:'',        quote:'The weekly reports were very clear. I could see progress happening in real numbers, not just reassurances.' },
    ],
  },
  faq: {
    eyebrow: 'Common questions',
    heading: 'Answered honestly.',
    items: [
      { question:'How is your NEET batch structured?',           answer:'Biology-first teaching order, 3 classes per week per subject, weekly full-length mocks, and monthly parent-faculty meetings.' },
      { question:'Do you cover NCERT thoroughly?',               answer:'Yes. Every line. We also use NCERT Exemplar and previous year papers alongside the standard text.' },
      { question:'What is the batch size for NEET?',             answer:'Maximum 12 students. Same as JEE — small batches are a non-negotiable part of our model.' },
      { question:'Is there a dropper batch for NEET?',           answer:'Yes. Our NEET Dropper Batch runs April to April with a tighter test schedule and score-improvement focus.' },
    ],
  },
  cta: {
    heading:  'Attend one class. Understand the difference.',
    sub:      'One free demo with our Biology faculty — no registration fee, no obligation.',
    primary:  'Book Free Demo Class',
    secondary:'Call for Counselling',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CUET
// ─────────────────────────────────────────────────────────────────────────────
const CUET: ExamConfig = {
  key:   'cuet',
  label: 'CUET UG',
  seo: {
    title:       'CUET Coaching in Delhi | Bright Minds — DU Top College Strategy',
    description: 'Crack CUET UG for Delhi University and top central universities. Domain subject strategy, General Test prep, and speed-accuracy drills.',
    keywords:    ['CUET coaching Delhi','CUET UG preparation','DU admission coaching','CUET domain subjects'],
  },
  hero: {
    eyebrow:      'CUET 2026 Batches',
    heading:      'Get into DU\'s best colleges with a CUET-specific strategy.',
    subheading:   'Domain subject mastery + General Test speed drills. Taught by DU gold medalists who know exactly what CUET rewards.',
    primaryCTA:   'Book Free Demo Class',
    secondaryCTA: 'View CUET Results',
    accentColor:  '#7C3AED',
    badge:        '⚡ 60-day intensive batch starts May 1',
    stats: [
      { value: '140+', label: 'DU selections in 2026'  },
      { value: '96%',  label: 'Section A accuracy rate' },
      { value: '60',   label: 'Days to full preparation' },
    ],
  },
  benefits: {
    eyebrow: 'Why Bright Minds for CUET',
    heading: 'CUET rewards accuracy and domain depth — not board exam breadth.',
    items: [
      { icon: '🎓', title: 'DU gold medalist faculty',       description: 'Faculty who topped DU courses teach domain subjects — not generic teachers reusing board material.' },
      { icon: '⚡', title: '60-day intensive structure',     description: 'CUET has a short preparation window. Our batch is purpose-built for intensity, not long-form coaching.' },
      { icon: '🎯', title: 'Domain subject selection guide', description: 'Which subjects to pick for SRCC, LSR, or Hansraj — we help you choose based on your target college cutoffs.' },
      { icon: '📊', title: 'Section A & B mock analysis',    description: 'Separate accuracy tracking for Language, Domain, and General Test sections — each needs a different strategy.' },
      { icon: '🗺️', title: 'College-wise cutoff mapping',   description: 'We map your projected score to real DU college cutoffs so you know which programmes are realistically achievable.' },
      { icon: '🧩', title: 'General Test reasoning drills',  description: 'GT questions are pattern-based. We teach the 12 question types and drill speed and accuracy separately.' },
    ],
  },
  timeline: {
    eyebrow: 'CUET Preparation Roadmap',
    heading: 'Sixty days. Three phases. DU secured.',
    phases: [
      { phase:'Phase 1', duration:'20 days', title:'Domain Subject Deep Dive',    topics:['NCERT-mapped chapter selection','High-frequency MCQ formats','Subject-specific vocabulary'], milestone:'Domain subject mock score above 85%.' },
      { phase:'Phase 2', duration:'20 days', title:'General Test & Language Prep',topics:['Quantitative reasoning shortcuts','Reading comprehension speed','Current affairs high-yield sets'], milestone:'GT section mock accuracy above 80%.' },
      { phase:'Phase 3', duration:'20 days', title:'Full Mock Sprint & Refinement',topics:['3 full-length CUET mocks per week','Error frequency analysis','College shortlisting with score projections'], milestone:'Final mock score aligned with target college cutoff.' },
    ],
  },
  results: {
    eyebrow: 'CUET Results 2026',
    heading: 'Students who made it to their target colleges.',
    cards: [
      { name:'Kavya Nair',    rank:'99.2%ile', rankLabel:'Percentile', year:2026, subject:'CUET — Economics', avatar:'KN' },
      { name:'Ishaan Roy',    rank:'98.7%ile', rankLabel:'Percentile', year:2026, subject:'CUET — Commerce',  avatar:'IR' },
      { name:'Tanya Bose',    rank:'98.1%ile', rankLabel:'Percentile', year:2026, subject:'CUET — Humanities',avatar:'TB' },
      { name:'Nikhil Das',    rank:'97.5%ile', rankLabel:'Percentile', year:2026, subject:'CUET — Science',   avatar:'ND' },
    ],
  },
  testimonials: {
    eyebrow: 'From students who made it',
    heading: 'The system worked. Here\'s what they say.',
    items: [
      { name:'Kavya Nair',   role:'SRCC Delhi — B.Com (H), 2026', score:'99.2%ile', quote:'The domain subject selection session alone was worth it. I was going to pick the wrong subjects for my SRCC target.' },
      { name:'Ishaan Roy',   role:'LSR Delhi — Economics (H)',     score:'98.7%ile', quote:'The GT drills were unlike anything I had done. 12 pattern types, drilled until they were automatic.' },
      { name:'Parent, Rohini',role:'Parent',                       score:'',         quote:'A focused 60-day programme was exactly what my daughter needed after boards. No unnecessary content.' },
    ],
  },
  faq: {
    eyebrow: 'Common questions',
    heading: 'Honest answers about CUET preparation.',
    items: [
      { question:'How long does CUET preparation take?',            answer:'Our intensive batch is 60 days — the right amount for a student who has completed Class 12. We don\'t stretch it unnecessarily.' },
      { question:'Which domain subjects should I choose?',          answer:'It depends entirely on your target college and programme. We run a free counselling session to map this before you enrol.' },
      { question:'Does CUET coaching include all sections?',        answer:'Yes — Domain Subjects, Language Section, and General Test are all covered with separate strategies and mock drills.' },
      { question:'Can I prepare for CUET alongside board exams?',   answer:'We advise against heavy CUET preparation during boards. Our April–May batch is designed for post-board intensive prep.' },
    ],
  },
  cta: {
    heading:  'Your target college has a CUET cutoff. Let\'s clear it.',
    sub:      'One free counselling session to map your domain subjects, target score, and college shortlist.',
    primary:  'Book Free Counselling',
    secondary:'Call for More Details',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FOUNDATION (Class 9–10)
// ─────────────────────────────────────────────────────────────────────────────
const FOUNDATION: ExamConfig = {
  key:   'foundation',
  label: 'Foundation (Class 9–10)',
  seo: {
    title:       'Foundation Coaching Class 9–10 | Bright Minds Delhi',
    description: 'Build strong Maths and Science foundations in Class 9–10 for JEE, NEET, and board exam success. Early preparation, lasting results.',
    keywords:    ['foundation coaching class 9 10','Class 9 maths science coaching Delhi','JEE foundation programme','NTSE coaching'],
  },
  hero: {
    eyebrow:      'Foundation Programme — Class 9 & 10',
    heading:      'Build the base in Class 9–10. Win in Class 12.',
    subheading:   'Students who start early score higher. Our Foundation Programme builds the Maths and Science concepts that JEE, NEET, and boards all test — before the pressure of Class 11 arrives.',
    primaryCTA:   'Book Free Demo Class',
    secondaryCTA: 'View Foundation Details',
    accentColor:  '#F39C12',
    badge:        '⚡ New academic year batch starts June',
    stats: [
      { value: '94%',  label: 'Students score 90%+ in boards'  },
      { value: '3×',   label: 'Better JEE readiness vs peers'  },
      { value: 'NTSE', label: 'Selection support included'     },
    ],
  },
  benefits: {
    eyebrow: 'Why Foundation at Bright Minds',
    heading: 'Class 9 concepts are Class 11 concepts — taught wrong, they become permanent weaknesses.',
    items: [
      { icon: '🧱', title: 'Concept-first learning',       description: 'No shortcuts, no rote learning. Every topic is built from fundamentals so it never needs relearning later.' },
      { icon: '🏆', title: 'Olympiad & NTSE preparation',  description: 'Foundation students participate in Math Olympiad, NSO, and NTSE — building exam temperament early.' },
      { icon: '📚', title: 'Board + competitive aligned',  description: 'Single curriculum covers both board exam requirements and JEE/NEET foundation topics — no doubling of effort.' },
      { icon: '🎯', title: 'Exam temperament building',    description: 'Regular tests in exam-hall conditions from Class 9 — by Class 12, exams feel routine, not stressful.' },
      { icon: '📊', title: 'Progress reports for parents', description: 'Detailed monthly reports track concept mastery, not just test scores. Parents see where the child actually stands.' },
      { icon: '🤝', title: 'Counselling for stream selection',description: 'End-of-Class-10 counselling helps families choose Science/Commerce/Arts based on aptitude data, not pressure.' },
    ],
  },
  timeline: {
    eyebrow: 'Foundation Roadmap',
    heading: 'Two years of the right preparation.',
    phases: [
      { phase:'Class 9', duration:'1 year', title:'Conceptual Foundation', topics:['Algebra, Geometry & Mensuration','Physics: Motion, Force, Energy','Chemistry: Atoms, Molecules, Carbon compounds','Biology: Cell, Tissues, Life processes'], milestone:'NTSE Stage 1 attempt. Olympiad participation.' },
      { phase:'Class 10', duration:'1 year', title:'Depth + Board Preparation', topics:['Trigonometry & Coordinate Geometry','Electricity & Magnetic Effects','Acids, Bases, Metals & Non-metals','Heredity & Ecology'], milestone:'90%+ in board exams. Stream selection counselling complete.' },
    ],
  },
  results: {
    eyebrow: 'Foundation results',
    heading: 'Where our foundation students go.',
    cards: [
      { name:'Ananya Joshi',   rank:'97.8%', rankLabel:'Score', year:2026, subject:'Class 10 Boards', avatar:'AJ' },
      { name:'Dev Sharma',     rank:'NTSE Scholar', rankLabel:'Award', year:2025, subject:'NTSE', avatar:'DS' },
      { name:'Pooja Yadav',    rank:'96.2%', rankLabel:'Score', year:2026, subject:'Class 10 Boards', avatar:'PY' },
      { name:'Karan Malhotra', rank:'Gold',  rankLabel:'Award',  year:2025, subject:'Math Olympiad', avatar:'KM' },
    ],
  },
  testimonials: {
    eyebrow: 'Parents and students speak',
    heading: 'Early investment, long returns.',
    items: [
      { name:'Ananya Joshi',     role:'Now in Bright Minds JEE Batch, 2026',  score:'97.8%', quote:'The foundation years made Class 11 feel manageable. My classmates were struggling with concepts I had done properly in Class 9.' },
      { name:'Ananya\'s Father', role:'Parent, Gurgaon',                       score:'',      quote:'The stream selection counselling was unbiased and data-backed. No pressure to choose Science just for status.' },
      { name:'Dev Sharma',       role:'NTSE Scholar, now NEET aspirant',       score:'',      quote:'Qualifying NTSE in Class 10 was something I didn\'t think was possible. The coaching team made it systematic.' },
    ],
  },
  faq: {
    eyebrow: 'Common questions',
    heading: 'What parents ask most.',
    items: [
      { question:'Is Class 9 too early to start coaching?',   answer:'Not for Foundation. The concepts in Class 9 are the same concepts tested in JEE and NEET. Learning them right early is a permanent advantage.' },
      { question:'Does Foundation coaching pressure children?', answer:'Our programme is paced for the school year — it complements school, not competes with it. Test frequency is lower than our JEE/NEET tracks.' },
      { question:'Is NTSE preparation included?',              answer:'Yes. NTSE preparation is built into the Class 9 programme at no extra cost.' },
      { question:'What happens after Class 10?',               answer:'Students move into our JEE, NEET, or CUET tracks. They get a priority placement and a discounted fee as continuing students.' },
    ],
  },
  cta: {
    heading:  'The best time to build a strong foundation is now.',
    sub:      'Attend one free class and see how early preparation creates permanent advantages.',
    primary:  'Book Free Demo Class',
    secondary:'Download Foundation Brochure',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRY — the single lookup map
// ─────────────────────────────────────────────────────────────────────────────
export const examData: Record<string, ExamConfig> = {
  jee:        JEE,
  neet:       NEET,
  cuet:       CUET,
  foundation: FOUNDATION,
  // ↓ Add new exams here. Zero other files change.
  // 'class11-science': CLASS11_SCIENCE,
  // 'class12-commerce': CLASS12_COMMERCE,
};

/**
 * Returns the exam config or throws clearly.
 * Use this in page.tsx instead of direct map access.
 */
export function getExamData(slug: string): ExamConfig {
  const config = examData[slug];
  if (!config) throw new Error(`No exam config found for slug: "${slug}". Add it to lib/examData.ts.`);
  return config;
}

/** All valid URL slugs — used by generateStaticParams */
export const examSlugs = Object.keys(examData);
