import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Youtube, Twitter } from 'lucide-react';

const COURSES = ['Class 9–10 Foundation','Class 11–12 Core','JEE Main + Advanced','NEET UG','CUET UG / PG'];
const LINKS   = [
  {label:'Why Choose Us',   href:'#why-us'},
  {label:'Results',         href:'#results'},
  {label:'Faculty',         href:'#faculty'},
  {label:'Testimonials',    href:'#testimonials'},
  {label:'FAQ',             href:'#faq'},
  {label:'Book Counselling',href:'#cta'},
];

export default function Footer() {
  return (
    <footer className="relative bottom-0 z-0 px-3 pb-0 pt-5 md:px-5">
      <div className="sticky mx-auto max-w-[1200px] rounded-t-[32px] px-6 pb-8 pt-10 md:px-10 md:pt-14"
        style={{background:'linear-gradient(160deg,#0D1B2A 0%,#082D45 100%)'}}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#F39C12]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 3L2 8l10 5 10-5-10-5Z" fill="white"/>
                  <path d="M2 16l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity=".55"/>
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-white">Bright Minds</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-blue-300">Premium coaching for Class 9–12, JEE, NEET, and CUET. Structured learning, mentored preparation, and real results.</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-blue-300">
              <a href="tel:+919876543210" className="flex items-center gap-2 transition-colors hover:text-white"><Phone size={13} className="text-[#2ECC71]"/>+91 98765 43210</a>
              <a href="mailto:hello@brightminds.edu" className="flex items-center gap-2 transition-colors hover:text-white"><Mail size={13} className="text-[#2ECC71]"/>hello@brightminds.edu</a>
              <div className="flex items-start gap-2"><MapPin size={13} className="mt-0.5 shrink-0 text-[#2ECC71]"/><span>12-B, Connaught Place, New Delhi – 110001</span></div>
            </div>
          </div>
          {/* Courses */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Courses</p>
            <ul className="flex flex-col gap-3">{COURSES.map(c=><li key={c}><Link href="#courses" className="text-sm text-blue-300 transition-colors hover:text-white">{c}</Link></li>)}</ul>
          </div>
          {/* Nav */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Navigate</p>
            <ul className="flex flex-col gap-3">{LINKS.map(l=><li key={l.label}><Link href={l.href} className="text-sm text-blue-300 transition-colors hover:text-white">{l.label}</Link></li>)}</ul>
          </div>
          {/* Social */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Follow Us</p>
            <div className="flex gap-3">
              {[{Icon:Instagram,label:'Instagram'},{Icon:Youtube,label:'YouTube'},{Icon:Twitter,label:'Twitter'}].map(({Icon,label})=>(
                <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/08 text-blue-300 transition-all hover:bg-white/15 hover:text-white"><Icon size={15}/></a>
              ))}
            </div>
            <div className="mt-6 rounded-[18px] border border-white/10 bg-white/06 p-4">
              <p className="text-xs font-semibold text-[#2ECC71]">✓ 12,000+ students guided</p>
              <p className="mt-1 text-xs font-semibold text-[#F39C12]">★ 4.9 / 5 on Google</p>
              <p className="mt-1 text-xs text-blue-300">Trusted since 2011</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-blue-400">© 2026 Bright Minds Coaching Institute. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-blue-400">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Use</a>
            <a href="#" className="transition-colors hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
