/**
 * FinalCTA.tsx
 * High-contrast closing section — "Start Your IIT Journey Today"
 * Internal links to NEET + CUET pages.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const RELATED = [
  { label: 'NEET Preparation', href: '/neet', desc: 'Medical entrance coaching' },
  { label: 'CUET Preparation', href: '/cuet', desc: 'Central University entrance' },
  { label: 'All Courses',      href: '/courses', desc: 'View full programme list'   },
];

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-h" className="py-16 md:py-20" style={{ background: '#EEF4F8' }}>
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        {/* Main CTA block */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px]"
          style={{ background: 'linear-gradient(135deg,#0D1B2A 0%,#082D45 55%,#0B3C5D 100%)', boxShadow: '0 24px 80px rgba(11,60,93,0.28)' }}>
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(255,255,255,0.04)' }} aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 right-0 h-60 w-60 rounded-full blur-3xl" style={{ background: 'rgba(39,174,96,0.08)' }} aria-hidden="true" />

          <div className="relative px-7 py-14 md:px-12 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              {/* Text */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#27AE60]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-white/90">JEE 2026–27 batches open now</span>
                </div>
                <h2 id="final-cta-h" className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                  Start your IIT journey today.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-white/70 md:text-lg">
                  Book a free 30-minute counselling session. Our academic team will assess your current level, recommend the right JEE batch, and walk you through a free demo class.
                </p>
                <ul className="mt-7 flex flex-col gap-2">
                  {['Free 30-min session with an IIT-educated counsellor','Personalised batch recommendation','One free demo class — no payment required'].map(l => (
                    <li key={l} className="flex items-center gap-2.5 text-sm text-white/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold" style={{ background: 'rgba(39,174,96,0.25)', color: '#27AE60' }}>✓</span>
                      {l}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.div animate={{ boxShadow: ['0 0 0 0 rgba(243,156,18,0.5)','0 0 0 16px rgba(243,156,18,0)','0 0 0 0 rgba(243,156,18,0)'] }}
                    transition={{ duration: 1.8, repeat: Infinity }} className="rounded-full">
                    <Link href="/contact?source=jee-final"
                      className="inline-flex h-14 items-center gap-2 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all hover:scale-[1.04]"
                      style={{ boxShadow: '0 8px 28px rgba(243,156,18,0.35)' }}>
                      Book Free Counselling
                    </Link>
                  </motion.div>
                  <Link href="/courses/jee"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/15">
                    Course details →
                  </Link>
                </div>
                <p className="mt-4 text-xs text-white/40">No obligation · Completely free · Response within 30 minutes</p>
              </div>

              {/* Related courses */}
              <div className="flex flex-col gap-4">
                <p className="text-sm font-bold text-white/70">Also preparing for</p>
                {RELATED.map(r => (
                  <Link key={r.href} href={r.href}
                    className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/08 p-5 no-underline transition-all hover:border-white/20 hover:bg-white/12"
                    style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div>
                      <p className="text-sm font-bold text-white">{r.label}</p>
                      <p className="text-xs text-white/60">{r.desc}</p>
                    </div>
                    <span className="text-sm text-[#F39C12]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
