/**
 * BenefitsSection.tsx
 * Accepts BenefitsData. Renders any number of benefit cards via map().
 * No text hardcoded. Works for JEE, NEET, CUET, Foundation, or any future exam.
 */
'use client';

import { motion } from 'framer-motion';
import type { BenefitsData } from '@/types/exam';

type Props = { data: BenefitsData };

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const card = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function BenefitsSection({ data }: Props) {
  const { eyebrow, heading, items } = data;

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">{heading}</h2>
        </motion.div>

        <motion.div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          {items.map(item => (
            <motion.div key={item.title} variants={card}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(11,60,93,0.10)' }}
              className="rounded-[26px] border border-slate-200/70 bg-white p-6 transition-shadow duration-300"
              style={{ boxShadow: '0 2px 12px rgba(11,60,93,0.05)' }}>
              <div className="mb-4 text-2xl" aria-hidden="true">{item.icon}</div>
              <h3 className="mb-2 text-base font-bold text-[#1E293B]">{item.title}</h3>
              <p className="text-sm leading-7 text-[#64748B]">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
