/**
 * AboutHeader.tsx
 * Page hero for /about — institute story intro, animated bg, breadcrumb.
 * One h1 only: "About Bright Minds"
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { heroHidden, heroItem } from '@/lib/motion';
import { ChevronRight, Award } from 'lucide-react';

export default function AboutHeader() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pb-14 pt-8" aria-labelledby="about-heading">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      {/* Glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[rgba(11,60,93,0.05)] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[rgba(39,174,96,0.05)] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        {/* Breadcrumb */}
        <motion.nav initial={heroHidden} animate={heroItem(0)} aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1 text-sm text-[#94A3B8]">
            {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }].map((c, i) => (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={13} aria-hidden="true" />}
                {i === 0
                  ? <Link href={c.href} className="transition-colors hover:text-[#0B3C5D]">{c.label}</Link>
                  : <span className="font-medium text-[#0B3C5D]">{c.label}</span>}
              </li>
            ))}
          </ol>
        </motion.nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <motion.div initial={heroHidden} animate={heroItem(1)}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B3C5D]/15 bg-white px-4 py-2 shadow-[0_2px_8px_rgba(11,60,93,0.06)]">
              <Award size={15} className="text-[#F39C12]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0B3C5D]">Coaching since 2011 · Connaught Place, Delhi</span>
            </motion.div>

            <motion.h1 id="about-heading" initial={heroHidden} animate={heroItem(2)}
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-[#1E293B] md:text-5xl lg:text-[3.2rem]">
              About <span className="text-[#0B3C5D]">Bright Minds</span>
            </motion.h1>

            <motion.p initial={heroHidden} animate={heroItem(3)}
              className="mt-5 max-w-2xl text-base leading-8 text-[#64748B] md:text-lg">
              We are a coaching institute built on one belief: every student who sits in our classroom deserves structured teaching, honest feedback, and a mentor who holds them to a higher standard than they hold themselves.
            </motion.p>
          </div>

          {/* Year founded badge */}
          <motion.div initial={heroHidden} animate={heroItem(4)}
            className="flex shrink-0 flex-col items-center rounded-[24px] border border-slate-200/70 bg-white px-8 py-6 text-center shadow-[0_2px_8px_rgba(11,60,93,0.05)]">
            <p className="font-heading text-5xl font-bold text-[#0B3C5D]">15</p>
            <p className="mt-1 text-xs text-[#94A3B8]">Years of teaching</p>
            <div className="mt-3 h-px w-12 bg-slate-200" />
            <p className="mt-3 font-heading text-2xl font-bold text-[#1E293B]">2011</p>
            <p className="text-xs text-[#94A3B8]">Founded</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
