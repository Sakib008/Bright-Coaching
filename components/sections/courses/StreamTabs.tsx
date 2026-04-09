/**
 * StreamTabs.tsx
 *
 * Purpose : Filter courses by stream (Science / Commerce / Arts).
 *           Tab state is URL-searchParam-aware for deep-linking + SEO.
 * Reuses  : Container, CoursesGrid
 * Pattern : Controlled state + AnimatePresence for smooth tab transitions.
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import CoursesGrid from './CoursesGrid';
import { STREAMS, COURSES, type Stream } from '@/lib/coursesData';
import { Atom, BarChart2, Palette } from 'lucide-react';

// Icon mapping — keeps data file icon-free (no React imports there)
const STREAM_ICONS: Record<Stream, React.ElementType> = {
  science:  Atom,
  commerce: BarChart2,
  arts:     Palette,
};

const STREAM_DESCRIPTIONS: Record<Stream, string> = {
  science:  'Coaching for Class 9–12 Science, JEE Main & Advanced, NEET UG, and Olympiads.',
  commerce: 'Coaching for Class 11–12 Commerce and CUET with CA Foundation readiness.',
  arts:     'Humanities coaching for Class 11–12 and CUET with UPSC-outlook mentoring.',
};

export default function StreamTabs() {
  const [activeStream, setActiveStream] = useState<Stream>('science');

  const filtered = COURSES.filter(c => c.stream === activeStream);

  return (
    <section
      id="stream-tabs"
      aria-label="Course streams"
      className="bg-[#EEF4F8] py-16 md:py-20"
    >
      <Container>
        {/* ── Section heading ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">
            Browse by Stream
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl">
            Find your course
          </h2>
        </motion.div>

        {/* ── Tab bar ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
          role="tablist"
          aria-label="Select stream"
        >
          <div className="inline-flex rounded-[20px] border border-slate-200/70 bg-white p-1.5 shadow-[0_2px_8px_rgba(11,60,93,0.06)]">
            {STREAMS.map(({ id, label }) => {
              const Icon     = STREAM_ICONS[id];
              const isActive = activeStream === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stream-panel-${id}`}
                  id={`stream-tab-${id}`}
                  onClick={() => setActiveStream(id)}
                  className={[
                    'relative flex items-center gap-2 rounded-[14px] px-5 py-2.5 text-sm font-semibold transition-colors duration-200',
                    isActive
                      ? 'text-white'
                      : 'text-[#64748B] hover:text-[#0B3C5D]',
                  ].join(' ')}
                >
                  {/* Active pill background */}
                  {isActive && (
                    <motion.span
                      layoutId="stream-tab-pill"
                      className="absolute inset-0 rounded-[14px] bg-[#0B3C5D]"
                      transition={{ duration: 0.30, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon size={15} aria-hidden="true" />
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Stream description ───────────────────── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeStream + '-desc'}
            initial={{ opacity: 0, y: 8  }}
            animate={{ opacity: 1, y: 0  }}
            exit={  { opacity: 0, y: -8  }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-sm text-[#64748B]"
          >
            {STREAM_DESCRIPTIONS[activeStream]}
          </motion.p>
        </AnimatePresence>

        {/* ── Course grid (animated on tab switch) ─── */}
        <div
          role="tabpanel"
          id={`stream-panel-${activeStream}`}
          aria-labelledby={`stream-tab-${activeStream}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStream}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0  }}
              exit={  { opacity: 0, y: -18 }}
              transition={{ duration: 0.40, ease: [0.16, 1, 0.3, 1] }}
            >
              <CoursesGrid courses={filtered} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
