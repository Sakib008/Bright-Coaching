/**
 * StickyCTA.tsx
 * Fixed bottom-right CTA — appears after 600px scroll.
 * Pulse animation on button. 'use client' for scroll listener.
 */
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            animate={{ boxShadow: [
              '0 0 0 0 rgba(243,156,18,0.5)',
              '0 0 0 14px rgba(243,156,18,0)',
              '0 0 0 0 rgba(243,156,18,0)',
            ]}}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full"
          >
            <Link
              href="/contact?source=jee-sticky"
              className="flex h-14 items-center gap-2 rounded-full bg-[#F39C12] px-6 text-sm font-bold text-white transition-all hover:scale-[1.04] hover:bg-[#D68910]"
              style={{ boxShadow: '0 8px 24px rgba(243,156,18,0.40)' }}
            >
              📞 Book Free Demo
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
