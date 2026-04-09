/**
 * ExamsCarousel.tsx
 *
 * Purpose  : Horizontal scroll carousel for exam-specific cards
 *            (JEE, NEET, CUET, Olympiads, Boards).
 * Pattern  : Auto-scrolling via useAnimationFrame + useMotionValue.
 *            Pauses on hover/touch. Manual prev/next controls.
 * Reuses   : Container (layout), Badge (ui).
 * SEO      : h2 heading with keyword-rich text.
 */
'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import Container from '@/components/layout/Container';
import { EXAM_CARDS } from '@/lib/coursesData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ExamsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const x        = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const doubled  = [...EXAM_CARDS, ...EXAM_CARDS];

  // Smooth auto-scroll
  useAnimationFrame((_, delta) => {
    if (paused) return;
    const el   = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const next = x.get() - delta * 0.022;
    x.set(next <= -half ? 0 : next);
  });

  // Manual scroll via container element scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    containerRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section
      id="exams"
      aria-labelledby="exams-heading"
      className="bg-white py-16 md:py-20"
    >
      <Container>
        {/* Header row */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">
              Exams We Cover
            </p>
            <h2
              id="exams-heading"
              className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl"
            >
              JEE · NEET · CUET · Boards · Olympiads
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#64748B]">
              Specialised preparation for every entrance exam with dedicated
              faculty, test series, and targeted study plans.
            </p>
          </motion.div>

          {/* Arrow controls */}
          <div className="flex shrink-0 gap-3">
            {([[-1, 'Scroll left'], [1, 'Scroll right']] as [1 | -1, string][]).map(
              ([dir, label], i) => (
                <button
                  key={i}
                  onClick={() => scrollBy(dir)}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C5D] transition-all hover:bg-[#0B3C5D] hover:text-white hover:shadow-[0_4px_16px_rgba(11,60,93,0.18)]"
                >
                  {dir === -1 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </button>
              )
            )}
          </div>
        </div>
      </Container>

      {/* Infinite scroll strip */}
      <div
        ref={containerRef}
        className="overflow-x-auto p-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-5 px-4 md:px-6 lg:px-8"
        >
          {doubled.map((card, idx) => (
            <motion.article
              key={`${card.id}-${idx}`}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={[
                'flex w-[300px] shrink-0 flex-col rounded-[28px] p-6 md:w-[320px]',
                card.color,
                card.textColor,
              ].join(' ')}
              style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.12)' }}
            >
              {/* Exam label */}
              <div className="mb-3 flex items-center justify-between">
                <span className="font-heading text-2xl font-bold">{card.exam}</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  {card.tagline}
                </span>
              </div>

              {/* Subjects */}
              <div className="flex flex-wrap gap-2">
                {card.subjects.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/12 px-2.5 py-1 text-xs font-medium opacity-90"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {card.keyStats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-[14px] bg-white/10 p-3 text-center"
                  >
                    <p className="font-heading text-lg font-bold">{value}</p>
                    <p className="mt-0.5 text-[10px] opacity-75">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <Link
                href={card.href}
                aria-label={`Learn about ${card.exam} coaching at Bright Minds`}
                className="mt-6 flex items-center gap-1.5 self-start rounded-full bg-white/15 px-4 py-2 text-sm font-semibold transition-all hover:bg-white/25"
              >
                View program <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
