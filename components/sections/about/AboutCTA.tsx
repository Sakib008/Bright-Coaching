'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { sectionReveal, viewport, pulseRing } from '@/lib/motion';
import { Phone } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="bg-[#EEF4F8] py-16 md:py-20">
      <Container>
        <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewport}
          className="relative overflow-hidden rounded-[32px] text-center"
          style={{ background: 'linear-gradient(135deg,#0D1B2A 0%,#082D45 55%,#0B3C5D 100%)' }}>
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="relative px-6 py-14 md:px-10 md:py-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#2ECC71] shadow-[0_0_8px_#2ECC71]" />
              <span className="text-sm font-semibold text-[#2ECC71]">Admissions open · 2026–27 batches</span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              Come meet us before you decide anything.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-blue-200">
              A free 30-minute counselling session is the best way to understand whether Bright Minds is the right fit for your child's goal and preparation stage.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.div {...pulseRing}>
                <Link href="tel:+919876543210"
                  className="inline-flex h-14 items-center gap-3 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all hover:scale-[1.03]"
                  style={{ boxShadow: '0 8px 24px rgba(243,156,18,0.30)' }}>
                  <Phone size={18} aria-hidden="true" /> Book Free Counselling
                </Link>
              </motion.div>
              <Link href="/courses"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition-all hover:bg-white/18">
                Explore courses →
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
