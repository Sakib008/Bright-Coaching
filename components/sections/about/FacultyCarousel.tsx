/**
 * FacultyCarousel.tsx
 * Native CSS scroll-snap carousel — no JS library.
 * Cards pause on hover via CSS; overlay detail reveals on hover.
 * Uses the shared Carousel component when available, falls back to native scroll.
 */
'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FACULTY, type FacultyMember } from '@/lib/aboutData';
import Image from 'next/image';


function FacultyCard({ f }: { f: FacultyMember }) {
  return (
    <article
      className="group relative w-[260px] shrink-0 overflow-hidden rounded-[24px] border border-slate-200/70 bg-white"
      style={{ boxShadow: '0 4px 16px rgba(11,60,93,0.06)' }}
    >
      {/* Avatar */}
      <Image
        src={f.img}
        alt={f.name}
        width={520}
        height={520}
        className="h-52 w-full items-center justify-center text-4xl font-bold text-white transition-transform duration-500 group-hover:scale-[1.04]"  
        loading="lazy"
      />

      {/* Base info */}
      <div className="p-5">
        <p className="text-base font-bold text-[#1E293B]">{f.name}</p>
        <p className="mt-0.5 text-sm font-semibold" style={{ color: f.color }}>{f.subject}</p>
        <p className="mt-1 text-xs text-[#94A3B8]">{f.qualification}</p>
        <p className="mt-1 text-xs font-semibold text-[#64748B]">{f.experience} experience</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end rounded-[24px] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top,${f.color}f0 0%,${f.color}99 50%,transparent 100%)` }}>
        <div>
          <p className="text-sm font-bold text-white">{f.name}</p>
          <p className="mt-1 text-xs leading-5 text-white/80">{f.highlight}</p>
        </div>
      </div>
    </article>
  );
}

export default function FacultyCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="faculty-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        {/* Header row */}
        <div className="mb-10 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">Our Faculty</p>
            <h2 id="faculty-heading" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
              Experienced faculty students can trust.
            </h2>
            <p className="mt-3 max-w-lg text-base text-[#64748B]">
              Each member joined because they genuinely care about student outcomes — not just curriculum delivery.
            </p>
          </motion.div>
          {/* Arrows */}
          <div className="hidden items-center gap-2 md:flex" aria-label="Carousel navigation">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous faculty member"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C5D] transition-all hover:border-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white"
            >←</button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next faculty member"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C5D] transition-all hover:border-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white"
            >→</button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
          role="list"
          aria-label="Faculty members"
        >
          {FACULTY.map((f, i) => (
            <motion.div
              key={f.id}
              role="listitem"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{ scrollSnapAlign: 'start' }}
            >
              <FacultyCard f={f} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
