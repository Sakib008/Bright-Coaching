/**
 * BlogGrid.tsx
 * Responsive 3-column grid of post cards.
 * Staggered whileInView animation per card.
 * Empty state when no posts match filter/search.
 */
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { BlogPost } from '@/lib/blogData';
import Image from 'next/image';

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <div className="mb-4 text-5xl" aria-hidden="true">📭</div>
        <h3 className="font-serif text-xl font-bold text-[#1E293B]">No articles found</h3>
        <p className="mt-2 text-sm text-[#64748B]">Try a different category or clear your search.</p>
      </div>
    );
  }

  return (
    <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {posts.map((post, i) => (
          <motion.article key={post.id}
            layout
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(11,60,93,0.10)' }}
            className="group flex flex-col overflow-hidden rounded-[26px] border border-slate-200/70 bg-white"
            style={{ boxShadow: '0 2px 12px rgba(11,60,93,0.05)', willChange: 'transform' }}>
            <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col">
              {/* Gradient thumb */}
              <div className="relative h-44 overflow-hidden">
                <motion.div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]"
                  style={{ background: post.gradient }}>
                    <Image
          src={post.img}
          alt={post.author}
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          />
                </motion.div>
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs font-semibold" style={{ color: post.accentColor }}>
                  {post.readTime}
                </p>
                <h3 className="font-serif text-base font-bold leading-snug text-[#1E293B] transition-colors group-hover:text-[#0B3C5D] md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#64748B] line-clamp-3">{post.excerpt}</p>

                <div className="mt-auto flex items-center justify-between pt-5">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full text-[0.6rem] font-bold text-white"
                      style={{ background: post.accentColor }}>{post.initials}</div>
                    <div>
                      <p className="text-xs font-bold text-[#1E293B]">{post.author}</p>
                      <p className="text-[0.65rem] text-[#94A3B8]">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold transition-all group-hover:translate-x-1"
                    style={{ color: post.accentColor }}>Read →</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
