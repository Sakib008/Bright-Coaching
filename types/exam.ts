/**
 * types/exam.ts
 * Single source of type truth for the entire multi-exam system.
 * Every component prop interface derives from these types.
 */

export type ExamKey =
  | 'jee'
  | 'neet'
  | 'cuet'
  | 'foundation'
  | 'class11-science'
  | 'class11-commerce'
  | 'class11-arts'
  | 'class12-science'
  | 'class12-commerce'
  | 'class12-arts';

// ── Hero ────────────────────────────────────────────────────────────────────
export type HeroData = {
  eyebrow:   string;          // pill above heading
  heading:   string;          // H1
  subheading:string;          // paragraph under H1
  primaryCTA:string;          // primary button label
  secondaryCTA:string;        // secondary button label
  stats: Array<{
    value: string;
    label: string;
  }>;
  badge?: string;             // optional urgency badge
  accentColor: string;        // e.g. '#27AE60' — controls gradient blobs & accents
};

// ── Benefits ─────────────────────────────────────────────────────────────────
export type Benefit = {
  icon:        string;        // emoji or icon key
  title:       string;
  description: string;
};
export type BenefitsData = {
  eyebrow:     string;
  heading:     string;
  items:       Benefit[];
};

// ── Course Timeline ──────────────────────────────────────────────────────────
export type TimelinePhase = {
  phase:    string;           // e.g. 'Phase 1'
  duration: string;           // e.g. '3 months'
  title:    string;
  topics:   string[];
  milestone:string;
};
export type TimelineData = {
  eyebrow: string;
  heading: string;
  phases:  TimelinePhase[];
};

// ── Results ──────────────────────────────────────────────────────────────────
export type ResultCard = {
  name:    string;
  rank:    string;
  rankLabel:string;           // e.g. 'AIR' / 'Score' / 'Percentile'
  year:    number;
  subject: string;
  avatar?: string;            // initials fallback if no image
};
export type ResultsData = {
  eyebrow: string;
  heading: string;
  cards:   ResultCard[];
};

// ── Testimonials ─────────────────────────────────────────────────────────────
export type Testimonial = {
  name:   string;
  role:   string;             // e.g. 'NEET 2025 student'
  score?: string;             // optional exam outcome
  quote:  string;
};
export type TestimonialsData = {
  eyebrow: string;
  heading: string;
  items:   Testimonial[];
};

// ── FAQ ──────────────────────────────────────────────────────────────────────
export type FAQ = {
  question: string;
  answer:   string;
};
export type FAQData = {
  eyebrow: string;
  heading: string;
  items:   FAQ[];
};

// ── CTA ──────────────────────────────────────────────────────────────────────
export type CTAData = {
  heading:   string;
  sub:       string;
  primary:   string;
  secondary: string;
};

// ── SEO ──────────────────────────────────────────────────────────────────────
export type SEOMeta = {
  title:       string;
  description: string;
  keywords:    string[];
};

// ── Root exam config ─────────────────────────────────────────────────────────
export type ExamConfig = {
  key:          ExamKey;
  label:        string;       // display name
  seo:          SEOMeta;
  hero:         HeroData;
  benefits:     BenefitsData;
  timeline:     TimelineData;
  results:      ResultsData;
  testimonials: TestimonialsData;
  faq:          FAQData;
  cta:          CTAData;
};
