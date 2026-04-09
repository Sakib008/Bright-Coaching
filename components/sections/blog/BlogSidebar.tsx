/**
 * BlogSidebar.tsx
 * Sticky right sidebar — newsletter signup + popular posts + internal links.
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { POSTS, NEWSLETTER } from '@/lib/blogData';

export default function BlogSidebar() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const popular = POSTS.slice(0, 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <aside className="flex flex-col gap-6">
      {/* Newsletter */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="rounded-[26px] border border-slate-200/70 bg-[#0B3C5D] p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/60">Weekly newsletter</p>
        <h3 className="mt-2 font-serif text-xl font-bold leading-tight">{NEWSLETTER.heading}</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">{NEWSLETTER.subheading}</p>
        {submitted ? (
          <div className="mt-5 rounded-[16px] bg-white/10 p-4 text-center">
            <p className="text-sm font-bold text-[#27AE60]">✓ Subscribed!</p>
            <p className="mt-1 text-xs text-white/70">First issue arrives this Tuesday.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder={NEWSLETTER.placeholder} aria-label="Email address for newsletter"
              className="h-11 rounded-[14px] border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"/>
            <button type="submit"
              className="h-11 rounded-[14px] bg-[#F39C12] text-sm font-bold text-white transition-all hover:scale-[1.02]">
              {NEWSLETTER.cta}
            </button>
          </form>
        )}
      </motion.div>

      {/* Popular posts */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-[26px] border border-slate-200/70 bg-white p-6">
        <h3 className="mb-5 font-serif text-base font-bold text-[#1E293B]">Popular this month</h3>
        <ol className="flex flex-col gap-4">
          {popular.map((p, i) => (
            <li key={p.id}>
              <Link href={`/blog/${p.slug}`}
                className="group flex gap-3 items-start text-sm text-[#1E293B] hover:text-[#0B3C5D]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: p.accentColor }}>{i + 1}</span>
                <span className="leading-snug group-hover:underline">{p.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Quick links */}
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-[26px] border border-slate-200/70 bg-[#F8FAFC] p-6">
        <h3 className="mb-4 font-serif text-base font-bold text-[#1E293B]">Also at Bright Minds</h3>
        {[
          { label: 'JEE Coaching Programme', href: '/jee' },
          { label: 'NEET Coaching Programme', href: '/neet' },
          { label: 'CUET Preparation',        href: '/cuet' },
          { label: 'About Us',                href: '/about' },
          { label: 'Book Free Demo Class',     href: '/contact' },
        ].map(l => (
          <Link key={l.href} href={l.href}
            className="flex items-center justify-between border-b border-slate-100 py-2.5 text-sm text-[#64748B] last:border-0 hover:text-[#0B3C5D]">
            {l.label}
            <span className="text-xs">→</span>
          </Link>
        ))}
      </motion.div>
    </aside>
  );
}
