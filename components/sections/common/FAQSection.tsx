/**
 * FAQSection.tsx — Reusable across all pages
 *
 * Props    : faqs[]     — Pass any FAQ array from any data file.
 *            heading    — Section h2 text (default provided).
 *            bgColor    — Tailwind bg class override.
 * SEO      : Renders JSON-LD FAQPage schema for rich results.
 * A11y     : details/summary with keyboard support, aria-expanded.
 * Reuses   : Container (layout).
 * Animated : AnimatePresence height collapse per item.
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import { Plus, Minus } from 'lucide-react';
import type { FAQ } from '@/lib/coursesData';

type Props = {
  faqs:     FAQ[];
  heading?: string;
  eyebrow?: string;
  bgColor?: string;
};

function FAQItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq:      FAQ;
  open:     boolean;
  onToggle: () => void;
  index:    number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'overflow-hidden rounded-[20px] border border-slate-200/70 bg-white transition-shadow',
        open ? 'shadow-[0_4px_20px_rgba(11,60,93,0.08)]' : '',
      ].join(' ')}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-[#1E293B]">{faq.q}</span>
        <span
          className={[
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300',
            open ? 'bg-[#0B3C5D] text-white' : 'bg-[#EEF4F8] text-[#0B3C5D]',
          ].join(' ')}
          aria-hidden="true"
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-7 text-[#64748B]">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection({
  faqs,
  heading = 'Frequently asked questions',
  eyebrow = 'FAQ',
  bgColor = 'bg-white',
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`${bgColor} py-16 md:py-20`}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ── Left sticky heading ─────────────────── */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">
                {eyebrow}
              </p>
              <h2
                id="faq-heading"
                className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl"
              >
                {heading}
              </h2>
              <p className="mt-4 text-base text-[#64748B]">
                Still have questions? Call us directly — we're available 9 AM to 7 PM.
              </p>
              <a
                href="tel:+919876543210"
                className="mt-5 inline-flex h-12 items-center justify-center rounded-full border border-[#0B3C5D]/20 bg-white px-6 text-sm font-semibold text-[#0B3C5D] transition-all hover:scale-[1.03] hover:border-[#0B3C5D]/40 hover:shadow-[0_8px_20px_rgba(11,60,93,0.08)]"
              >
                Call us directly →
              </a>
            </motion.div>
          </div>

          {/* ── Right accordion ─────────────────────── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                faq={faq}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* ── JSON-LD FAQPage schema ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
    </section>
  );
}
