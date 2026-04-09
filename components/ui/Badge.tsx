import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
type Variant = 'primary'|'secondary'|'accent'|'dark';
const V: Record<Variant,string> = {
  primary:  'bg-[rgba(11,60,93,0.08)] text-[#0B3C5D]',
  secondary:'bg-[rgba(46,204,113,0.12)] text-[#27AE60]',
  accent:   'bg-[rgba(243,156,18,0.12)] text-[#D68910]',
  dark:     'bg-slate-100 text-slate-700',
};
export default function Badge({ children, variant='primary', className }:{ children:ReactNode; variant?:Variant; className?:string }) {
  return <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', V[variant], className)}>{children}</span>;
}
