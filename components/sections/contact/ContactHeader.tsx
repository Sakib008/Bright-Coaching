"use client";
import { motion } from "framer-motion";
import { HEADER_COPY } from "@/lib/contactData";

export default function ContactHeader() {
  return (
    <section
      aria-labelledby="contact-h1"
      className="relative rounded-xl overflow-hidden bg-primary px-4 py-16 text-white md:px-8 md:py-20"
    >
      {/* Dot grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(255,255,255,1)1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1160px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-[#27AE60]"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-white/90">
              {HEADER_COPY.eyebrow}
            </span>
          </div>

          {/* H1 — single per page */}
          <h1
            id="contact-h1"
            className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
          >
            {HEADER_COPY.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            {HEADER_COPY.sub}
          </p>

          {/* Urgency badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#F39C12]/40 bg-[#F39C12]/15 px-4 py-2 text-sm font-semibold text-[#F9C46B]"
          >
            {HEADER_COPY.urgency}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
