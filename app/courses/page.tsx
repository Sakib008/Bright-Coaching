/**
 * app/courses/page.tsx
 *
 * /courses  — Courses listing page for Bright Minds Coaching Institute.
 *
 * SEO targets:
 *   - "Coaching for Class 9 10"
 *   - "JEE Coaching in Delhi"
 *   - "NEET Coaching in Delhi"
 *   - "CUET Coaching"
 *
 * Architecture:
 *   - Server component (no 'use client')
 *   - Each section is a Client Component only where needed
 *   - One <h1> in CoursesHeader; all other headings are h2/h3
 *   - JSON-LD schemas: BreadcrumbList (Header), FAQPage (FAQSection)
 */

import type { Metadata } from 'next';

import CoursesHeader   from '@/components/sections/courses/CoursesHeader';
import StreamTabs      from '@/components/sections/courses/StreamTabs';
import ExamsCarousel   from '@/components/sections/courses/ExamsCarousel';
import ComparisonTable from '@/components/sections/courses/ComparisonTable';
import CoursesCTA      from '@/components/sections/courses/CoursesCTA';
import FAQSection      from '@/components/sections/common/FAQSection';
import { COURSES_FAQS } from '@/lib/coursesData';
import { Footer, Header } from '@/components/sections';

// ── Static metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       'Courses | Bright Minds — JEE, NEET, CUET & Class 9–12 Coaching in Delhi',
  description:
    'Explore coaching courses for Class 9–12, JEE Main & Advanced, NEET UG, and CUET at Bright Minds. Structured batches, expert faculty, weekly tests, and 1-on-1 mentoring.',
  keywords: [
    'JEE coaching Delhi',
    'NEET coaching Delhi',
    'CUET coaching',
    'coaching for Class 10',
    'Class 9 10 coaching',
    'Class 11 12 science coaching',
    'best coaching institute Delhi',
    'Bright Minds coaching',
  ],
  openGraph: {
    title:       'Courses — Bright Minds Coaching',
    description: 'JEE, NEET, CUET, and Class 9–12 coaching programs in Delhi.',
    url:         'https://brightminds.edu/courses',
    type:        'website',
  },
  alternates: {
    canonical: 'https://brightminds.edu/courses',
  },
};

// ── Page component ──────────────────────────────────────────────────────────────
export default function CoursesPage() {
  return (
    <>
    <Header/>
    <main id="main-content" tabIndex={-1}>
      {/* ── 1. Header + breadcrumb + h1 ── */}
      <CoursesHeader />

      {/* ── 2. Stream tabs + Course grid ─ */}
      <StreamTabs />

      {/* ── 3. Exams horizontal carousel ─ */}
      <ExamsCarousel />

      {/* ── 4. Program comparison table ── */}
      <ComparisonTable />

      {/* ── 5. FAQ accordion ─────────────── */}
      <FAQSection
        faqs={COURSES_FAQS}
        heading="Questions about our coaching courses"
        eyebrow="FAQ"
        bgColor="bg-[#F8FAFC]"
      />

      {/* ── 6. Conversion CTA ─────────────── */}
      <CoursesCTA />
    </main>
    <Footer/>
    </>
  );
}
