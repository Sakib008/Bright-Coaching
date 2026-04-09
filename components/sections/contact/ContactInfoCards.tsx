"use client";
import { motion } from "framer-motion";
import { INFO_CARDS } from "@/lib/contactData";

const ICONS: Record<string, React.ReactNode> = {
  phone: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  ),
  "map-pin": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  clock: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function ContactInfoCards() {
  return (
    <section
      aria-label="Contact information"
      className="bg-[#F8FAFC] py-14 md:py-16"
    >
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">
            Reach us
          </p>
          <h2 className="mt-1 font-serif text-2xl font-bold text-[#1E293B] md:text-3xl">
            Multiple ways to connect — choose what works for you.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card, i) => (
            <motion.a
              key={card.id}
              href={card.href}
              target={card.id === "visit" ? "_blank" : undefined}
              rel={card.id === "visit" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 16px 40px rgba(11,60,93,0.10)",
              }}
              className="flex flex-col rounded-[26px] border border-slate-200/70 bg-white p-6 transition-all duration-300"
              style={{ boxShadow: "0 2px 12px rgba(11,60,93,0.05)" }}
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-[14px]"
                style={{ background: `${card.color}18`, color: card.color }}
              >
                {ICONS[card.icon]}
              </div>
              <h3 className="mb-3 text-sm font-bold text-[#1E293B]">
                {card.title}
              </h3>
              <p className="text-sm font-semibold text-[#1E293B]">
                {card.line1}
              </p>
              <p className="mt-0.5 text-xs text-[#94A3B8]">{card.line2}</p>
              <div className="mt-auto pt-5">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold"
                  style={{ color: card.color }}
                >
                  {card.cta} →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
