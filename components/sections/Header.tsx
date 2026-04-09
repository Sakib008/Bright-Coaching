'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const NAV = [
  { label: 'Home',      href: '/'      },
  { label: 'Courses',      href: '/courses'      },
  { label: 'Why Us',       href: '/about'       },
  { label: 'Results',      href: '/results'      },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact',          href: '/contact'          },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 px-3 pt-3 md:px-5"
      >
        <div
          className={[
            'mx-auto flex max-w-[1200px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-400 md:px-6',
            scrolled
              ? 'bg-white/90 shadow-[0_4px_24px_rgba(11,60,93,0.10)] backdrop-blur-xl'
              : 'bg-white/75 backdrop-blur-lg border border-white/60',
          ].join(' ')}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Bright Minds home">
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#0B3C5D]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3L2 8l10 5 10-5-10-5Z" fill="white"/>
                <path d="M2 16l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity=".55"/>
              </svg>
            </div>
            <span className="font-heading text-lg font-bold text-[#0B3C5D]">Bright Minds</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-[#64748B] transition-all hover:bg-[#EEF4F8] hover:text-[#0B3C5D]"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#0B3C5D] transition-colors hover:text-[#082D45]"
            >
              <Phone size={14} /> +91 98765 43210
            </a>
            <Link
              href="#cta"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#0B3C5D] px-5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[#1A5276] hover:shadow-[0_8px_20px_rgba(11,60,93,0.22)]"
            >
              Book Counselling
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4F8] text-[#0B3C5D] lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0  }}
            exit={  { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-[4.5rem] z-40 rounded-[24px] border border-white/60 bg-white/95 p-5 shadow-[0_12px_40px_rgba(11,60,93,0.14)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[14px] px-4 py-3 text-sm font-medium text-[#1E293B] transition-colors hover:bg-[#EEF4F8] hover:text-[#0B3C5D]"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 rounded-[14px] px-4 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-[#EEF4F8]"
              >
                <Phone size={14} /> +91 98765 43210
              </a>
              <Link
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="flex h-12 items-center justify-center rounded-full bg-[#0B3C5D] text-sm font-semibold text-white"
              >
                Book Free Counselling
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
