/**
 * BRIGHT MINDS — Design Tokens (single source of truth)
 * Never hardcode hex values in components. Import from here.
 */
export const colors = {
  primary:       '#0B3C5D',
  primaryLight:  '#1A5276',
  primaryDark:   '#082D45',
  secondary:     '#2ECC71',
  secondaryDark: '#27AE60',
  accent:        '#F39C12',
  accentDark:    '#D68910',
  bg:            '#F8FAFC',
  bgTinted:      '#EEF4F8',
  surface:       '#FFFFFF',
  text:          '#1E293B',
  textMuted:     '#64748B',
  textFaint:     '#94A3B8',
} as const;

export const shadows = {
  sm:         '0 2px 8px rgba(11,60,93,0.06)',
  md:         '0 4px 16px rgba(11,60,93,0.08)',
  lg:         '0 8px 32px rgba(11,60,93,0.10)',
  card:       '0 4px 20px rgba(11,60,93,0.08)',
  cardHover:  '0 12px 40px rgba(11,60,93,0.14)',
  accent:     '0 8px 24px rgba(243,156,18,0.25)',
  primary:    '0 8px 24px rgba(11,60,93,0.22)',
} as const;

export const ds = {
  container:   'mx-auto max-w-[1200px] w-full px-4 md:px-6 lg:px-8',
  section:     'py-16 md:py-20 lg:py-24 scroll-mt-24',
  card:        'bg-white rounded-[24px] border border-slate-200/70 p-6 md:p-8',
  cardHover:   'transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,60,93,0.14)]',
  eyebrow:     'text-sm font-semibold uppercase tracking-[0.18em] text-[#0B3C5D]',
  h2:          'font-heading text-3xl font-bold tracking-tight text-[#1E293B] md:text-4xl lg:text-[2.75rem]',
  bodyLg:      'text-base md:text-lg leading-8 text-[#64748B]',
  btnPrimary:  'inline-flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold bg-[#0B3C5D] text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#1A5276] hover:shadow-[0_8px_24px_rgba(11,60,93,0.22)]',
  btnSecondary:'inline-flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold bg-white text-[#0B3C5D] border border-[#0B3C5D]/20 transition-all duration-300 hover:scale-[1.03] hover:border-[#0B3C5D]/35',
  btnAccent:   'inline-flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold bg-[#F39C12] text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#D68910] hover:shadow-[0_8px_24px_rgba(243,156,18,0.25)]',
  noScrollbar: '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
} as const;
