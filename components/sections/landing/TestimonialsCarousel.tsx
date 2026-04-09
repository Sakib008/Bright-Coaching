/**
 * TestimonialsCarousel.tsx
 * Horizontal scroll. Renders Testimonial[] via map().
 * Optional score badge shown only when score is provided in data.
 */
'use client';

import { motion } from 'framer-motion';
import type { TestimonialsData } from '@/types/exam';

type Props = { data: TestimonialsData };

export default function TestimonialsCarousel({ data }: Props) {
  const { eyebrow, heading, items } = data;

  return (
    <section className="bg-white py-14 md:py-18">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">{heading}</h2>
        </motion.div>

        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max gap-5 pb-2">
            {items.map((item, i) => (
              <motion.article key={`${item.name}-${i}`}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -3 }}
                className="w-[320px] snap-start rounded-[26px] border border-slate-200/70 bg-slate-50 p-6"
                style={{ boxShadow: '0 2px 12px rgba(11,60,93,0.05)' }}>

                {/* Quote */}
                <p className="text-base leading-8 text-[#1E293B]">"{item.quote}"</p>

                {/* Author */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#1E293B]">{item.name}</p>
                    <p className="mt-0.5 text-xs text-[#94A3B8]">{item.role}</p>
                  </div>
                  {/* Optional score badge — only renders if data has score */}
                  {item.score && (
                    <span className="rounded-full bg-[#0B3C5D]/10 px-3 py-1 text-xs font-bold text-[#0B3C5D]">
                      {item.score}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
