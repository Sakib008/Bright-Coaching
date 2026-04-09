"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Trophy, Star, BookOpen } from "lucide-react";
import { heroHidden, heroItem } from "@/lib/motion";
import Image from "next/image";

const STATS = [
  { icon: Users,    value: "12,000+", label: "Students taught"    },
  { icon: Trophy,   value: "250+",    label: "Selections in 2026" },
  { icon: Star,     value: "4.9/5",   label: "Google rating"      },
  { icon: BookOpen, value: "14 yrs",  label: "Established"        },
];

// Replace src values with your actual student/campus photos
const CAROUSEL_IMAGES = [
  { src: "https://images.pexels.com/photos/8617759/pexels-photo-8617759.jpeg", alt: "Students in classroom"  },
  { src: "https://images.pexels.com/photos/6683675/pexels-photo-6683675.jpeg", alt: "Student studying"       },
  { src: "https://images.pexels.com/photos/14025659/pexels-photo-14025659.jpeg", alt: "Books and learning"     },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=280&fit=crop", alt: "Group study session"    },
  { src: "https://images.pexels.com/photos/8500417/pexels-photo-8500417.jpeg", alt: "Classroom learning"     },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=280&fit=crop", alt: "Students at school"     },
];

export default function HeroSection() {
  const ref         = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  /* ── Seamless auto-scroll carousel ── */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let rafId: number;
    let pos = 0;
    const speed = 0.45; // px per frame – lower = slower

    const tick = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0; // reset at halfway = seamless loop
      el.scrollLeft = pos;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const pause  = () => cancelAnimationFrame(rafId);
    const resume = () => { rafId = requestAnimationFrame(tick); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause,  { passive: true });
    el.addEventListener("touchend",   resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend",   resume);
    };
  }, []);

  return (
    <section ref={ref} className="relative m-5 rounded-xl overflow-hidden bg-primary">

      {/* Subtle grid texture – parallax retained, blobs removed */}
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10 hero-grid-bg"
        aria-hidden="true"
      />

      {/* ══════════ Main content ══════════ */}
      <div className="mx-auto max-w-[1200px] px-4 pb-12 pt-12 md:px-6 md:pb-16 md:pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">

          {/* ── Left column ── */}
          <div className="relative">

            <motion.h1
              initial={heroHidden}
              animate={heroItem(0)}
              className="font-heading text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Study smarter.<br />
              <span className="text-[#5BA3D9]">Score higher.</span><br />
              Get selected.
            </motion.h1>

            <motion.p
              initial={heroHidden}
              animate={heroItem(1)}
              className="mt-5 max-w-xl text-base leading-8 text-blue-200/75 md:text-lg"
            >
              Bright Minds offers structured coaching for Class 9–12, JEE, NEET, and
              CUET with expert faculty, weekly test analysis, and dedicated 1-on-1
              mentoring in New Delhi.
            </motion.p>

            <motion.div
              initial={heroHidden}
              animate={heroItem(2)}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="#cta"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#01203f] transition-all hover:scale-[1.02] hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)]"
              >
                Book Free Counselling <ArrowRight size={15} />
              </Link>
              <Link
                href="/courses"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/85 transition-all hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.06]"
              >
                View Courses
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={heroHidden}
              animate={heroItem(3)}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-[20px] border border-white/[0.08] bg-white/[0.05] p-4 backdrop-blur-sm"
                >
                  <Icon size={18} className="mb-2 text-blue-300/80" aria-hidden="true" />
                  <p className="font-heading text-xl font-bold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-blue-200/60">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column – card stack ── */}
          <motion.div
            initial={heroHidden}
            animate={heroItem(1)}
            className="relative flex flex-col gap-4"
          >
            {/* Primary card */}
            <div
              className="overflow-hidden rounded-[28px] bg-[#0B3C5D] p-7 text-white"
              style={{ boxShadow: "0 12px 40px rgba(1,32,63,0.30)" }}
            >
              <p className="mb-2 text-sm font-semibold text-blue-300">
                2026 Batch Highlight
              </p>
              <p className="font-heading text-3xl font-bold leading-tight">
                250+ students selected in JEE, NEET &amp; CUET.
              </p>
              <p className="mt-3 text-sm leading-7 text-blue-200/75">
                From a single New Delhi centre — built on consistent weekly
                preparation and structured mentorship.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Admissions open now
              </div>
            </div>

            {/* Mini cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.05] p-5 backdrop-blur-sm">
                <p className="text-xs text-blue-200/55">Weekly mock tests</p>
                <p className="mt-2 font-heading text-lg font-bold text-white">
                  Full analysis + rank
                </p>
                <p className="mt-1 text-xs text-blue-200/55">Every subject, every chapter</p>
              </div>
              <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.05] p-5 backdrop-blur-sm">
                <p className="text-xs text-blue-200/55">Mentorship</p>
                <p className="mt-2 font-heading text-lg font-bold text-white">
                  1-on-1 guidance
                </p>
                <p className="mt-1 text-xs text-blue-200/55">Bi-weekly check-ins</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════ Bottom Image Carousel ══════════ */}
        <motion.div
          initial={heroHidden}
          animate={heroItem(4)}
          className="mt-14"
        >
          <div className="overflow-hidden rounded-3xl bg-white/[0.04] p-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm ring-1 ring-white/[0.07]">
            <div
              ref={carouselRef}
              className="flex rounded-md gap-3 h-[440px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ cursor: "grab" }}
            >
              {[...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES].map((img, i) => (
                <div key={i} className="flex-none" style={{ width: 630 }}>
                  <Image
                  height={600}
                  width={800}
                    src={img.src}
                    alt={img.alt}
                    className=" rounded-2xl object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}