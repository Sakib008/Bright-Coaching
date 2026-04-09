import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   { DEFAULT:'#01203f', light:'#1A5276', dark:'#082D45', muted:'rgba(11,60,93,0.08)' },
        secondary: { DEFAULT:'#2ECC71', light:'#52D98A', dark:'#27AE60', muted:'rgba(46,204,113,0.10)' },
        accent:    { DEFAULT:'#F39C12', light:'#F5B041', dark:'#D68910', muted:'rgba(243,156,18,0.10)' },
        background:{ DEFAULT:'#F8FAFC', tinted:'#EEF4F8', card:'#FFFFFF' },
        brand:     { text:'#1E293B', muted:'#64748B', faint:'#94A3B8', inverse:'#FFFFFF' },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"','Outfit','system-ui','sans-serif'],
        body:    ['Inter','"DM Sans"','system-ui','sans-serif'],
      },
      borderRadius: { sm:'12px', md:'16px', lg:'20px', xl:'24px', '2xl':'28px', '3xl':'32px', pill:'9999px' },
      boxShadow: {
        sm:'0 2px 8px rgba(11,60,93,0.06)',
        md:'0 4px 16px rgba(11,60,93,0.08)',
        card:'0 4px 20px rgba(11,60,93,0.08)',
        'card-hover':'0 12px 40px rgba(11,60,93,0.14)',
        accent:'0 8px 24px rgba(243,156,18,0.25)',
        primary:'0 8px 24px rgba(11,60,93,0.22)',
      },
      maxWidth: { container:'1200px' },
      keyframes: {
        float:        {'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'}},
        'pulse-ring':  {'0%':{boxShadow:'0 0 0 0 rgba(243,156,18,0.4)'},'70%':{boxShadow:'0 0 0 14px rgba(243,156,18,0)'},'100%':{boxShadow:'0 0 0 0 rgba(243,156,18,0)'}},
        'scroll-x':   {'0%':{transform:'translateX(0)'},'100%':{transform:'translateX(-50%)'}},
      },
      animation: {
        float:'float 5s ease-in-out infinite',
        'pulse-ring':'pulse-ring 2.2s cubic-bezier(0,0,0.2,1) infinite',
        'scroll-x':'scroll-x 28s linear infinite',
      },
    },
  },
  plugins:[],
};
export default config;
