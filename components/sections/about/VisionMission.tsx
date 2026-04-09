/**
 * VisionMission.tsx
 * Two-column bento grid — Vision, Mission, and two core values.
 * First two cards larger; values grid below.
 */
'use client';

import { motion } from 'framer-motion';
import { VISION_MISSION } from '@/lib/aboutData';

// Inline SVG icon map — no icon library dependency
const ICONS: Record<string, React.ReactNode> = {
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  "bar-chart": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
};

const CARD_STYLES: Record<string, { bg: string; text: string; sub: string; icon: string }> = {
  vision:    { bg: '#0B3C5D',    text: 'text-white',         sub: 'text-white/70',    icon: 'text-white' },
  mission:   { bg: '#27AE60',    text: 'text-white',         sub: 'text-white/70',    icon: 'text-white' },
  integrity: { bg: '#F8FAFC',    text: 'text-[#1E293B]',     sub: 'text-[#64748B]',   icon: 'text-[#0B3C5D]' },
  data:      { bg: '#F8FAFC',    text: 'text-[#1E293B]',     sub: 'text-[#64748B]',   icon: 'text-[#0B3C5D]' },
};

export default function VisionMission() {
  return (
    <section aria-labelledby="vm-heading" className="py-16 md:py-20" style={{ background: '#F1F5F9' }}>
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">Vision & Mission</p>
          <h2 id="vm-heading" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
            What we stand for.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VISION_MISSION.map((item, i) => {
            const s = CARD_STYLES[item.id] ?? CARD_STYLES.integrity;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.025 }}
                className="rounded-[26px] border border-transparent p-7 md:p-8"
                style={{
                  background: s.bg,
                  boxShadow: item.type !== 'value'
                    ? '0 12px 40px rgba(11,60,93,0.18)'
                    : '0 4px 16px rgba(11,60,93,0.06)',
                  borderColor: item.type === 'value' ? 'rgba(203,213,225,0.7)' : 'transparent',
                }}
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/15 ${s.icon}`}>
                  {ICONS[item.icon]}
                </div>
                <h3 className={`font-serif text-xl font-bold ${s.text}`}>{item.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${s.sub}`}>{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
