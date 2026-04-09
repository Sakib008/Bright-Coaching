/**
 * InstituteStory.tsx
 * Scroll-based story reveal — three chapters in alternating layouts.
 * Each chapter: image (zoom on hover) + editorial text block.
 */
"use client";

import { motion } from "framer-motion";
import { STORY_CHAPTERS } from "@/lib/aboutData";
import Image from "next/image";

const CHAPTER_ACCENTS = ["#0B3C5D", "#27AE60", "#7C3AED"];
const CHAPTER_BG = [
  "from-[#0B3C5D] to-[#1A5276]",
  "from-[#27AE60] to-[#1E8449]",
  "from-[#7C3AED] to-[#5B21B6]",
];
const InstituteStoryImages = [
  { src: "https://images.pexels.com/photos/8617759/pexels-photo-8617759.jpeg", alt: "Students in classroom"  },
  { src: "https://images.pexels.com/photos/6683675/pexels-photo-6683675.jpeg", alt: "Student studying"       },
  { src: "https://images.pexels.com/photos/14025659/pexels-photo-14025659.jpeg", alt: "Books and learning"     },
]

export default function InstituteStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#1E293B] md:text-5xl"
          >
            From one classroom to 12,000 students.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#64748B]">
            Every great institute starts with a clear conviction. Ours was
            simple: a student who understands deeply will always outperform one
            who only practises hard.
          </p>
        </motion.div>

        {/* Story chapters */}
        <div className="flex flex-col gap-16">
          {STORY_CHAPTERS.map((ch, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={ch.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  isEven ? "" : "md:[&>:first-child]:order-last"
                }`}
              >
                {/* Image block */}
                <div
                  className="group relative overflow-hidden rounded-[26px]"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Gradient placeholder (replace with <Image> in production) */}
                  <Image
                    src={InstituteStoryImages[i].src}
                    alt={InstituteStoryImages[i].alt}
                    width={800}
                    height={800}
                    className={`absolute inset-0 w-full h-full bg-gradient-to-br ${CHAPTER_BG[i]} transition-transform duration-700 group-hover:scale-[1.04]`}
                    loading="lazy"
                  />
                  {/* Year watermark */}
                  <span
                    className="absolute bottom-5 left-6 font-serif text-8xl font-bold opacity-80 text-white select-none"
                    aria-hidden="true"
                  >
                    {ch.year}
                  </span>
                  {/* Phase badge */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {ch.phase}
                  </div>
                </div>

                {/* Text block */}
                <div className="px-0 md:px-6">
                  <div
                    className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ background: CHAPTER_ACCENTS[i] }}
                  >
                    {ch.year}
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-[#1E293B] md:text-3xl">
                    {ch.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#64748B]">
                    {ch.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
