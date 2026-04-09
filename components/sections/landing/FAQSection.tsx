/**
 * FAQSection.tsx
 * Accepts FAQData. Renders accordion items via map().
 * Controlled open state — only one open at a time.
 */
'use client';

import { useState }  from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQData } from '@/types/exam';

type Props = { data: FAQData };

export default function FAQSection({ data }: Props) {
  const { eyebrow, heading, items } = data;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18">
      <div className="mx-auto max-w-[860px] px-4 md:px-8">

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">{heading}</h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={item.question}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={[
                  'overflow-hidden rounded-[20px] border bg-white transition-all duration-200',
                  isOpen ? 'border-[#0B3C5D]/30 shadow-[0_4px_20px_rgba(11,60,93,0.08)]' : 'border-slate-200/70',
                ].join(' ')}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}>
                  <span className="pr-4 text-base font-semibold text-[#1E293B]">{item.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-xl text-[#94A3B8]" aria-hidden="true">+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>
                      <p className="px-6 pb-5 text-sm leading-7 text-[#64748B]">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
