'use client';
import { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import { Star } from 'lucide-react';

const ROW_A = [
  { name:'Rohit Gupta (Parent)',  role:'Father of JEE student',    quote:'The test analysis system gave us complete visibility into where our child was losing marks. Improvement within 6 weeks.' },
  { name:'Ananya K.',             role:'JEE Advanced qualifier',   quote:'Faculty here broke difficult concepts into steps I could actually understand. My Physics confidence completely changed.' },
  { name:'Meena Sharma (Parent)', role:'Mother of NEET student',   quote:'Bright Minds balances pressure with real mentoring. Highly recommended for serious students.' },
  { name:'Harsh Pandey',          role:'NEET 2026 qualifier',      quote:'The regular doubt sessions and error reviews helped me stop repeating the same mistakes.' },
  { name:'Priya T.',              role:'CUET Top 1% scorer',       quote:'Section-wise strategy and consistent practice made CUET feel completely manageable.' },
];
const ROW_B = [
  { name:'Arun Verma (Parent)',   role:'Father of Class 11 student', quote:'Communication from the institute is exceptional. Every week — a clear progress update.' },
  { name:'Shruti Mishra',         role:'CBSE Class 12 topper',       quote:'The board prep + JEE base combination saved me so much time. No double studying needed.' },
  { name:'Vikram Nair',           role:'JEE Main AIR 340',           quote:'Full-length mocks every week with full analysis taught me time management and killed paper anxiety.' },
  { name:'Sonia Kapoor (Parent)', role:'Mother of two students',     quote:'Both my children studied here. Consistent faculty and excellent discipline. Worth every rupee.' },
  { name:'Arjun R.',              role:'NEET qualifier 2025',        quote:'The biology sessions were the best I attended — recall systems and high-yield notes made revision efficient.' },
];

function Card({ item }:{ item:typeof ROW_A[0] }) {
  return (
    <div className="w-[300px] shrink-0 rounded-[24px] border border-slate-200/70 bg-white p-6" style={{boxShadow:'0 4px 20px rgba(11,60,93,0.06)'}}>
      <div className="flex gap-0.5 mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} size={13} className="fill-[#F39C12] text-[#F39C12]"/>)}</div>
      <p className="text-sm leading-7 text-[#64748B]">"{item.quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3C5D] font-heading text-sm font-bold text-white">{item.name[0]}</div>
        <div><p className="text-sm font-semibold text-[#1E293B]">{item.name}</p><p className="text-xs text-[#94A3B8]">{item.role}</p></div>
      </div>
    </div>
  );
}

function ScrollRow({ items, speed=0.025, reverse=false }:{ items:typeof ROW_A; speed?:number; reverse?:boolean }) {
  const ref  = useRef<HTMLDivElement>(null);
  const x    = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const doubled = [...items,...items];

  useAnimationFrame((_,delta)=>{
    if(paused) return;
    const el = ref.current; if(!el) return;
    const half = el.scrollWidth/2;
    const dir  = reverse ? -1 : 1;
    const next = x.get() - delta*speed*dir;
    x.set(next<=-half ? 0 : next>=0 ? -half : next);
  });

  return (
    <div className="overflow-hidden py-1" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onTouchStart={()=>setPaused(true)} onTouchEnd={()=>setPaused(false)}>
      <motion.div ref={ref} style={{x}} className="flex w-max gap-5 px-2">
        {doubled.map((item,idx)=><Card key={`${item.name}-${idx}`} item={item}/>)}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" bg="tinted">
      <Container><SectionHeader eyebrow="Testimonials" title="What students and parents say about Bright Minds." description="Hover or touch any row to pause and read." align="center"/></Container>
      <div className="flex flex-col gap-5 mt-2">
        <ScrollRow items={ROW_A}/>
        <ScrollRow items={ROW_B} reverse/>
      </div>
    </Section>
  );
}
