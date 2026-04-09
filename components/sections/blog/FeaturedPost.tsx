/**
 * FeaturedPost.tsx
 * Full-width editorial card for the most recent featured article.
 * Image left, content right. Hover zoom on image.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blogData';
import Image from 'next/image';

export default function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-[30px] border border-slate-200/70 bg-white shadow-[0_4px_24px_rgba(11,60,93,0.07)]"
      style={{ willChange: 'transform' }}>
      <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-[1fr_1fr]">
        {/* Image / gradient panel */}
      
        <div className="relative min-h-[260px] overflow-hidden md:min-h-[380px]">
          <motion.div
            className="absolute inset-0"
            style={{ background: post.gradient }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            {/* Decorative initials */}
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
          src={post.img}
          alt={post.author}
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          />
            </div>
            {/* Overlay label */}
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                Featured Article
              </span>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ background: post.accentColor }}>{post.tag}</span>
            <span className="text-xs text-[#94A3B8]">{post.readTime}</span>
          </div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#1E293B] transition-colors group-hover:text-[#0B3C5D] md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#64748B]">{post.excerpt}</p>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: post.accentColor }}>{post.initials}</div>
              <div>
                <p className="text-sm font-bold text-[#1E293B]">{post.author}</p>
                <p className="text-xs text-[#94A3B8]">{post.date}</p>
              </div>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all group-hover:translate-x-1"
              style={{ background: `${post.accentColor}15`, color: post.accentColor }}>→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
