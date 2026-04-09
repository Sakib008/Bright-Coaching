/**
 * BenefitsSection.tsx
 * 6-card staggered grid · accent dot pattern · links to course detail
 */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BENEFITS } from '@/lib/jeeData';

const ICONS: Record<string, React.ReactNode> = {
  "graduation-cap": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  "users":           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  "clipboard-list":  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
  "message-circle":  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  "bar-chart-2":     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  "book-open":       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
};

export default function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-h" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-12 grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">Why Bright Minds</p>
            <h2 id="benefits-h" className="font-serif text-3xl font-bold leading-tight text-[#1E293B] md:text-4xl">
              What makes the best JEE coaching different.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-8 text-[#64748B]">
              Every item below is a structural decision, not a feature list. We built these systems in 2011 and measure them every batch.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <motion.article key={b.id}
              initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -4, boxShadow: '0 16px 40px rgba(11,60,93,0.10)' }}
              className="group rounded-[24px] border border-slate-200/70 bg-[#F8FAFC] p-7 transition-all duration-300">
              {/* Accent dot */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px]"
                  style={{ background: `${b.accent}18`, color: b.accent }}>
                  {ICONS[b.icon]}
                </div>
                <div className="h-1 w-6 rounded-full transition-all duration-300 group-hover:w-10"
                  style={{ background: b.accent }} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-[#1E293B]">{b.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#64748B]">{b.body}</p>
            </motion.article>
          ))}
        </div>

        {/* Internal link to course detail */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 flex items-center gap-4">
          <Link href="/courses/jee"
            className="text-sm font-semibold text-[#0B3C5D] hover:underline">
            See the full JEE course structure →
          </Link>
          <span className="text-[#CBD5E1]">·</span>
          <Link href="/neet" className="text-sm text-[#64748B] hover:text-[#0B3C5D] hover:underline">NEET preparation</Link>
          <span className="text-[#CBD5E1]">·</span>
          <Link href="/cuet" className="text-sm text-[#64748B] hover:text-[#0B3C5D] hover:underline">CUET preparation</Link>
        </motion.div>
      </div>
    </section>
  );
}
