export default function SectionHeader({ eyebrow, title, description, align='left' }:{
  eyebrow?:string; title:string; description?:string; align?:'left'|'center';
}) {
  const w = align==='center' ? 'mx-auto max-w-3xl text-center mb-10' : 'max-w-2xl mb-10';
  return (
    <div className={w}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]">{eyebrow}</p>}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base leading-8 text-[#64748B] md:text-lg">{description}</p>}
    </div>
  );
}
