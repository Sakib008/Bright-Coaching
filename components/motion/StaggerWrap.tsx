'use client';
import { motion } from 'framer-motion';
import { containerVariants, viewportLazy } from '@/lib/motion';
import { ReactNode } from 'react';
export default function StaggerWrap({ children, className }:{ children:ReactNode; className?:string }) {
  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" whileInView="visible" viewport={viewportLazy}>
      {children}
    </motion.div>
  );
}
