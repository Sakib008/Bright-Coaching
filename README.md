# Bright Minds Coaching Institute — Website

Premium coaching institute website built with **Next.js 14 App Router**, **Tailwind CSS v3**, and **Framer Motion**.

## Project Structure

```
bright-minds/
├── app/
│   ├── globals.css       ← Design tokens, base reset, fluid type
│   ├── layout.tsx        ← Root HTML shell + SEO metadata
│   └── page.tsx          ← Homepage (all sections composed here)
│
├── components/
│   ├── layout/
│   │   ├── Container.tsx     ← Max-width wrapper
│   │   ├── Section.tsx       ← Section with bg variants
│   │   ├── Card.tsx          ← Reusable rounded card
│   │   └── SectionHeader.tsx ← Eyebrow + title + description
│   │
│   ├── motion/
│   │   ├── Reveal.tsx         ← Scroll-triggered fade + rise
│   │   ├── StaggerWrap.tsx    ← Stagger children on scroll
│   │   └── FloatingShapes.tsx ← Decorative ambient motion shapes
│   │
│   ├── sections/
│   │   ├── Header.tsx           ← Sticky frosted glass nav
│   │   ├── HeroSection.tsx      ← Parallax hero + stats
│   │   ├── CoursesSection.tsx   ← Bento-style course cards
│   │   ├── WhyChooseUsSection.tsx ← 8-feature staggered grid
│   │   ├── ResultsSection.tsx   ← Auto-carousel toppers
│   │   ├── TestimonialsSection.tsx ← Infinite scroll testimonials
│   │   ├── FacultySection.tsx   ← Hover-overlay faculty grid
│   │   ├── CTASection.tsx       ← Dark CTA with pulsing button
│   │   ├── FAQSection.tsx       ← Animated accordion FAQ
│   │   └── Footer.tsx           ← Dark rounded sticky footer
│   │
│   └── ui/
│       ├── Button.tsx    ← Multi-variant pill button
│       ├── Badge.tsx     ← Colour-coded pill badge
│       └── IconBox.tsx   ← Sized icon container
│
├── lib/
│   ├── cn.ts             ← clsx + tailwind-merge utility
│   ├── design-tokens.ts  ← Colour + shadow tokens (never hardcode hex)
│   └── motion.ts         ← All animation variants + easings
│
├── package.json          ← npm dependencies
├── tailwind.config.ts    ← Theme tokens extended
├── tsconfig.json
└── next.config.ts
```

## Motion System

| Effect | Approach | Used In |
|--------|----------|---------|
| Scroll fade + rise | `whileInView` + `once` | All sections |
| Staggered cards | `staggerChildren` via `StaggerWrap` | Courses, WhyUs, Faculty |
| Sticky header | CSS `sticky` + entry animation | Header |
| Hover lift + shadow | `whileHover` on cards | Courses, Faculty |
| Parallax hero | `useScroll` + `useTransform` | HeroSection |
| Infinite testimonials scroll | `useAnimationFrame` + `useMotionValue` | Testimonials |
| Carousel (toppers) | `AnimatePresence` direction-aware slide | Results |
| CTA pulse ring | Repeating `boxShadow` animation | CTASection |
| Floating shapes | Looping `y`/`rotate`/`scale` | HeroSection |
| FAQ accordion | `AnimatePresence` height collapse | FAQSection |

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Design Tokens

All brand colours live in `lib/design-tokens.ts`.
Never hardcode `#0B3C5D` directly — import `colors.primary`.

Font families: **Plus Jakarta Sans** (headings) + **Inter** (body).
