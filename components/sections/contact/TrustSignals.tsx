'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TRUST_STATS } from '@/lib/contactData';

function CountUp({ target, suffix, started }:{ target:number; suffix:string; started:boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let val = 0;
    const dur = 1600;
    const step = 16;
    const inc  = target / (dur / step);
    const t = setInterval(() => {
      val += inc;
      if (val >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(val));
    }, step);
    return () => clearInterval(t);
  }, [started, target]);

  if (suffix === '') return <span>1:12</span>;
  return <span>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function TrustSignals() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); ob.disconnect(); } },
      { threshold:0.3 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Trust statistics" className="bg-primary py-14 md:py-16">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.p initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="mb-10 text-center text-sm font-bold uppercase tracking-[0.18em] text-white/60">
          Trusted by students and parents across Delhi NCR
        </motion.p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <motion.div key={stat.id}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.1 }}
              transition={{ duration:0.45, delay:i*0.1 }}
              className="rounded-[24px] p-6 text-center"
              style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)' }}>
              <p className="font-serif text-3xl font-bold text-white md:text-4xl">
                <CountUp target={stat.num} suffix={stat.suffix} started={started} />
              </p>
              <p className="mt-2 text-xs font-semibold text-white/65">{stat.label}</p>
              <div className="mx-auto mt-3 h-0.5 w-8 rounded-full"
                style={{ background:stat.color }} aria-hidden="true" />
            </motion.div>
          ))}
        </div>

        {/* Proof badges */}
        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ delay:0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3">
          {['🎓 IIT-educated faculty','📊 AI-based progress tracking','✅ 250+ selections in 2026','📞 24-hour response guarantee'].map(b => (
            <span key={b}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-sm">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
