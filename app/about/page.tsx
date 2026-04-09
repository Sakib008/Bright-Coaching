import type { Metadata } from 'next';
// import AboutHeader    from '@/components/sections/about/AboutHeader';
// import MissionSection from '@/components/sections/about/MissionSection';
// import TimelineSection from '@/components/sections/about/TimelineSection';
// import FacultySection  from '@/components/sections/about/FacultySection';
// import AboutCTA        from '@/components/sections/about/AboutCTA';
import AboutHero from '@/components/sections/about/AboutHero';
import InstituteStory from '@/components/sections/about/InstituteStory';
import StatsSection from '@/components/sections/about/StatsSection';
import FacultyCarousel from '@/components/sections/about/FacultyCarousel';
import VisionMission from '@/components/sections/about/VisionMission';
import WhyChooseUs from '@/components/sections/about/WhyChooseUs';
import TestimonialsCarousel from '@/components/sections/about/TestimonialsCarousel';
import CampusGallery from '@/components/sections/about/CampusGallery';
import CTASection from '@/components/sections/about/CTASection';
import { Footer, Header } from '@/components/sections';

export const metadata: Metadata = {
  title:       'About Bright Minds | Coaching Institute in Delhi since 2011',
  description: 'Learn about Bright Minds coaching institute — our story, mission, faculty, and 15-year track record of helping students clear JEE, NEET, CUET, and board exams.',
  openGraph: { title: 'About Bright Minds', description: 'Our story, mission, and the team behind 12,000+ students.', url: 'https://brightminds.edu/about' },
  alternates: { canonical: 'https://brightminds.edu/about' },
};

export default function AboutPage() {
  return (
    <>
      <Header/>
    <main id="main-content" tabIndex={-1}>
      <AboutHero/>
      <InstituteStory/>
      <StatsSection/>
      <FacultyCarousel/>
      <VisionMission/>
      <WhyChooseUs/>
      <TestimonialsCarousel/>
      <CampusGallery/>
      <CTASection/>
    </main>
      <Footer/>
    </>
  );
}
