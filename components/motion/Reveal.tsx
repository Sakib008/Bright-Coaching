'use client';
import { motion } from 'framer-motion';
import { itemVariants, viewport } from '@/lib/motion';
import { ReactNode } from 'react';
export default function Reveal({ children, className, delay=0 }:{ children:ReactNode; className?:string; delay?:number }) {
  return (
    <motion.div className={className} variants={itemVariants} initial="hidden" whileInView="visible" viewport={viewport} transition={{delay}}>
      {children}
    </motion.div>
  );
}
