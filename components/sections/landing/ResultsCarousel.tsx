/**
 * ResultsCarousel.tsx
 * Horizontal scroll carousel. Renders ResultCard[] via map().
 * Works for JEE (AIR), NEET (Score), CUET (Percentile), or any rankLabel.
 */
'use client';

import { motion } from 'framer-motion';
import type { ResultsData } from '@/types/exam';

type Props = { data: ResultsData };

const ACCENT_COLORS = ['#0B3C5D','#27AE60','#7C3AED','#F39C12','#0891B2','#DB2777'];

export default function ResultsCarousel({ data }: Props) {
  const { eyebrow, heading, cards } = data;

  return (
    <section id="results" className="bg-[#F1F5F9] py-14 md:py-18">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">{heading}</h2>
        </motion.div>

        {/* Native horizontal scroll — no heavy slider library */}
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-5 pb-2">
            {cards.map((card, i) => (
              <motion.div key={`${card.name}-${i}`}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(11,60,93,0.12)' }}
                className="w-[220px] snap-start rounded-[26px] border border-slate-200/70 bg-white p-6"
                style={{ boxShadow: '0 2px 12px rgba(11,60,93,0.06)' }}>

                {/* Avatar */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[16px] text-sm font-bold text-white"
                  style={{ background: ACCENT_COLORS[i % ACCENT_COLORS.length] }}>
                  {card.avatar ?? card.name.slice(0, 2).toUpperCase()}
                </div>

                {/* Rank */}
                <p className="font-serif text-2xl font-bold text-[#1E293B]">{card.rank}</p>
                <p className="mt-0.5 text-xs font-medium text-[#94A3B8]">{card.rankLabel} · {card.year}</p>

                <div className="my-3 h-px bg-slate-100" aria-hidden="true" />

                <p className="text-sm font-semibold text-[#1E293B]">{card.name}</p>
                <p className="mt-0.5 text-xs text-[#94A3B8]">{card.subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
