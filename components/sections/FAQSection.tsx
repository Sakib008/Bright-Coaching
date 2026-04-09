'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q:'Which courses does Bright Minds offer?',             a:'We offer structured programs for Class 9–10 (Foundation), Class 11–12 (Core), JEE Main + Advanced, NEET UG, CUET UG/PG, and Olympiad preparation.' },
  { q:'How are batches structured and timetabled?',         a:'Batches are grouped by class level and exam target. Foundation batches: 5 days/week, 2-hour sessions. Competitive exam batches: 6 days/week with weekend test and doubt slots.' },
  { q:'Is 1-on-1 mentoring included in all programs?',     a:'Yes. Every student gets a dedicated mentor for bi-weekly check-ins, study planning, test review, and weak-area correction. Mentors also communicate with parents.' },
  { q:'Do parents receive regular updates?',               a:'Yes. Weekly WhatsApp/SMS updates on attendance and test scores. Monthly detailed reports covering chapter-wise performance, batch rank, and faculty notes.' },
  { q:'What is the fee structure?',                        a:'Foundation batches start at ₹8,000/month. Competitive exam batches (JEE/NEET/CUET) start at ₹12,000/month. Annual plans and early-admission discounts available. Details shared during free counselling.' },
  { q:'How do I enroll or book a counselling session?',    a:'Call +91 98765 43210 or click "Book Free Counselling" above. Our team contacts you within 2 hours to schedule a free 30-minute session.' },
  { q:'Is there a demo class before enrolling?',           a:'Yes. After counselling, students may attend one free demo class in their target batch before any payment.' },
  { q:'Do you offer online or hybrid classes?',            a:'We currently operate offline in Delhi. Enrolled students get hybrid access (recordings + online doubt sessions) when they miss a class due to illness or travel.' },
];

function FAQItem({ faq, open, onToggle }:{ faq:typeof FAQS[0]; open:boolean; onToggle:()=>void }) {
  return (
    <div className={['overflow-hidden rounded-[20px] border border-slate-200/70 bg-white transition-shadow',open?'shadow-[0_4px_20px_rgba(11,60,93,0.07)]':''].join(' ')}>
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={open}>
        <span className="font-heading text-base font-semibold text-[#1E293B]">{faq.q}</span>
        <span className={['flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300',open?'bg-[#0B3C5D] text-white':'bg-[#EEF4F8] text-[#0B3C5D]'].join(' ')}>
          {open?<Minus size={15}/>:<Plus size={15}/>}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.35,ease:[0.16,1,0.3,1]}} className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-7 text-[#64748B]">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number|null>(0);
  return (
    <Section id="faq" bg="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:pr-6">
            <SectionHeader eyebrow="FAQ" title="Questions before enrolling? We have answers." description="If you don't find what you need here, call us directly — available 9 AM to 7 PM."/>
            <a href="tel:+919876543210" className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B3C5D]/20 bg-white px-6 text-sm font-semibold text-[#0B3C5D] transition-all hover:scale-[1.03] hover:border-[#0B3C5D]/40 hover:shadow-[0_8px_24px_rgba(11,60,93,0.10)]">
              Call us directly →
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq,i)=><FAQItem key={faq.q} faq={faq} open={open===i} onToggle={()=>setOpen(open===i?null:i)}/>)}
          </div>
        </div>
      </Container>
    </Section>
  );
}
