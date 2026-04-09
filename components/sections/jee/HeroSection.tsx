/**
 * HeroSection.tsx
 * H1 (keyword-focused) · parallax bg · floating UI elements · stat strip
 * 'use client' for parallax useScroll
 */
'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HERO_STATS } from '@/lib/jeeData';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section
      ref={ref}
      aria-labelledby="jee-h1"
      className="relative flex min-h-[92vh] items-end overflow-hidden rounded-[32px] bg-[#0B3C5D] mx-3 mt-3 md:mx-5 md:mt-5"
    >
      {/* ── Parallax Background ── */}
      <motion.div style={{ y: bgY }} aria-hidden="true" className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 75% 55% at 65% 5%,rgba(39,174,96,0.22),transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 60% at 5% 85%,rgba(7,26,48,0.85),transparent)' }} />
        <div className="absolute inset-0 opacity-[0.055]"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '26px 26px' }} />
      </motion.div>

      {/* ── Floating accent shapes ── */}
      <motion.div aria-hidden="true"
        animate={{ y: [0, -16, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[6%] top-[10%] h-44 w-44 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm" />
      <motion.div aria-hidden="true"
        animate={{ y: [0, 14, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute right-[20%] top-[30%] h-20 w-20 rounded-[20px]"
        style={{ background: 'rgba(39,174,96,0.12)', border: '1px solid rgba(39,174,96,0.25)' }} />

      {/* ── Floating rank card ── */}
      <motion.div aria-hidden="true"
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-[5%] top-[22%] hidden rounded-[22px] border border-white/15 bg-white/10 p-4 backdrop-blur-md md:block"
        style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.2)' }}>
        <p className="text-xs font-semibold text-white/60">Latest Result</p>
        <p className="mt-1 text-2xl font-bold text-white">AIR 42</p>
        <p className="text-xs text-[#27AE60] font-semibold">IIT Bombay · CS · 2026</p>
      </motion.div>

      {/* ── Content ── */}
      <motion.div style={{ y: textY }} className="relative z-10 w-full px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-[1160px]">
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#27AE60]" aria-hidden="true" />
            <span className="text-sm font-semibold text-white/90">Admissions open · JEE 2026–27 batches</span>
          </motion.div>

          {/* H1 — keyword-rich, one per page */}
          <motion.h1 id="jee-h1"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[4.2rem]">
            Delhi's best JEE coaching — <em className="not-italic text-[#27AE60]">built for IIT.</em>
          </motion.h1>

          {/* Subheading */}
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.30, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            250+ IIT selections in 2026. Expert faculty, 1:12 mentor ratio, weekly diagnostic tests, and a 4-phase programme designed to take you from concept clarity to rank.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact?source=jee-hero"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{ boxShadow: '0 8px 28px rgba(243,156,18,0.38)' }}>
              Book Free Demo Class →
            </Link>
            <Link href="/courses/jee"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
              See course details
            </Link>
          </motion.div>

          {/* Stat strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-wrap gap-5">
            {HERO_STATS.map((s, i) => (
              <div key={i} className="rounded-[18px] border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-xs text-white/65">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
