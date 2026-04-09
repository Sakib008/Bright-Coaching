/**
 * MissionSection.tsx
 * Mission statement + 6 core values in bento grid.
 */
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { VALUES } from '@/lib/siteData';
import { containerVariants, itemVariants, fadeUp, viewport, viewportLazy } from '@/lib/motion';
import { BrainCircuit, BarChart2, ShieldCheck, Users, Clock, Target } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = { BrainCircuit, BarChart2, ShieldCheck, Users, Clock, Target };

export default function MissionSection() {
  return (
    <section id="mission" aria-labelledby="mission-heading" className="bg-white py-16 md:py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Mission text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">Our Mission</p>
            <h2 id="mission-heading" className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl">
              Disciplined preparation, measurable outcomes, and a system every student can trust.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#64748B]">
              <p>Bright Minds was not started to be another coaching brand. It was started because the founders watched talented students fail structured exams not due to intelligence, but due to fragmented preparation, inconsistent teaching, and a lack of someone who actually tracked their progress.</p>
              <p>Every process here — from batch sizing to weekly test review to parent communication — is designed to close that gap. We are not the biggest institute in Delhi. We aim to be the most reliable one.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {[['12,000+', 'Students taught'], ['15 yrs', 'Experience'], ['25', 'Max batch size']].map(([v, l]) => (
                <div key={l} className="rounded-[18px] border border-slate-200/60 bg-[#F8FAFC] px-5 py-4 text-center">
                  <p className="font-heading text-2xl font-bold text-[#0B3C5D]">{v}</p>
                  <p className="mt-1 text-xs text-[#94A3B8]">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values grid */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map((val) => {
              const Icon = ICON_MAP[val.icon] ?? Target;
              return (
                <motion.div key={val.title} variants={itemVariants}
                  whileHover={{ scale: 1.025, y: -3, boxShadow: '0 12px 32px rgba(11,60,93,0.10)' }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[22px] border border-slate-200/70 bg-[#F8FAFC] p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#EEF4F8] text-[#0B3C5D]">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-[#1E293B]">{val.title}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-[#64748B]">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
