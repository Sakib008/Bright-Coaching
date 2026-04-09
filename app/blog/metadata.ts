// app/blog/metadata.ts
// Import in layout.tsx or a separate server component if needed.
import type { Metadata } from 'next';
import { BLOG_META } from '@/lib/blogData';

export const metadata: Metadata = {
  title:       BLOG_META.title,
  description: BLOG_META.description,
  alternates:  { canonical: BLOG_META.canonical },
  openGraph: {
    title:       BLOG_META.title,
    description: BLOG_META.description,
    url:         BLOG_META.canonical,
    type:        'website',
  },
};
