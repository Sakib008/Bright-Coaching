'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_DETAILS } from '@/lib/contactData';

export default function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive:true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y:80, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:80, opacity:0 }}
          transition={{ duration:0.35, ease:[0.16,1,0.3,1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0B3C5D]/95 px-4 py-3 backdrop-blur-lg md:hidden"
          role="complementary" aria-label="Quick contact actions">
          <div className="flex gap-3">
            <a href={CONTACT_DETAILS.phoneTel}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white">
              📞 Call Now
            </a>
            <motion.a href="#form"
              animate={{ boxShadow:['0 0 0 0 rgba(243,156,18,0.5)','0 0 0 10px rgba(243,156,18,0)','0 0 0 0 rgba(243,156,18,0)'] }}
              transition={{ duration:2, repeat:Infinity }}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#F39C12] text-sm font-bold text-white"
              style={{ boxShadow:'0 6px 20px rgba(243,156,18,0.35)' }}>
              Book Free Demo →
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
