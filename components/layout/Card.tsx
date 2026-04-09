import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
type Variant='default'|'tinted'|'dark'|'elevated';
const V: Record<Variant,string> = {
  default: 'bg-white border border-slate-200/70 shadow-[0_4px_20px_rgba(11,60,93,0.08)]',
  tinted:  'bg-[#EEF4F8] border border-[#0B3C5D]/15',
  dark:    'bg-[#0B3C5D] border-0 text-white',
  elevated:'bg-white border border-slate-100 shadow-[0_8px_32px_rgba(11,60,93,0.10)]',
};
const HOVER='transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,60,93,0.14)]';
export default function Card({ children, variant='default', hoverable=false, padding=true, radius='24px', className }:{
  children:ReactNode; variant?:Variant; hoverable?:boolean; padding?:boolean; radius?:string; className?:string;
}) {
  return <div className={cn(padding&&'p-6 md:p-8', V[variant], hoverable&&HOVER, className)} style={{borderRadius:radius}}>{children}</div>;
}
