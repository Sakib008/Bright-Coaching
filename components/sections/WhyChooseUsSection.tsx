'use client';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import IconBox from '@/components/ui/IconBox';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';
import { BookOpenCheck, BarChart3, Users2, FlaskConical, Clock4, Trophy, MessageCircle, LineChart } from 'lucide-react';

const FEATURES = [
  { icon: BookOpenCheck, title: 'Concept-first teaching',   text: 'Deep understanding before speed — students learn to reason, not just memorise.',        color: 'default'    as const },
  { icon: BarChart3,     title: 'Test analysis system',     text: 'Error mapping, chapter-level weakness tracking, and score projection after every mock.', color: 'accent'     as const },
  { icon: Users2,        title: '1-on-1 mentorship',        text: 'Dedicated mentors for study planning, consistency, and weak-area recovery.',             color: 'secondary'  as const },
  { icon: FlaskConical,  title: 'Expert faculty',           text: 'Specialists with strong track records in boards and competitive exam coaching.',          color: 'primary'    as const },
  { icon: Clock4,        title: 'Structured discipline',    text: 'Timetables, revision cycles, and attendance tracking keep students accountable.',         color: 'default'    as const },
  { icon: Trophy,        title: 'Proven results',           text: '250+ selections in 2026 across JEE, NEET, and CUET from a single centre.',               color: 'accent'     as const },
  { icon: MessageCircle, title: 'Parent communication',     text: 'Weekly attendance + score updates. Monthly detailed progress reports.',                   color: 'secondary'  as const },
  { icon: LineChart,     title: 'Progress tracking',        text: 'Live score trends so students see their improvement in real numbers week by week.',        color: 'default'    as const },
];

export default function WhyChooseUsSection() {
  return (
    <Section id="why-us" bg="tinted">
      <Container>
        <SectionHeader
          eyebrow="Why Bright Minds"
          title="Serious students need more than just classes."
          description="We built every system — mentoring, testing, analytics, communication — so that preparation is disciplined, measurable, and actually effective."
        />
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map(({ icon: Icon, title, text, color }) => (
            <motion.div
              key={title} variants={itemVariants}
              className="group rounded-[24px] border border-slate-200/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ boxShadow: '0 12px 40px rgba(11,60,93,0.10)' }}
              style={{ boxShadow: '0 2px 8px rgba(11,60,93,0.05)' }}
            >
              <IconBox variant={color} size={52} radius="16px"><Icon size={22} aria-hidden="true"/></IconBox>
              <h3 className="mt-5 font-heading text-base font-semibold text-[#1E293B]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#64748B]">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
