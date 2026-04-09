import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
type BG='light'|'white'|'tinted'|'primary'|'dark';
const BG: Record<BG,string> = {
  light:  'bg-[#F8FAFC]',
  white:  'bg-white',
  tinted: 'bg-[#EEF4F8]',
  primary:'bg-[#0B3C5D]',
  dark:   'bg-gradient-to-br from-[#0D1B2A] to-[#082D45]',
};
export default function Section({ children, id, bg='light', className }:{ children:ReactNode; id?:string; bg?:BG; className?:string }) {
  return <section id={id} className={cn('py-16 md:py-20 lg:py-24 scroll-mt-24', BG[bg], className)}>{children}</section>;
}
