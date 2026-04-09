'use client';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { sectionReveal, viewport, pulseRing } from '@/lib/motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const CONTACT = [
  { icon:Phone,  label:'+91 98765 43210',        sub:'Call between 9 AM – 7 PM'     },
  { icon:Mail,   label:'hello@brightminds.edu',  sub:'Reply within 2 hours'          },
  { icon:MapPin, label:'Connaught Place, Delhi', sub:'Walk-in welcome Mon–Sat'       },
];

export default function CTASection() {
  return (
    <Section id="cta" bg="tinted">
      <Container>
        <motion.div variants={sectionReveal} initial="hidden" whileInView="visible" viewport={viewport}
          className="relative overflow-hidden rounded-[32px]"
          style={{background:'linear-gradient(135deg,#0D1B2A 0%,#082D45 55%,#0B3C5D 100%)'}}>
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true"/>
          <div className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#2ECC71]/08 blur-3xl" aria-hidden="true"/>
          <div className="relative px-6 py-14 md:px-12 md:py-20">
            <div className="flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#2ECC71]">
                <span className="h-2 w-2 rounded-full bg-[#2ECC71] shadow-[0_0_8px_#2ECC71]"/>
                Admissions open · Limited seats per batch
              </span>
            </div>
            <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Join Bright Minds and prepare with clarity, discipline, and a strategy that works.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-blue-200">
                  Book a free 30-minute counselling session. Our team will recommend the right batch based on your class, goal, and current preparation level.
                </p>
                <div className="mt-8 inline-block">
                  <motion.div {...pulseRing} className="inline-flex rounded-full">
                    <a href="tel:+919876543210"
                      className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#F39C12] px-8 text-base font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#D68910]"
                      style={{boxShadow:'0 8px 24px rgba(243,156,18,0.30)'}}>
                      <Phone size={18}/> Book Free Counselling
                    </a>
                  </motion.div>
                </div>
                <p className="mt-4 text-sm text-blue-300">No obligation · Counselling session is completely free</p>
              </div>
              <div className="flex flex-col gap-4">
                {CONTACT.map(({icon:Icon,label,sub})=>(
                  <div key={label} className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/08 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#2ECC71]"><Icon size={18}/></div>
                    <div><p className="text-sm font-semibold text-white">{label}</p><p className="text-xs text-blue-300">{sub}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
