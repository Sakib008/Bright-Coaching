'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { heroHidden, heroItem } from '@/lib/motion';
import { ChevronRight, Trophy } from 'lucide-react';
import { RESULT_STATS } from '@/lib/siteData';

export default function ResultsHeader() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pb-14 pt-8" aria-labelledby="results-heading">
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle,#CBD5E1 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[rgba(39,174,96,0.06)] blur-3xl" aria-hidden="true" />

      <Container className="relative">
        {/* Breadcrumb */}
        <motion.nav initial={heroHidden} animate={heroItem(0)} aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1 text-sm text-[#94A3B8]">
            {[{ label: 'Home', href: '/' }, { label: 'Results', href: '/results' }].map((c, i) => (
              <li key={c.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={13} aria-hidden="true" />}
                {i === 0 ? <Link href={c.href} className="hover:text-[#0B3C5D]">{c.label}</Link>
                  : <span className="font-medium text-[#0B3C5D]">{c.label}</span>}
              </li>
            ))}
          </ol>
        </motion.nav>

        <motion.div initial={heroHidden} animate={heroItem(1)}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#27AE60]/20 bg-white px-4 py-2 shadow-[0_2px_8px_rgba(39,174,96,0.08)]">
          <Trophy size={15} className="text-[#27AE60]" aria-hidden="true" />
          <span className="text-sm font-semibold text-[#27AE60]">2026 Results — JEE · NEET · CUET · Boards</span>
        </motion.div>

        <motion.h1 id="results-heading" initial={heroHidden} animate={heroItem(2)}
          className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-[#1E293B] md:text-5xl lg:text-[3.2rem]">
          Results that <span className="text-[#27AE60]">speak for themselves</span>
        </motion.h1>

        <motion.p initial={heroHidden} animate={heroItem(3)}
          className="mt-5 max-w-2xl text-base leading-8 text-[#64748B] md:text-lg">
          Every number here is a real student who enrolled, attended, and cleared their exam. No estimated ranges — only verified selections.
        </motion.p>

        {/* Stats strip */}
        <motion.div initial={heroHidden} animate={heroItem(4)}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {RESULT_STATS.map(({ value, label, sub }) => (
            <div key={label} className="rounded-[20px] border border-slate-200/70 bg-white p-4 shadow-[0_2px_8px_rgba(11,60,93,0.05)]">
              <p className="font-heading text-2xl font-bold text-[#0B3C5D]">{value}</p>
              <p className="mt-1 text-xs font-semibold text-[#1E293B] leading-5">{label}</p>
              {sub && <p className="mt-0.5 text-[10px] text-[#94A3B8]">{sub}</p>}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
