// lib/motion.ts — Bright Minds shared motion system

import type { Variants } from 'framer-motion';

export const ease = [0.16, 1, 0.3, 1] as const;

// ── Scroll reveal ─────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease } },
};

export const sectionReveal: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

// ── Stagger containers ────────────────────────────────────────
export const containerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

export const containerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
};

export const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease } },
};

// ── Hero entry helpers ────────────────────────────────────────
export const heroHidden = { opacity: 0, y: 24 };
export const heroItem = (delay: number) => ({
  opacity: 1, y: 0,
  transition: { duration: 0.55, delay: delay * 0.12, ease },
});

// ── Viewport presets ──────────────────────────────────────────
export const viewport      = { once: true, amount: 0.15 } as const;
export const viewportLazy  = { once: true, amount: 0.08 } as const;
export const viewportEarly = { once: true, amount: 0.05 } as const;

// ── Hover preset ──────────────────────────────────────────────
export const hoverLift = {
  whileHover: { scale: 1.025, y: -4, boxShadow: '0 16px 48px rgba(11,60,93,0.14)' },
  transition: { duration: 0.28, ease },
};

// ── Pulse ring (for primary CTA buttons) ─────────────────────
export const pulseRing = {
  animate: {
    boxShadow: [
      '0 0 0 0px rgba(243,156,18,0.40)',
      '0 0 0 10px rgba(243,156,18,0.00)',
    ],
    transition: { duration: 1.4, repeat: Infinity, ease: 'easeOut' as const },
  },
};
