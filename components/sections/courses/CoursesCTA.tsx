/**
 * CoursesCTA.tsx
 *
 * Purpose  : High-conversion CTA block — primary action = "Book Free Demo Class".
 * Design   : Dark rounded container, pulsing button, contact chips.
 * Reuses   : Container (layout), Button (ui), pulseRing motion variant.
 */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { sectionReveal, viewport, pulseRing } from '@/lib/motion';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

const TRUST_POINTS = [
  'Free 30-minute counselling session',
  'Batch recommendation based on your goal',
  'One demo class before any payment',
];

export default function CoursesCTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-[#EEF4F8] py-16 md:py-20"
    >
      <Container>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-[32px]"
          style={{
            background: 'linear-gradient(135deg, #0D1B2A 0%, #082D45 55%, #0B3C5D 100%)',
          }}
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-[#2ECC71]/08 blur-3xl" aria-hidden="true" />

          <div className="relative px-6 py-14 md:px-12 md:py-20">
            <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">

              {/* ── Left: Text + CTA ────────────────── */}
              <div>
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#2ECC71] shadow-[0_0_8px_#2ECC71]" />
                  <span className="text-sm font-semibold text-[#2ECC71]">
                    Admissions open · Limited seats per batch
                  </span>
                </div>

                <h2
                  id="cta-heading"
                  className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
                >
                  Start with a free counselling session. Find the right batch in 30 minutes.
                </h2>

                <p className="mt-5 max-w-lg text-base leading-8 text-blue-200">
                  Our academic team will assess your goal, class, and preparation level —
                  and recommend the exact JEE, NEET, CUET, or school coaching batch for you.
                </p>

                {/* Trust checklist */}
                <ul className="mt-6 flex flex-col gap-2" role="list">
                  {TRUST_POINTS.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-blue-200">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2ECC71]/20 text-[#2ECC71] text-xs">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Pulse CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <motion.div {...pulseRing} className="inline-flex rounded-full">
                    <Link
                      href="tel:+919876543210"
                      className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#D68910]"
                      style={{ boxShadow: '0 8px 24px rgba(243,156,18,0.30)' }}
                      aria-label="Call to book free demo class"
                    >
                      <Phone size={18} aria-hidden="true" />
                      Book Free Demo Class
                    </Link>
                  </motion.div>

                  <Link
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/18"
                  >
                    <MessageSquare size={15} aria-hidden="true" />
                    WhatsApp Us
                  </Link>
                </div>

                <p className="mt-4 text-xs text-blue-400">
                  No obligation · No payment required for counselling
                </p>
              </div>

              {/* ── Right: Action cards ──────────────── */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Calendar,
                    title: 'Book Counselling',
                    sub:   'Free 30-min session with academic advisor',
                    href:  'tel:+919876543210',
                    cta:   'Call now',
                  },
                  {
                    icon: MessageSquare,
                    title: 'WhatsApp Enquiry',
                    sub:   'Quick response within 30 minutes',
                    href:  'https://wa.me/919876543210',
                    cta:   'Chat now',
                  },
                  {
                    icon: Phone,
                    title: 'Visit Centre',
                    sub:   '12-B, Connaught Place, New Delhi',
                    href:  '#',
                    cta:   'Get directions',
                  },
                ].map(({ icon: Icon, title, sub, href, cta }) => (
                  <Link
                    key={title}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/08 p-5 transition-all hover:border-white/20 hover:bg-white/14"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#2ECC71]">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs text-blue-300">{sub}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-[#F39C12]">{cta} →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
