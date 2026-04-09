import Link from 'next/link';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

type Variant = 'primary'|'secondary'|'accent'|'ghost';
type Size    = 'sm'|'md'|'lg';

const V: Record<Variant, string> = {
  primary:  'bg-[#0B3C5D] text-white hover:bg-[#1A5276] hover:shadow-[0_8px_24px_rgba(11,60,93,0.22)]',
  secondary:'bg-white text-[#0B3C5D] border border-[#0B3C5D]/20 hover:border-[#0B3C5D]/35 hover:shadow-[0_4px_16px_rgba(11,60,93,0.08)]',
  accent:   'bg-[#F39C12] text-white hover:bg-[#D68910] hover:shadow-[0_8px_24px_rgba(243,156,18,0.25)]',
  ghost:    'text-[#0B3C5D] hover:bg-[rgba(11,60,93,0.07)]',
};
const S: Record<Size, string> = {
  sm:'h-10 px-4 text-sm', md:'h-12 px-6 text-sm', lg:'h-14 px-8 text-base',
};
const BASE='inline-flex items-center justify-center rounded-full font-semibold select-none transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C5D] focus-visible:ring-offset-2';

export default function Button({ children, href, onClick, variant='primary', size='md', className, disabled=false, type='button' }:{
  children:ReactNode; href?:string; onClick?:()=>void; variant?:Variant; size?:Size; className?:string; disabled?:boolean; type?:'button'|'submit'|'reset';
}) {
  const cls = cn(BASE, V[variant], S[size], disabled&&'opacity-50 pointer-events-none', className);
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>;
}
