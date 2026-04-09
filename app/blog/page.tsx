/**
 * app/blog/page.tsx
 * Blog listing page — orchestrates hero, featured, grid, sidebar.
 * Client component for filtering/search interactivity.
 */
'use client';

import { useState, useMemo } from 'react';
import { POSTS } from '@/lib/blogData';
import BlogHero             from '@/components/sections/blog/BlogHero';
import FeaturedPost         from '@/components/sections/blog/FeaturedPost';
import BlogGrid             from '@/components/sections/blog/BlogGrid';
import BlogSidebar          from '@/components/sections/blog/BlogSidebar';
import BlogNewsletterBanner from '@/components/sections/blog/BlogNewsletterBanner';
import { Footer, Header } from '@/components/sections';

export default function BlogPage() {
  const [activeCategory, setCategory] = useState('all');
  const [searchQuery,    setSearch]   = useState('');

  const featured = POSTS.find(p => p.featured)!;

  const filtered = useMemo(() => {
    return POSTS.filter(p => !p.featured).filter(p => {
      const matchCat    = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = !searchQuery || [p.title, p.excerpt, p.tag, p.author]
        .join(' ').toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Insert newsletter banner after 3rd card
  const firstSlice  = filtered.slice(0, 3);
  const secondSlice = filtered.slice(3);

  return (
    <>
    <Header/>
    <main id="main-content">
  
      {/* Hero + filters */}
      <BlogHero
        activeCategory={activeCategory}
        onCategory={setCategory}
        searchQuery={searchQuery}
        onSearch={setSearch}
      />

      <div className="mx-auto max-w-[1160px] px-4 py-10 md:px-8">
        {/* Featured post — only shown when no active filter / search */}
        {activeCategory === 'all' && !searchQuery && (
          <div className="mb-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">
              Editor's Pick
            </p>
            <FeaturedPost post={featured} />
          </div>
        )}

        {/* Main grid + sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Left — grid */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">
              {activeCategory === 'all' && !searchQuery
                ? 'Latest Articles'
                : `${filtered.length} article${filtered.length !== 1 ? 's' : ''} found`}
            </p>
            <BlogGrid posts={firstSlice} />
            {secondSlice.length > 0 && (
              <>
                <BlogNewsletterBanner />
                <BlogGrid posts={secondSlice} />
              </>
            )}
          </div>

          {/* Right — sticky sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}
