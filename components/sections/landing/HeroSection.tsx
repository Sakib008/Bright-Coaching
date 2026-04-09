/**
 * HeroSection.tsx
 * Fully data-driven. Zero hardcoded text.
 * accentColor drives the gradient blobs and stat underlines.
 */
'use client';

import { motion } from 'framer-motion';
import type { HeroData } from '@/types/exam';
import Link from 'next/link';

type Props = { data: HeroData };

export default function HeroSection({ data }: Props) {
  const { eyebrow, heading, subheading, primaryCTA, secondaryCTA, stats, badge, accentColor } = data;

  return (
    <section aria-labelledby="hero-h1"
      className="relative overflow-hidden bg-[#0B3C5D] px-4 py-16 text-white md:px-8 md:py-24">

      {/* Accent blob — color driven by exam data */}
      <motion.div aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${accentColor}50, transparent 70%)` }}
      />
      <motion.div aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute -bottom-32 -left-16 h-[400px] w-[400px] rounded-full"
        style={{ background: `radial-gradient(circle, ${accentColor}40, transparent 70%)` }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,1)1px,transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative mx-auto max-w-[1160px]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: accentColor }} aria-hidden="true" />
            <span className="text-sm font-semibold text-white/90">{eyebrow}</span>
          </div>

          {/* H1 */}
          <h1 id="hero-h1"
            className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3rem]">
            {heading}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {subheading}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-bold text-[#0B3C5D] transition-all hover:scale-[1.03]"
              style={{ background: '#fff', boxShadow: `0 6px 24px ${accentColor}40` }}>
              {primaryCTA}
            </Link>
            <Link href="#results"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition-all hover:bg-white/15">
              {secondaryCTA}
            </Link>
          </div>

          {/* Urgency badge */}
          {badge && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{ borderColor: `${accentColor}60`, background: `${accentColor}20`, color: '#F9C46B' }}>
              {badge}
            </motion.p>
          )}

          {/* Stats row — data.stats.map() */}
          <div className="mt-10 flex flex-wrap gap-4">
            {stats.map(s => (
              <div key={s.label}
                className="rounded-[22px] border border-white/15 bg-white/08 px-5 py-4"
                style={{ background: 'rgba(255,255,255,0.07)' }}>
                <p className="font-serif text-2xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-white/60">{s.label}</p>
                <div className="mt-2 h-0.5 w-6 rounded-full" style={{ background: accentColor }} aria-hidden="true" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
