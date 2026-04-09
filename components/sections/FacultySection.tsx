'use client';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeader from '@/components/layout/SectionHeader';
import Badge from '@/components/ui/Badge';
import { containerVariants, itemVariants, viewportLazy } from '@/lib/motion';
import Image from 'next/image';

const FACULTY = [
  { name:'Dr. Neeraj Kapoor', subject:'Physics',          exp:'14 years', detail:'Specialises in concept visualisation, mechanics intuition, and smart problem-solving frameworks for JEE Advanced.', badge:'primary'   as const, image:'https://images.pexels.com/photos/36781271/pexels-photo-36781271.jpeg' },
  { name:'Prof. Simran Arora',subject:'Chemistry',        exp:'11 years', detail:'Known for structured revision systems and making Organic Chemistry approachable for both boards and NEET.',       badge:'secondary' as const, image:'https://images.pexels.com/photos/35745677/pexels-photo-35745677.jpeg' },
  { name:'Dr. Aman Bhatia',   subject:'Biology',          exp:'12 years', detail:'Expert in NEET preparation with high-yield recall techniques, chapter sequencing, and error-correction sessions.', badge:'accent'    as const, image:'https://images.pexels.com/photos/18870255/pexels-photo-18870255.jpeg' },
  { name:'Ms. Pooja Nair',    subject:'Mathematics',      exp:'10 years', detail:'Builds problem-solving speed for JEE through topic-wise mastery, pattern recognition, and timed drills.',          badge:'primary'   as const, image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' },
  { name:'Mr. Rahul Desai',   subject:'English & CUET',   exp:'8 years',  detail:'Covers reading comprehension and CUET language strategy with section-wise score-maximisation techniques.',          badge:'dark'      as const, image:'https://images.pexels.com/photos/17811182/pexels-photo-17811182.jpeg' },
  { name:'Dr. Kavita Singh',  subject:'Zoology / Botany', exp:'13 years', detail:'Integrates mnemonic systems and clinical relevance to make NEET Biology sessions memorable and high-scoring.',     badge:'secondary' as const, image:'https://images.pexels.com/photos/35769752/pexels-photo-35769752.jpeg' },
];

export default function FacultySection() {
  return (
    <Section id="faculty" bg="white">
      <Container>
        <SectionHeader eyebrow="Our Faculty" title="Experienced educators students can trust and learn from." description="Hover over any card to reveal the full detail — each faculty member brings a distinct, proven teaching approach."/>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY.map(f=>(
            <motion.article key={f.name} variants={itemVariants} className="group relative overflow-hidden rounded-[28px]" style={{height:370,boxShadow:'0 4px 20px rgba(11,60,93,0.08)'}}>
              <Image src={f.image} alt={f.name} fill className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"/>
              {/* Default overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#082D45]/88 via-[#082D45]/40 to-transparent p-6 text-white transition-opacity duration-400 group-hover:opacity-0">
                <Badge variant={f.badge}>{f.subject}</Badge>
                <h3 className="mt-2 font-heading text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-blue-200">{f.exp} experience</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-primary/90 p-6 text-white transition-transform duration-450 group-hover:translate-y-0">
                <Badge variant={f.badge}>{f.subject}</Badge>
                <h3 className="mt-3 font-heading text-xl font-bold">{f.name}</h3>
                <p className="text-sm text-blue-300">{f.exp} experience</p>
                <p className="mt-4 text-sm leading-7 text-blue-100">{f.detail}</p>
                <p className="mt-5 text-sm font-semibold text-[#F39C12]">View profile →</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
