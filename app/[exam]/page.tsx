/**
 * app/(landing)/[exam]/page.tsx
 *
 * One route file. Every exam page.
 * The page itself is a pure data router — it fetches config and passes to components.
 * Components know nothing about which exam they're rendering.
 */
import type { Metadata }    from 'next';
import { notFound }         from 'next/navigation';
import { getExamData, examSlugs } from '@/lib/examData';

// Section components — each is fully data-driven
import HeroSection          from '@/components/sections/landing/HeroSection';
import BenefitsSection      from '@/components/sections/landing/BenefitsSection';
import CourseTimeline       from '@/components/sections/landing/CourseTimeline';
import ResultsCarousel      from '@/components/sections/landing/ResultsCarousel';
import TestimonialsCarousel from '@/components/sections/landing/TestimonialsCarousel';
import FAQSection           from '@/components/sections/landing/FAQSection';
import CTASection           from '@/components/sections/landing/CTASection';
import StickyContactCTA     from '@/components/sections/contact/StickyContactCTA';

type Props = { params: { exam: string } };

// ── Static params — pre-renders all exam pages at build time ──────────────────
export async function generateStaticParams() {
  return examSlugs.map(exam => ({ exam }));
}

// ── Dynamic SEO metadata — title/description change per exam ─────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { seo } = getExamData(params.exam);
    return {
      title:       seo.title,
      description: seo.description,
      keywords:    seo.keywords,
      alternates:  { canonical: `https://brightminds.edu/${params.exam}` },
      openGraph: {
        title:       seo.title,
        description: seo.description,
        url:         `https://brightminds.edu/${params.exam}`,
        type:        'website',
      },
    };
  } catch {
    return { title: 'Bright Minds Coaching Institute' };
  }
}

// ── Page component — data router, nothing more ────────────────────────────────
export default function ExamLandingPage({ params }: Props) {
  // Throws 404 for unknown slugs — no catch needed, Next.js handles it
  let config;
  try {
    config = getExamData(params.exam);
  } catch {
    notFound();
  }

  return (
    <main>
      {/* Each component receives exactly the slice of data it needs */}
      <HeroSection          data={config.hero}         />
      <BenefitsSection      data={config.benefits}     />
      <CourseTimeline       data={config.timeline}     />
      <ResultsCarousel      data={config.results}      />
      <TestimonialsCarousel data={config.testimonials} />
      <FAQSection           data={config.faq}          />
      <CTASection           data={config.cta}          />
      <StickyContactCTA />
    </main>
  );
}
