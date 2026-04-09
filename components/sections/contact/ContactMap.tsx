'use client';
import { motion } from 'framer-motion';
import { CONTACT_DETAILS } from '@/lib/contactData';

export default function ContactMap() {
  return (
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ duration:0.55, ease:[0.16,1,0.3,1] }}
      className="flex flex-col gap-4">

      {/* Map card */}
      <div className="overflow-hidden rounded-[28px] border border-slate-200/70 shadow-[0_4px_24px_rgba(11,60,93,0.07)]">
        <div className="relative h-[340px] w-full bg-slate-100 md:h-[420px]">
          <iframe
            src={CONTACT_DETAILS.mapEmbed}
            width="100%" height="100%"
            style={{ border:0 }} allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bright Minds Coaching Institute — Connaught Place, New Delhi"
            className="h-full w-full"
          />
        </div>

        {/* Address strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-white px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B3C5D]">Visit Our Institute</p>
            <address className="mt-1 not-italic text-sm font-semibold text-[#1E293B]">{CONTACT_DETAILS.address}</address>
            <p className="mt-0.5 text-xs text-[#94A3B8]">Monday – Saturday · 8 AM to 8 PM</p>
          </div>
          <a href={CONTACT_DETAILS.mapsUrl} target="_blank" rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-[#0B3C5D]/20 bg-[#EEF4F8] px-4 py-2 text-xs font-bold text-[#0B3C5D] transition-all hover:scale-[1.03]">
            Get Directions →
          </a>
        </div>
      </div>

      {/* Quick-contact mini cards */}
      <div className="grid grid-cols-2 gap-4">
        <a href={CONTACT_DETAILS.phoneTel}
          className="flex items-center gap-3 rounded-[20px] border border-slate-200/70 bg-white p-4 transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(11,60,93,0.09)]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#0B3C5D]/10 text-lg" aria-hidden="true">📞</span>
          <div>
            <p className="text-xs font-bold text-[#1E293B]">Call us</p>
            <p className="text-xs text-[#64748B]">+91 98765 43210</p>
          </div>
        </a>
        <a href={CONTACT_DETAILS.emailHref}
          className="flex items-center gap-3 rounded-[20px] border border-slate-200/70 bg-white p-4 transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(11,60,93,0.09)]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#7C3AED]/10 text-lg" aria-hidden="true">✉️</span>
          <div>
            <p className="text-xs font-bold text-[#1E293B]">Email us</p>
            <p className="text-xs text-[#64748B]">hello@brightminds.edu</p>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
