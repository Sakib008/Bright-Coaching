/**
 * FAQSection.tsx
 * Animated accordion with JSON-LD FAQ schema for SEO.
 * Keyword-rich questions naturally placed in headings.
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/lib/jeeData';

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(FAQS[0].id);

  return (
    <section aria-labelledby="faq-h" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="lg:pr-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">FAQ</p>
            <h2 id="faq-h" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
              Common questions about JEE coaching.
            </h2>
            <p className="mt-4 text-base text-[#64748B]">
              Still have questions? Our academic counsellors are available 9 AM – 7 PM.
            </p>
            <a href="tel:+919876543210"
              className="mt-5 inline-flex h-12 items-center rounded-full border border-[#0B3C5D]/20 bg-[#EEF4F8] px-6 text-sm font-semibold text-[#0B3C5D] transition-all hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(11,60,93,0.08)]">
              Call us directly →
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <motion.div key={faq.id}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={['overflow-hidden rounded-[20px] border bg-white transition-shadow',
                  open === faq.id ? 'border-[#0B3C5D]/20 shadow-[0_4px_20px_rgba(11,60,93,0.08)]' : 'border-slate-200/70'].join(' ')}>
                <button onClick={() => setOpen(open === faq.id ? null : faq.id)}
                  aria-expanded={open === faq.id}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <h3 className="text-sm font-semibold text-[#1E293B] md:text-base">{faq.q}</h3>
                  <span className={['flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300',
                    open === faq.id ? 'bg-[#0B3C5D] text-white rotate-45' : 'bg-[#EEF4F8] text-[#0B3C5D]'].join(' ')} aria-hidden="true">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === faq.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-[#64748B]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
      })}} />
    </section>
  );
}
