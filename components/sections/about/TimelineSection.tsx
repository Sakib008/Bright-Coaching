/**
 * TimelineSection.tsx
 * Visual history timeline — milestones from 2011 → 2026.
 * Alternating left/right on desktop, single column on mobile.
 */
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { MILESTONES } from '@/lib/siteData';
import { viewport } from '@/lib/motion';

export default function TimelineSection() {
  return (
    <section id="history" aria-labelledby="timeline-heading" className="bg-[#EEF4F8] py-16 md:py-20">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport}
          transition={{ duration: 0.5 }} className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">Our Journey</p>
          <h2 id="timeline-heading" className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl">
            15 years of building something worth trusting
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Centre line — desktop only */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={['relative flex items-start gap-6 md:w-[calc(50%-24px)]', isLeft ? 'md:self-start' : 'md:self-end md:text-right'].join(' ')}>

                  {/* Dot on centre line */}
                  <div className={['absolute top-4 hidden h-4 w-4 rounded-full border-2 border-white bg-[#0B3C5D] shadow-md md:block', isLeft ? '-right-[calc(24px+8px)]' : '-left-[calc(24px+8px)]'].join(' ')} aria-hidden="true" />

                  <div className="flex-1 rounded-[22px] border border-slate-200/70 bg-white p-6 shadow-[0_4px_16px_rgba(11,60,93,0.06)]">
                    <span className="inline-block rounded-full bg-[#0B3C5D] px-3 py-1 text-xs font-bold text-white">{m.year}</span>
                    <h3 className="mt-3 font-heading text-base font-bold text-[#1E293B]">{m.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#64748B]">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
