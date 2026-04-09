/**
 * WhyChooseUs.tsx
 * 6-card staggered grid — each card has an accent dot + title + body.
 * No icon circles (anti-pattern). Clean left-aligned layout.
 */
'use client';

import { motion } from 'framer-motion';
import { WHY_CHOOSE } from '@/lib/aboutData';

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 grid gap-6 md:grid-cols-[1fr_1fr]"
        >
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">Why Bright Minds</p>
            <h2 id="why-heading" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
              Six things that actually matter in a coaching institute.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base leading-8 text-[#64748B]">
              These aren't selling points — they're structural decisions we made in 2011 and have never compromised on.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -4, boxShadow: '0 16px 40px rgba(11,60,93,0.10)' }}
              className="group rounded-[24px] border border-slate-200/70 bg-[#F8FAFC] p-7 transition-all duration-300"
            >
              {/* Accent dot */}
              <div
                className="mb-5 h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-[1.5]"
                style={{ background: item.accent }}
                aria-hidden="true"
              />
              <h3 className="text-base font-bold text-[#1E293B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#64748B]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
