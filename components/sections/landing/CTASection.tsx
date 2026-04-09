/**
 * CTASection.tsx
 * Final conversion section. Heading, sub, and both CTA labels come from CTAData.
 */
'use client';

import { motion } from 'framer-motion';
import Link       from 'next/link';
import type { CTAData } from '@/types/exam';

type Props = { data: CTAData };

export default function CTASection({ data }: Props) {
  const { heading, sub, primary, secondary } = data;

  return (
    <section className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-[1160px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="rounded-[32px] bg-[#0B3C5D] px-6 py-12 text-center text-white md:px-10 md:py-16"
          style={{ boxShadow: '0 16px 60px rgba(11,60,93,0.25)' }}>

          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold text-white md:text-[2.4rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">{sub}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03, boxShadow: '0 12px 36px rgba(255,255,255,0.15)' }}>
              <Link href="/contact"
                className="inline-flex h-13 items-center rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0B3C5D]">
                {primary}
              </Link>
            </motion.div>
            <Link href="tel:+919876543210"
              className="inline-flex h-13 items-center rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/15">
              {secondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
