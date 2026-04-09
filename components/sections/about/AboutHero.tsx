/**
 * AboutHero.tsx
 * Full-bleed hero with parallax background, editorial headline, CTA.
 * Parallax: background drifts 15% on scroll — performance-safe (transform only).
 */
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { INSTITUTE_META } from '@/lib/aboutData';

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section
      ref={ref}
      aria-labelledby="about-h1"
      className="relative flex min-h-[90vh] items-end overflow-hidden rounded-[32px] bg-primary mx-3 mt-3 md:mx-5 md:mt-5"
    >
      {/* ── Parallax bg layer ── */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="absolute inset-0 -z-0 will-change-transform"
      >
       
      </motion.div>

      {/* ── Floating accent shapes ── */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[8%] top-[12%] h-40 w-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute right-[18%] top-[28%] h-20 w-20 rounded-[22px] border border-[#27AE60]/30 bg-[#27AE60]/10"
      />

      {/* ── Content ── */}
      <motion.div style={{ y: textY }} className="relative z-10 w-full px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#27AE60]" aria-hidden="true" />
            <span className="text-sm font-semibold text-white/90">
              Established {INSTITUTE_META.founded} · {INSTITUTE_META.location}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="about-h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Coaching built on{' '}
            <em className="not-italic text-[#27AE60]">trust,</em>{' '}
            not just promises.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl"
          >
            {INSTITUTE_META.tagline} Fifteen years of verified selections, disciplined faculty, and students who actually understand what they're studying.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#D68910]"
              style={{ boxShadow: '0 8px 28px rgba(243,156,18,0.35)' }}
            >
              Book Free Counselling
            </Link>
            <Link
              href="#story"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15"
            >
              Our story ↓
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-16 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-8 w-5 items-start justify-center rounded-full border border-white/30 p-1"
            >
              <span className="h-2 w-0.5 rounded-full bg-white/60" />
            </motion.div>
            <span className="text-xs font-medium text-white/50">Scroll to explore</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
