'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import Badge from '@/components/ui/Badge';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';
import { ArrowRight, BookOpen, Atom, Leaf, Calculator, FileText, GraduationCap } from 'lucide-react';

type Course = {
  icon:       React.ElementType;
  label:      string;
  title:      string;
  desc:       string;
  subjects:   string[];
  badge?:     { text: string; variant: 'primary'|'secondary'|'accent' };
  featured?:  boolean;
  bgClass:    string;
};

const COURSES: Course[] = [
  {
    icon: GraduationCap,
    label: 'Class 9 – 10',
    title: 'Foundation Program',
    desc: 'Build rock-solid fundamentals in Science and Maths across Class 9 and 10 with CBSE/ICSE alignment and competitive-exam readiness baked in from day one.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    bgClass: 'bg-[#EEF4F8]',
  },
  {
    icon: BookOpen,
    label: 'Class 11 – 12',
    title: 'Core Academic',
    desc: 'Integrated school + competitive exam coaching for Science stream students. No double-preparation — one cohesive system for boards and entrance exams.',
    subjects: ['Physics', 'Chemistry', 'Biology / Maths', 'English', 'History', 'Pol. Science'],
    badge: { text: 'Most Popular', variant: 'accent' },
    featured: true,
    bgClass: 'bg-primary',
  },
  {
    icon: Atom,
    label: 'JEE',
    title: 'JEE Main + Advanced',
    desc: 'Targeted preparation for IIT aspirants. Covers the full JEE syllabus with weekly tests, chapter-wise drills, and rank-improvement tracks for re-appearing students.',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    badge: { text: 'High Demand', variant: 'secondary' },
    bgClass: 'bg-[#EEF4F8]',
  },
  {
    icon: Leaf,
    label: 'NEET',
    title: 'NEET UG',
    desc: 'Medical entrance coaching with NCERT-first teaching, high-yield recall systems, 720-score strategy, and regular full-length mocks with detailed biology analysis.',
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    badge: { text: 'High Demand', variant: 'secondary' },
    bgClass: 'bg-[#EEF4F8]',
  },
  {
    icon: FileText,
    label: 'CUET',
    title: 'CUET UG / PG',
    desc: 'Domain-specific + language paper coaching for university admissions. Section-wise strategy, time management drills, and score-maximisation for top DU/BHU colleges.',
    subjects: ['Domain subjects', 'English', 'General Test'],
    bgClass: 'bg-[#EEF4F8]',
  },
  {
    icon: Calculator,
    label: 'Olympiads',
    title: 'Olympiad & Scholarship',
    desc: 'Dedicated coaching for NSO, IMO, NTSE, and other scholarship exams. Builds higher-order thinking skills that improve competitive exam performance across all programs.',
    subjects: ['Mathematics', 'Science', 'Mental Ability'],
    bgClass: 'bg-[#EEF4F8]',
  },
];

export default function CoursesSection() {
  return (
    <Section id="courses" bg="white">
      <Container>
        <SectionHeader
          eyebrow="Courses"
          title="Every program is built for a specific student, stage, and goal."
          description="We don't offer one generic batch. Each program is scoped to where the student actually is — foundation, school, or exam-focused preparation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportLazy}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COURSES.map((c) => {
            const Icon = c.icon;
            const isFeatured = c.featured;

            return (
              <motion.article
                key={c.title}
                variants={itemVariants}
                className={[
                  'group relative flex flex-col rounded-[28px] p-6 md:p-7',
                  isFeatured
                    ? 'text-white shadow-[0_16px_48px_rgba(11,60,93,0.22)]'
                    : 'border border-slate-200/70 shadow-[0_4px_20px_rgba(11,60,93,0.06)] hover:shadow-[0_12px_40px_rgba(11,60,93,0.12)]',
                  c.bgClass,
                  'transition-all duration-300 hover:-translate-y-1',
                ].join(' ')}
                whileHover={{ scale: 1.015 }}
              >
                {/* Badge */}
                {c.badge && (
                  <div className="mb-4">
                    <Badge variant={c.badge.variant}>{c.badge.text}</Badge>
                  </div>
                )}

                {/* Icon */}
                <div className={[
                  'mb-4 flex h-12 w-12 items-center justify-center rounded-[16px]',
                  isFeatured ? 'bg-white/15' : 'bg-primary/08',
                ].join(' ')}>
                  <Icon size={22} className={isFeatured ? 'text-white' : 'text-primary'} aria-hidden="true" />
                </div>

                <p className={['text-xs font-semibold uppercase tracking-[0.15em]', isFeatured ? 'text-blue-300' : 'text-primary'].join(' ')}>
                  {c.label}
                </p>
                <h3 className={['mt-1 font-heading text-xl font-bold', isFeatured ? 'text-white' : 'text-[#1E293B]'].join(' ')}>
                  {c.title}
                </h3>
                <p className={['mt-3 text-sm leading-7 grow', isFeatured ? 'text-blue-200' : 'text-[#64748B]'].join(' ')}>
                  {c.desc}
                </p>

                {/* Subject pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.subjects.map(s => (
                    <span
                      key={s}
                      className={[
                        'rounded-full px-3 py-1 text-xs font-medium',
                        isFeatured ? 'bg-white/12 text-blue-200' : 'bg-slate-100 text-[#64748B]',
                      ].join(' ')}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  href="#cta"
                  className={[
                    'mt-6 flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5',
                    isFeatured ? 'text-[#F39C12]' : 'text-primary',
                  ].join(' ')}
                >
                  Enquire now <ArrowRight size={14} />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
