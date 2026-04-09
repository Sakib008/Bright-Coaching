/**
 * app/jee/page.tsx
 * JEE landing page — orchestrates all sections.
 * Single H1 in HeroSection. Full SEO metadata including structured data.
 */
import type { Metadata } from 'next';
import { JEE_META } from '@/lib/jeeData';
import HeroSection         from '@/components/sections/jee/HeroSection';
import BenefitsSection     from '@/components/sections/jee/BenefitsSection';
import CourseTimeline      from '@/components/sections/jee/CourseTimeline';
import ResultsCarousel     from '@/components/sections/jee/ResultsCarousel';
import TestimonialsCarousel from '@/components/sections/jee/TestimonialsCarousel';
import FAQSection          from '@/components/sections/jee/FAQSection';
import StickyCTA           from '@/components/sections/jee/StickyCTA';
import FinalCTA            from '@/components/sections/jee/FinalCTA';

export const metadata: Metadata = {
  title:       JEE_META.title,
  description: JEE_META.description,
  keywords:    JEE_META.keywords,
  alternates:  { canonical: JEE_META.canonical },
  openGraph: {
    title:       JEE_META.title,
    description: JEE_META.description,
    url:         JEE_META.canonical,
    type:        'website',
    images: [{ url: 'https://brightminds.edu/og/jee.jpg', width: 1200, height: 630, alt: 'Best JEE Coaching Institute — Bright Minds Delhi' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       JEE_META.title,
    description: JEE_META.description,
  },
};

// Course + Institute structured data for Google rich results
const LD_JSON = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      name:    'Bright Minds Coaching Institute',
      url:     'https://brightminds.edu',
      logo:    'https://brightminds.edu/logo.png',
      address: { '@type': 'PostalAddress', streetAddress: '12-B, Connaught Place', addressLocality: 'New Delhi', postalCode: '110001', addressCountry: 'IN' },
      telephone: '+91-98765-43210',
      description: 'Best JEE coaching institute in Delhi with 250+ IIT selections, expert faculty, and a 1:12 mentor ratio.',
    },
    {
      '@type': 'Course',
      name:    'JEE Main + Advanced Coaching — Bright Minds',
      description: 'Structured 12-month JEE preparation programme with 4 phases: Foundation, Advanced, Test Series, and Rapid Revision.',
      provider: { '@type': 'EducationalOrganization', name: 'Bright Minds Coaching Institute', sameAs: 'https://brightminds.edu' },
      hasCourseInstance: [
        { '@type': 'CourseInstance', courseMode: 'ONSITE', location: 'Connaught Place, New Delhi', startDate: '2026-06-01' },
        { '@type': 'CourseInstance', courseMode: 'ONLINE', startDate: '2026-06-01' },
      ],
    },
  ],
};

export default function JEEPage() {
  return (
    <>
      <a href="#jee-h1" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#0B3C5D] focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        Skip to main content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_JSON) }} />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <BenefitsSection />
        <CourseTimeline />
        <ResultsCarousel />
        <TestimonialsCarousel />
        <FAQSection />
        <FinalCTA />
        <StickyCTA />
      </main>
    </>
  );
}
