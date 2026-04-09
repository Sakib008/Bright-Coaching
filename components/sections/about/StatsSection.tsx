/**
 * StatsSection.tsx
 * Bento-grid stats with count-up animation triggered on viewport entry.
 * Count-up uses requestAnimationFrame — no library dependency.
 */
'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { STATS, type Stat } from '@/lib/aboutData';

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const start    = performance.now();
    const raf      = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, y: -4 }}
      className="flex flex-col justify-between rounded-[24px] border border-slate-200/70 bg-white p-6  md:p-8"
      style={{ boxShadow: '0 4px 20px rgba(11,60,93,0.05)' }}
    >
      <p className="text-4xl font-bold tracking-tight text-[#0B3C5D] md:text-5xl">
        <CountUp target={stat.value} suffix={stat.suffix} active={active} />
      </p>
      <div className="mt-4">
        <p className="text-sm font-bold text-[#1E293B]">{stat.label}</p>
        <p className="mt-0.5 text-xs text-[#94A3B8]">{stat.sub}</p>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="py-16 md:py-20"
      style={{ background: '#EEF4F8' }}
    >
      <div className="mx-auto max-w-[1160px] px-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">By the Numbers</p>
          <h2 id="stats-heading" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
            Fifteen years of measurable outcomes.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
