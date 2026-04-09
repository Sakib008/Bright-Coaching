/**
 * CTASection.tsx
 * Closing CTA with dark rounded container, animated button + pulsing ring.
 * Semantic: section > div (visual container).
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { INSTITUTE_META } from '@/lib/aboutData';

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-16 md:py-20"
      style={{ background: '#EEF4F8' }}
    >
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px]"
          style={{
            background: 'linear-gradient(135deg,#0D1B2A 0%,#082D45 55%,#0B3C5D 100%)',
            boxShadow: '0 24px 80px rgba(11,60,93,0.28)',
          }}
        >
          {/* Background blobs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(255,255,255,0.04)' }} aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-56 w-56 rounded-full blur-3xl" style={{ background: 'rgba(39,174,96,0.08)' }} aria-hidden="true" />

          <div className="relative px-7 py-14 text-center md:px-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#27AE60]" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90">
                Admissions open · 2026–27 batches filling fast
              </span>
            </motion.div>

            <h2
              id="cta-heading"
              className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Join {INSTITUTE_META.name} today.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Book a free 30-minute counselling session. We'll assess your goal, suggest the right batch, and give you one free demo class — no payment required.
            </p>

            {/* Checklist */}
            <ul className="mx-auto mt-7 flex max-w-lg flex-col gap-2 text-left">
              {[
                'Free 30-min session with an academic advisor',
                'Batch recommendation based on your exact goal',
                'One free demo class before any payment',
              ].map((line) => (
                <li key={line} className="flex items-center gap-2.5 text-sm text-white/80">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: 'rgba(39,174,96,0.25)', color: '#27AE60' }}>✓</span>
                  {line}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(243,156,18,0.5)', '0 0 0 16px rgba(243,156,18,0)', '0 0 0 0 rgba(243,156,18,0)'] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="rounded-full"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center gap-2 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all hover:scale-[1.04] hover:bg-[#D68910]"
                  style={{ boxShadow: '0 8px 28px rgba(243,156,18,0.35)' }}
                >
                  Book Free Counselling
                </Link>
              </motion.div>
              <Link
                href="/courses"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15"
              >
                Explore courses →
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/40">No obligation · Counselling is completely free · Response within 30 minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
