/**
 * BlogHero.tsx
 * Clean editorial hero — large headline, category filter tabs, search bar.
 * 'use client' for search state + active category.
 */
'use client';

import { motion } from 'framer-motion';
import { CATEGORIES } from '@/lib/blogData';

type Props = {
  activeCategory: string;
  onCategory:     (id: string) => void;
  searchQuery:    string;
  onSearch:       (q: string) => void;
};

export default function BlogHero({ activeCategory, onCategory, searchQuery, onSearch }: Props) {
  return (
    <section aria-labelledby="blog-h1" className="bg-white px-4 pt-8 pb-0 md:px-8">
      <div className="mx-auto max-w-[1160px]">
        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">
            The Bright Minds Learning Blog
          </p>
          <h1 id="blog-h1"
            className="max-w-3xl font-serif text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
            JEE, NEET & CUET prep — written by faculty who teach it daily.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#64748B]">
            Evidence-based articles, study strategies, and syllabus guides from the IIT-educated faculty at Bright Minds Coaching Institute.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex max-w-lg items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 shadow-sm">
          <svg className="h-4 w-4 shrink-0 text-[#94A3B8]" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search articles — JEE, NEET, study tips…"
            aria-label="Search blog articles"
            className="flex-1 bg-transparent text-sm text-[#1E293B] outline-none placeholder:text-[#94A3B8]"
          />
        </motion.div>

        {/* Category pills */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-wrap gap-2 border-b border-slate-100 pb-0"
          role="tablist" aria-label="Filter by category">
          {CATEGORIES.map(cat => (
            <button key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => onCategory(cat.id)}
              className={[
                'relative mb-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-250',
                activeCategory === cat.id
                  ? 'text-white'
                  : 'text-[#64748B] hover:text-[#1E293B]',
              ].join(' ')}
              style={activeCategory === cat.id
                ? { background: cat.color }
                : { background: 'transparent' }}>
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
