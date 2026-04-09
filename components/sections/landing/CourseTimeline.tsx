/**
 * CourseTimeline.tsx
 * Renders any number of phases via map().
 * Works for 2-phase Foundation or 3-phase JEE equally — no hardcoding.
 */
'use client';

import { motion } from 'framer-motion';
import type { TimelineData } from '@/types/exam';

type Props = { data: TimelineData };

export default function CourseTimeline({ data }: Props) {
  const { eyebrow, heading, phases } = data;

  return (
    <section className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">{heading}</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-slate-200 md:block" aria-hidden="true" />

          <div className="flex flex-col gap-8">
            {phases.map((phase, i) => (
              <motion.div key={phase.phase}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-16">

                {/* Phase dot */}
                <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full bg-[#0B3C5D] text-xs font-bold text-white md:flex"
                  aria-hidden="true">{i + 1}</div>

                <div className="rounded-[26px] border border-slate-200/70 bg-white p-6"
                  style={{ boxShadow: '0 2px 12px rgba(11,60,93,0.05)' }}>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#0B3C5D]/10 px-3 py-1 text-xs font-bold text-[#0B3C5D]">{phase.phase}</span>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-[#64748B]">{phase.duration}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-lg font-bold text-[#1E293B]">{phase.title}</h3>
                  <ul className="mb-4 flex flex-wrap gap-2">
                    {phase.topics.map(t => (
                      <li key={t}
                        className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-xs font-medium text-[#64748B]">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 rounded-[14px] bg-[#F0FDF4] p-3">
                    <span className="text-sm" aria-hidden="true">🏁</span>
                    <p className="text-xs font-semibold text-[#16A34A]">{phase.milestone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
