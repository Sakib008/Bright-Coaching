/**
 * ToppersGrid.tsx
 * 8-card bento grid of 2026 toppers with exam, score, college, batch info.
 * First card is featured (wider dark card).
 */
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { TOPPERS } from '@/lib/siteData';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';
import { GraduationCap, Star } from 'lucide-react';

export default function ToppersGrid() {
  const [featured, ...rest] = TOPPERS;
  return (
    <section id="toppers" aria-labelledby="toppers-heading" className="bg-white py-16 md:py-20">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#27AE60]">2026 Toppers</p>
          <h2 id="toppers-heading" className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl">
            Students who made it in 2026
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#64748B]">From JEE Advanced to NEET to CUET — here are some of our most notable selections this year.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured topper — spans 2 cols */}
          <motion.article variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.28 }}
            className={['col-span-1 flex flex-col rounded-[28px] p-7 sm:col-span-2', featured.color].join(' ')}
            style={{ boxShadow: '0 12px 40px rgba(11,60,93,0.20)' }}>
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/15 text-2xl font-bold text-white">{featured.initials}</div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white">
                <Star size={11} aria-hidden="true" /> Featured Topper
              </span>
            </div>
            <h3 className="mt-5 font-heading text-2xl font-bold text-white">{featured.name}</h3>
            <p className="mt-1 text-sm font-semibold text-blue-200">{featured.exam}</p>
            <p className="mt-3 font-heading text-4xl font-bold text-white">{featured.score}</p>
            <div className="mt-4 flex items-center gap-2 rounded-[14px] bg-white/12 px-4 py-3">
              <GraduationCap size={16} className="text-blue-200" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">{featured.college}</p>
                <p className="text-xs text-blue-300">{featured.batch} · {featured.year}</p>
              </div>
            </div>
          </motion.article>

          {/* Remaining toppers */}
          {rest.map((t) => (
            <motion.article key={t.id} variants={itemVariants}
              whileHover={{ scale: 1.025, y: -3, boxShadow: '0 12px 32px rgba(11,60,93,0.10)' }}
              transition={{ duration: 0.28 }}
              className="flex flex-col rounded-[24px] border border-slate-200/70 bg-[#F8FAFC] p-6">
              <div className="flex items-start justify-between">
                <div className={['flex h-11 w-11 items-center justify-center rounded-[12px] text-sm font-bold text-white', t.color].join(' ')}>{t.initials}</div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#64748B] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">{t.year}</span>
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[#1E293B]">{t.name}</h3>
              <p className="text-xs text-[#64748B]">{t.exam}</p>
              <p className="mt-3 font-heading text-2xl font-bold text-[#0B3C5D]">{t.score}</p>
              <p className="mt-1 text-xs text-[#94A3B8]">{t.college}</p>
              <p className="mt-3 text-xs font-medium text-[#64748B]">{t.batch}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
