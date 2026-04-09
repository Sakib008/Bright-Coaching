/**
 * ResultsCarousel.tsx
 * Horizontal scroll-snap carousel of topper cards.
 * Auto-advances every 3.5s, pauses on hover.
 */
'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { RESULTS } from '@/lib/jeeData';

export default function ResultsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (pauseRef.current || !trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      const next = scrollLeft + 296;
      trackRef.current.scrollTo({ left: next >= scrollWidth - clientWidth ? 0 : next, behavior: 'smooth' });
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section aria-labelledby="results-h" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">2025–26 Toppers</p>
            <h2 id="results-h" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
              IIT selections — verified, not estimated.
            </h2>
            <p className="mt-3 text-base text-[#64748B]">Every rank shown here is a real student who studied at Bright Minds.</p>
          </motion.div>
          {/* Arrows */}
          <div className="hidden gap-2 md:flex">
            <button onClick={() => trackRef.current?.scrollBy({ left: -296, behavior: 'smooth' })}
              aria-label="Previous result"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0B3C5D] transition-all hover:border-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white">←</button>
            <button onClick={() => trackRef.current?.scrollBy({ left: 296, behavior: 'smooth' })}
              aria-label="Next result"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0B3C5D] transition-all hover:border-[#0B3C5D] hover:bg-[#0B3C5D] hover:text-white">→</button>
          </div>
        </div>

        {/* Track */}
        <div ref={trackRef}
          onMouseEnter={() => { pauseRef.current = true; }}
          onMouseLeave={() => { pauseRef.current = false; }}
          className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
          role="list" aria-label="JEE toppers">
          {RESULTS.map((r, i) => (
            <motion.article key={r.id} role="listitem"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="w-[272px] shrink-0 overflow-hidden rounded-[26px] border border-slate-200/70 bg-white"
              style={{ scrollSnapAlign: 'start', boxShadow: '0 4px 16px rgba(11,60,93,0.06)' }}>
              {/* Avatar header */}
              <div className="flex h-36 items-center justify-center text-5xl font-bold text-white"
                style={{ background: `linear-gradient(135deg,${r.color}dd,${r.color}88)` }}
                aria-hidden="true">{r.initials}</div>
              <div className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ background: r.color }}>{r.score}</span>
                  <span className="text-xs text-[#94A3B8]">{r.year}</span>
                </div>
                <p className="text-2xl font-bold" style={{ color: r.color }}>{r.rank}</p>
                <p className="mt-1 text-base font-bold text-[#1E293B]">{r.name}</p>
                <p className="mt-1 text-sm text-[#64748B]">{r.college} — {r.branch}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
