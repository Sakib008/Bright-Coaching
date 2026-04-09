/**
 * CoursesGrid.tsx
 *
 * Purpose  : Renders a filtered list of Course cards in a responsive bento grid.
 * Props    : courses[] — filtered upstream by StreamTabs.
 * Reuses   : Badge (ui), Button (ui).
 * Animated : staggerChildren on reveal, whileHover lift + shadow.
 *
 * This component is intentionally "dumb" — no state, pure rendering.
 * All filtering happens in StreamTabs.tsx.
 */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { type Course } from '@/lib/coursesData';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';
import { Clock, CalendarDays, ArrowRight, BookOpen } from 'lucide-react';

type Props = {
  courses: Course[];
};

export default function CoursesGrid({ courses }: Props) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center py-16 text-center text-[#94A3B8]">
        <BookOpen size={40} className="mb-4 opacity-40" aria-hidden="true" />
        <p className="text-sm">No courses found for this stream yet.</p>
      </div>
    );
  }

  return (
    <motion.ul
      role="list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {courses.map((course) => (
        <motion.li
          key={course.id}
          variants={itemVariants}
          whileHover={{
            scale: 1.025,
            y: -4,
            boxShadow: '0 16px 48px rgba(11,60,93,0.14)',
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className={[
            'group flex flex-col rounded-[28px] p-6 md:p-7',
            course.featured
              ? 'bg-[#0B3C5D] text-white shadow-[0_16px_40px_rgba(11,60,93,0.22)]'
              : 'border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(11,60,93,0.06)]',
          ].join(' ')}
        >
          {/* Badge */}
          {course.badge && (
            <div className="mb-4">
              <Badge variant={course.featured ? 'accent' : (course.badgeColor ?? 'primary')}>
                {course.badge}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h3
            className={[
              'font-heading text-xl font-bold leading-snug',
              course.featured ? 'text-white' : 'text-[#1E293B]',
            ].join(' ')}
          >
            {course.title}
          </h3>

          <p
            className={[
              'mt-2 text-sm leading-7',
              course.featured ? 'text-blue-200' : 'text-[#64748B]',
            ].join(' ')}
          >
            {course.subtitle}
          </p>

          {/* Subjects */}
          <div className="mt-5 flex flex-wrap gap-2">
            {course.subjects.map((s) => (
              <span
                key={s}
                className={[
                  'rounded-full px-3 py-1 text-xs font-medium',
                  course.featured
                    ? 'bg-white/12 text-blue-200'
                    : 'bg-[#EEF4F8] text-[#64748B]',
                ].join(' ')}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Duration + Sessions */}
          <div className="mt-5 flex flex-col gap-2">
            <div
              className={[
                'flex items-center gap-2 text-xs',
                course.featured ? 'text-blue-300' : 'text-[#94A3B8]',
              ].join(' ')}
            >
              <Clock size={13} aria-hidden="true" />
              <span>{course.duration}</span>
            </div>
            <div
              className={[
                'flex items-center gap-2 text-xs',
                course.featured ? 'text-blue-300' : 'text-[#94A3B8]',
              ].join(' ')}
            >
              <CalendarDays size={13} aria-hidden="true" />
              <span>{course.sessions}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-between">
            <Link
              href={course.href}
              aria-label={`Learn more about ${course.title}`}
              className={[
                'flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5',
                course.featured ? 'text-[#F39C12]' : 'text-[#0B3C5D]',
              ].join(' ')}
            >
              View details <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/courses#cta" aria-label={`Enrol in ${course.title}`}>
              <span
                className={[
                  'rounded-full px-4 py-2 text-xs font-semibold transition-all hover:scale-[1.03]',
                  course.featured
                    ? 'bg-white/15 text-white hover:bg-white/22'
                    : 'bg-[#0B3C5D] text-white hover:bg-[#1A5276]',
                ].join(' ')}
              >
                Enquire
              </span>
            </Link>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}
