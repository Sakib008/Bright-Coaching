/**
 * TestimonialsCarousel.tsx
 * Scroll-snap carousel, auto-slides, pauses on hover/focus.
 */
'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TESTIMONIALS } from '@/lib/jeeData';

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      if (pauseRef.current || !trackRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      const next = scrollLeft + 340;
      trackRef.current.scrollTo({ left: next >= scrollWidth - clientWidth ? 0 : next, behavior: 'smooth' });
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section aria-labelledby="testi-h" className="py-16 md:py-20" style={{ background: '#F1F5F9' }}>
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">What Students Say</p>
          <h2 id="testi-h" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
            Real experiences, not curated praise.
          </h2>
          <p className="mt-3 text-base text-[#64748B]">Hover to pause. Every review is verified by the student's selection record.</p>
        </motion.div>

        <div ref={trackRef}
          onMouseEnter={() => { pauseRef.current = true; }}
          onMouseLeave={() => { pauseRef.current = false; }}
          onFocus={() => { pauseRef.current = true; }}
          onBlur={() => { pauseRef.current = false; }}
          className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
          role="list" aria-label="Student testimonials">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote key={t.id} role="listitem"
              initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="w-[330px] shrink-0 rounded-[26px] border border-slate-200/70 bg-white p-7"
              style={{ scrollSnapAlign: 'start', boxShadow: '0 4px 16px rgba(11,60,93,0.05)' }}>
              <div className="mb-5 flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="h-4 w-4" viewBox="0 0 24 24" fill="#F39C12" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-7 text-[#1E293B]">"{t.text}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: t.color }} aria-hidden="true">{t.initials}</div>
                <div>
                  <p className="text-sm font-bold text-[#1E293B]">{t.name}</p>
                  <p className="text-xs text-[#94A3B8]">{t.role}</p>
                </div>
              </footer>
              <div className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ background: t.color }}>{t.result}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
