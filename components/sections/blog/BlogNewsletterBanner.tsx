/**
 * BlogNewsletterBanner.tsx
 * Full-width mid-page newsletter CTA — breaks the grid rhythm visually.
 */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BlogNewsletterBanner() {
  const [email, setEmail] = useState('');
  const [done, setDone]   = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-full my-6 overflow-hidden rounded-[28px]"
      style={{ background: 'linear-gradient(135deg,#0D1B2A,#0B3C5D)', boxShadow: '0 12px 40px rgba(11,60,93,.18)' }}>
      <div className="px-7 py-10 md:flex md:items-center md:justify-between md:px-12">
        <div className="mb-6 md:mb-0">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#27AE60]">Free weekly newsletter</p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-white md:text-3xl">
            One study insight every Tuesday.
          </h3>
          <p className="mt-2 text-sm text-white/70">No fluff. Written by IIT-educated faculty. 3,400+ subscribers.</p>
        </div>
        {done ? (
          <div className="rounded-[18px] bg-white/10 px-8 py-4 text-center">
            <p className="font-bold text-[#27AE60]">✓ You're subscribed!</p>
            <p className="mt-1 text-xs text-white/60">See you Tuesday.</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); if(email) setDone(true); }}
            className="flex flex-col gap-3 md:flex-row md:items-center">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/40 md:w-64"/>
            <button type="submit"
              className="h-12 rounded-full bg-[#F39C12] px-6 text-sm font-bold text-white transition-all hover:scale-[1.03]"
              style={{ boxShadow: '0 6px 20px rgba(243,156,18,.35)' }}>
              Subscribe free →
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}
