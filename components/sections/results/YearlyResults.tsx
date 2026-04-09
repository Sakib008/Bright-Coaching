/**
 * YearlyResults.tsx
 * Table showing year-on-year selection growth 2022–2026.
 * No chart library — pure CSS bar graph for zero bundle cost.
 */
'use client';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { YEAR_RESULTS } from '@/lib/siteData';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';

const EXAMS = [
  { key: 'jee'   as const, label: 'JEE',    color: 'bg-[#0B3C5D]', max: 80  },
  { key: 'neet'  as const, label: 'NEET',   color: 'bg-[#27AE60]', max: 110 },
  { key: 'cuet'  as const, label: 'CUET',   color: 'bg-[#7C3AED]', max: 60  },
  { key: 'boards'as const, label: 'Boards', color: 'bg-[#F39C12]', max: 180 },
];

export default function YearlyResults() {
  return (
    <section id="year-results" aria-labelledby="yr-heading" className="bg-[#EEF4F8] py-16 md:py-20">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">Year on Year</p>
          <h2 id="yr-heading" className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl">
            Consistent growth across every exam
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#64748B]">Number of selections per exam from 2022 to 2026.</p>
        </motion.div>

        <div className="overflow-x-auto rounded-[28px] border border-slate-200/70 bg-white shadow-[0_4px_20px_rgba(11,60,93,0.06)]">
          <table className="w-full min-w-[600px] border-collapse" aria-label="Year-wise selection data">
            <thead>
              <tr className="border-b border-slate-100">
                <th scope="col" className="px-6 py-5 text-left text-sm font-semibold text-[#94A3B8] w-24">Year</th>
                {EXAMS.map(e => <th key={e.key} scope="col" className="px-6 py-5 text-left text-sm font-bold text-[#1E293B]">{e.label}</th>)}
              </tr>
            </thead>
            <motion.tbody variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy}>
              {YEAR_RESULTS.map((row, ri) => (
                <motion.tr key={row.year} variants={itemVariants}
                  className="border-b border-slate-50 last:border-0 hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-6 py-4">
                    <span className={['inline-block rounded-full px-3 py-1 text-xs font-bold text-white', ri === YEAR_RESULTS.length - 1 ? 'bg-[#27AE60]' : 'bg-[#0B3C5D]'].join(' ')}>{row.year}</span>
                  </td>
                  {EXAMS.map(e => {
                    const raw  = row[e.key];
                    const num  = parseInt(raw);
                    const pct  = Math.min((num / e.max) * 100, 100);
                    return (
                      <td key={e.key} className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-2 w-24 overflow-hidden rounded-full bg-slate-100">
                            <motion.div className={['absolute left-0 top-0 h-full rounded-full', e.color].join(' ')}
                              initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
                          </div>
                          <span className="text-sm font-semibold text-[#1E293B]">{raw}</span>
                        </div>
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
