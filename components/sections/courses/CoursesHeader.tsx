/**
 * CoursesHeader.tsx
 *
 * Purpose : Page hero for /courses — breadcrumb, h1, subtext, animated background.
 * SEO     : Single h1 on page ("Explore Our Coaching Courses"), structured breadcrumb.
 * Reuses  : Container (layout), FadeIn/Reveal (motion).
 *
 * NO h1 anywhere else on the page. Only this file owns it.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { heroHidden, heroItem } from '@/lib/motion';
import { ChevronRight, GraduationCap } from 'lucide-react';

// Breadcrumb items — drives both visual and JSON-LD schema
const BREADCRUMBS = [
  { label: 'Home',    href: '/'        },
  { label: 'Courses', href: '/courses' },
];

export default function CoursesHeader() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="relative overflow-hidden bg-[#F8FAFC] pb-14 pt-8"
    >
      {/* ── Dot-grid background ──────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 hero-grid-bg opacity-70"
        aria-hidden="true"
      />

      {/* ── Gradient blobs ──────────────────────────── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-[rgba(11,60,93,0.055)] blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full bg-[rgba(46,204,113,0.06)] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[rgba(243,156,18,0.04)] blur-3xl" />
      </div>

      <Container className="relative">
        {/* ── Breadcrumb (schema-ready) ──────────────── */}
        <motion.nav
          initial={heroHidden}
          animate={heroItem(0)}
          aria-label="Breadcrumb"
          className="mb-6"
        >
          <ol
            className="flex flex-wrap items-center gap-1 text-sm text-[#94A3B8]"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {BREADCRUMBS.map((crumb, i) => (
              <li
                key={crumb.href}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {i > 0 && <ChevronRight size={13} aria-hidden="true" />}
                {i < BREADCRUMBS.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#0B3C5D]"
                    itemProp="item"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                ) : (
                  <span className="font-medium text-[#0B3C5D]" itemProp="name">
                    {crumb.label}
                  </span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* ── Main heading block ─────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={heroHidden}
              animate={heroItem(1)}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B3C5D]/15 bg-white px-4 py-2 shadow-[0_2px_8px_rgba(11,60,93,0.06)]"
            >
              <GraduationCap size={15} className="text-[#0B3C5D]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0B3C5D]">
                Class 9–12 · JEE · NEET · CUET
              </span>
            </motion.div>

            {/* h1 — only one per page */}
            <motion.h1
              id="courses-heading"
              initial={heroHidden}
              animate={heroItem(2)}
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-[#1E293B] md:text-5xl lg:text-[3.25rem]"
            >
              Explore Our{' '}
              <span className="text-[#0B3C5D]">Coaching Courses</span>
            </motion.h1>

            {/* SEO-rich subtext */}
            <motion.p
              initial={heroHidden}
              animate={heroItem(3)}
              className="mt-5 max-w-2xl text-base leading-8 text-[#64748B] md:text-lg"
            >
              Choose from structured programs for{' '}
              <strong className="font-semibold text-[#1E293B]">
                Class 9 &amp; 10 coaching
              </strong>
              ,{' '}
              <strong className="font-semibold text-[#1E293B]">Class 11 &amp; 12</strong>,{' '}
              <strong className="font-semibold text-[#1E293B]">JEE coaching</strong>,{' '}
              <strong className="font-semibold text-[#1E293B]">NEET coaching</strong>, and{' '}
              <strong className="font-semibold text-[#1E293B]">CUET coaching</strong> — all
              under one roof at our New Delhi centre.
            </motion.p>
          </div>

          {/* ── Quick-stat chips ────────────────────── */}
          <motion.div
            initial={heroHidden}
            animate={heroItem(4)}
            className="flex shrink-0 flex-wrap gap-3 lg:flex-col lg:items-end"
          >
            {[
              { value: '12,000+', label: 'Students taught'    },
              { value: '250+',    label: 'Selections in 2026' },
              { value: '100%',    label: 'Pass rate boards'   },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-[18px] border border-slate-200/70 bg-white px-5 py-3 text-center shadow-[0_2px_8px_rgba(11,60,93,0.05)]"
              >
                <p className="font-heading text-2xl font-bold text-[#0B3C5D]">{value}</p>
                <p className="mt-0.5 text-xs text-[#94A3B8]">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* ── JSON-LD BreadcrumbList ──────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: BREADCRUMBS.map((crumb, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: crumb.label,
              item: `https://brightminds.edu${crumb.href}`,
            })),
          }),
        }}
      />
    </section>
  );
}
