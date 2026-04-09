import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
type Variant = 'default'|'primary'|'accent'|'secondary';
const V: Record<Variant,string> = {
  default:  'bg-white shadow-[0_2px_8px_rgba(11,60,93,0.06)] text-[#0B3C5D]',
  primary:  'bg-[#0B3C5D] text-white',
  accent:   'bg-[rgba(243,156,18,0.10)] text-[#D68910]',
  secondary:'bg-[rgba(46,204,113,0.10)] text-[#27AE60]',
};
export default function IconBox({ children, variant='default', size=56, radius='18px', className }:{
  children:ReactNode; variant?:Variant; size?:number; radius?:string; className?:string;
}) {
  return <div className={cn('flex shrink-0 items-center justify-center', V[variant], className)} style={{width:size,height:size,borderRadius:radius}}>{children}</div>;
}
