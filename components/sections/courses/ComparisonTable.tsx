/**
 * ComparisonTable.tsx
 *
 * Purpose  : Side-by-side feature comparison for all 4 program types.
 * Reuses   : Container (layout).
 * A11y     : <table> with proper scope/thead/caption.
 * Mobile   : Horizontal scroll with shadow hint.
 * Animated : Scroll-triggered reveal per row (stagger).
 */
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { COMPARISON_ROWS } from '@/lib/coursesData';
import { Check, Minus } from 'lucide-react';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';

const COLS = [
  { key: 'class1012' as const, label: 'Class 9–12',  color: 'text-[#0B3C5D]', bg: 'bg-[#EEF4F8]' },
  { key: 'jee'       as const, label: 'JEE',         color: 'text-[#0B3C5D]', bg: 'bg-[#EEF4F8]' },
  { key: 'neet'      as const, label: 'NEET',        color: 'text-[#27AE60]', bg: 'bg-[#F0FAF5]' },
  { key: 'cuet'      as const, label: 'CUET',        color: 'text-[#7C3AED]', bg: 'bg-[#F5F3FF]' },
];

function CellValue({ value }: { value: string | boolean }) {
  if (value === true)  return <Check  size={18} className="text-[#27AE60] mx-auto" aria-label="Included" />;
  if (value === false) return <Minus  size={16} className="text-[#CBD5E1] mx-auto" aria-label="Not included" />;
  return <span className="text-sm text-[#1E293B]">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="bg-[#F8FAFC] py-16 md:py-20"
    >
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">
            Compare Programs
          </p>
          <h2
            id="compare-heading"
            className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl"
          >
            Which program fits your goal?
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#64748B]">
            Compare Class coaching, JEE coaching, NEET coaching, and CUET coaching side by side.
          </p>
        </motion.div>

        {/* Scroll wrapper — mobile horizontal scroll */}
        <div
          className="overflow-x-auto rounded-[28px] border border-slate-200/70 shadow-[0_4px_24px_rgba(11,60,93,0.07)] [scrollbar-width:thin]"
          role="region"
          aria-label="Program comparison table"
        >
          <table className="w-full min-w-[640px] border-collapse" aria-describedby="compare-heading">
            <caption className="sr-only">
              Feature comparison between Class 9–12, JEE, NEET, and CUET coaching programs at Bright Minds.
            </caption>

            {/* Column headers */}
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[200px] rounded-tl-[28px] bg-white px-6 py-5 text-left text-sm font-semibold text-[#94A3B8]"
                >
                  Feature
                </th>
                {COLS.map(({ key, label, color, bg }, i) => (
                  <th
                    key={key}
                    scope="col"
                    className={[
                      'px-6 py-5 text-center text-base font-bold',
                      color,
                      bg,
                      i === COLS.length - 1 ? 'rounded-tr-[28px]' : '',
                    ].join(' ')}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Rows */}
            <motion.tbody
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportLazy}
            >
              {COMPARISON_ROWS.map((row, rowIdx) => (
                <motion.tr
                  key={row.feature}
                  variants={itemVariants}
                  className={[
                    'border-t border-slate-100 transition-colors hover:bg-[#F8FAFC]',
                    rowIdx === COMPARISON_ROWS.length - 1 ? 'last-row' : '',
                  ].join(' ')}
                >
                  <th
                    scope="row"
                    className={[
                      'px-6 py-4 text-left text-sm font-medium text-[#1E293B]',
                      rowIdx === COMPARISON_ROWS.length - 1 ? 'rounded-bl-[28px] bg-white' : 'bg-white',
                    ].join(' ')}
                  >
                    {row.feature}
                  </th>
                  {COLS.map(({ key, bg }, i) => (
                    <td
                      key={key}
                      className={[
                        'px-6 py-4 text-center',
                        bg,
                        rowIdx === COMPARISON_ROWS.length - 1 && i === COLS.length - 1
                          ? 'rounded-br-[28px]'
                          : '',
                      ].join(' ')}
                    >
                      <CellValue value={row[key]} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* Footnote */}
        <p className="mt-4 text-xs text-[#94A3B8]">
          * Fees and session frequency may vary by batch level. Contact us for exact details.
        </p>
      </Container>
    </section>
  );
}
