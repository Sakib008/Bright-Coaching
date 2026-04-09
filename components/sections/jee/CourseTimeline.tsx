/**
 * CourseTimeline.tsx
 * Animated vertical timeline — 4 phases of JEE preparation.
 * Line draws in as section enters viewport.
 */
'use client';

import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/jeeData';

export default function CourseTimeline() {
  return (
    <section aria-labelledby="timeline-h" className="py-16 md:py-20" style={{ background: '#F1F5F9' }}>
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-14">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">The Journey</p>
          <h2 id="timeline-h" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
            Your 12-month JEE preparation roadmap.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#64748B]">
            Four phases, each with a clear goal and measurable outcome — from concept clarity to exam-day confidence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[19px] top-0 hidden h-full w-[2px] origin-top rounded-full md:left-1/2 md:block"
            style={{ background: 'linear-gradient(to bottom,#0B3C5D,#27AE60,#7C3AED,#F39C12)', transformOrigin: 'top' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {TIMELINE.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={step.id}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid items-center gap-6 md:grid-cols-2 ${isLeft ? '' : 'md:[&>:first-child]:order-last'}`}>
                  {/* Card */}
                  <article className="rounded-[26px] border border-slate-200/70 bg-white p-6 md:p-8"
                    style={{ boxShadow: '0 4px 20px rgba(11,60,93,0.06)' }}>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                        style={{ background: step.color }}>{step.phase}</span>
                      <span className="text-xs font-semibold text-[#94A3B8]">{step.duration}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1E293B]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#64748B]">{step.body}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.tags.map(tag => (
                        <span key={tag}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ background: `${step.color}18`, color: step.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>

                  {/* Centre dot — desktop only */}
                  <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white md:block"
                    style={{ background: step.color, boxShadow: `0 0 0 4px ${step.color}28` }}
                    aria-hidden="true" />

                  {/* Spacer for opposite side */}
                  <div aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
