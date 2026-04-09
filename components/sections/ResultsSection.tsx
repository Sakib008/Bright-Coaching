'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import Badge from '@/components/ui/Badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TOPPERS = [
  { name:'Aarav Sharma',  exam:'JEE Advanced', rank:'AIR 42',    score:'98.7%ile',  year:'2026', image:'https://images.pexels.com/photos/31367494/pexels-photo-31367494.jpeg' },
  { name:'Riya Verma',    exam:'NEET UG',      rank:'AIR 88',    score:'710 / 720', year:'2026', image:'https://images.pexels.com/photos/32213218/pexels-photo-32213218.jpeg' },
  { name:'Kabir Mehta',   exam:'JEE Main',     rank:'AIR 124',   score:'99.4%ile',  year:'2026', image:'https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg' },
  { name:'Ananya Singh',  exam:'CUET UG',      rank:'Top 0.5%',  score:'780 / 800', year:'2025', image:'https://images.pexels.com/photos/5211457/pexels-photo-5211457.jpeg' },
  { name:'Dev Patel',     exam:'NEET UG',      rank:'AIR 204',   score:'695 / 720', year:'2025', image:'https://images.pexels.com/photos/3985198/pexels-photo-3985198.jpeg ' },
];

export default function ResultsSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval>|null>(null);

  const go = (d: 1|-1) => { setDir(d); setIdx(i => (i+d+TOPPERS.length)%TOPPERS.length); };
  const reset = () => { if(timer.current) clearInterval(timer.current); timer.current = setInterval(()=>go(1),4500); };
  useEffect(()=>{ reset(); return ()=>{ if(timer.current) clearInterval(timer.current); }; },[]);

  const cur  = TOPPERS[idx];
  const prev2 = [TOPPERS[(idx+1)%TOPPERS.length], TOPPERS[(idx+2)%TOPPERS.length]];

  return (
    <Section id="results" bg="white">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Results" title="Top ranks backed by structured preparation." description="250+ selections in 2026 across JEE, NEET, and CUET." />
          <div className="flex shrink-0 gap-3 pb-10">
            {([[-1,'Previous topper'],[1,'Next topper']] as [1|-1,string][]).map(([d,lbl],i)=>(
              <button key={i} onClick={()=>{go(d);reset();}} aria-label={lbl}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B3C5D] transition hover:bg-[#0B3C5D] hover:text-white hover:shadow-[0_4px_16px_rgba(11,60,93,0.18)]">
                {d===-1?<ChevronLeft size={18}/>:<ChevronRight size={18}/>}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.div key={idx} custom={dir}
            initial={d=>({opacity:0,x:d*70})} animate={{opacity:1,x:0}} exit={d=>({opacity:0,x:d*-70})}
            transition={{duration:0.48,ease:[0.16,1,0.3,1]}}
            className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]"
          >
            {/* Main card */}
            <div className="overflow-hidden rounded-[28px] border border-slate-200/70" style={{boxShadow:'0 8px 32px rgba(11,60,93,0.10)'}}>
              <div className="relative h-[340px]">
                <img src={cur.image} alt={cur.name} className="h-full w-full object-cover" loading="lazy"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C5D]/80 via-transparent to-transparent"/>
                <div className="absolute bottom-0 left-0 p-6"><Badge variant="accent">{cur.exam} · {cur.year}</Badge></div>
              </div>
              <div className="flex items-center justify-between bg-white p-6">
                <div><p className="font-heading text-2xl font-bold text-[#1E293B]">{cur.name}</p><p className="mt-1 text-sm text-[#64748B]">{cur.exam}</p></div>
                <div className="text-right"><p className="font-heading text-2xl font-bold text-[#0B3C5D]">{cur.rank}</p><p className="mt-1 text-sm font-semibold text-[#27AE60]">{cur.score}</p></div>
              </div>
            </div>

            {/* Preview stack */}
            <div className="flex flex-col gap-4">
              {prev2.map(t=>(
                <div key={t.name} className="flex items-center gap-4 rounded-[24px] border border-slate-200/70 bg-white p-5" style={{boxShadow:'0 4px 16px rgba(11,60,93,0.06)'}}>
                  <img src={t.image} alt={t.name} className="h-20 w-20 shrink-0 rounded-[18px] object-cover" loading="lazy"/>
                  <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
                    <div className="overflow-hidden">
                      <p className="font-heading text-lg font-semibold text-[#1E293B] truncate">{t.name}</p>
                      <p className="mt-0.5 text-sm text-[#64748B]">{t.exam}</p>
                      <Badge variant="primary" className="mt-2">{t.rank}</Badge>
                    </div>
                    <p className="shrink-0 font-heading text-xl font-bold text-[#27AE60]">{t.score}</p>
                  </div>
                </div>
              ))}
              {/* Dots */}
              <div className="flex justify-center gap-2 pt-1">
                {TOPPERS.map((_,i)=>(
                  <button key={i} onClick={()=>{setDir(i>idx?1:-1);setIdx(i);reset();}} aria-label={`Topper ${i+1}`}
                    className={['h-2 rounded-full transition-all duration-300',i===idx?'w-6 bg-[#0B3C5D]':'w-2 bg-slate-300'].join(' ')}/>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[['250+','Selections in 2026'],['AIR 42','Best JEE rank'],['710','Best NEET score'],['4.9★','Google rating']].map(([n,l])=>(
            <div key={l} className="rounded-[20px] border border-slate-200/70 bg-[#EEF4F8] p-5 text-center">
              <p className="font-heading text-2xl font-bold text-[#0B3C5D]">{n}</p>
              <p className="mt-1 text-xs text-[#64748B]">{l}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
