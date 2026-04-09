import Header               from '@/components/sections/Header';
import HeroSection          from '@/components/sections/HeroSection';
import CoursesSection       from '@/components/sections/CoursesSection';
import WhyChooseUsSection   from '@/components/sections/WhyChooseUsSection';
import ResultsSection       from '@/components/sections/ResultsSection';
import TestimonialsSection  from '@/components/sections/TestimonialsSection';
import FacultySection       from '@/components/sections/FacultySection';
import CTASection           from '@/components/sections/CTASection';
import FAQSection           from '@/components/sections/FAQSection';
import Footer               from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <ResultsSection />
        <TestimonialsSection />
        <FacultySection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
