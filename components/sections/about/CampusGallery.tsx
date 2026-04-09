/**
 * CampusGallery.tsx
 * Bento-grid gallery — mixed card sizes.
 * Hover: image scale-up + label overlay reveal.
 * Replace gradient divs with next/image in production.
 */
'use client';

import { motion } from 'framer-motion';
import { GALLERY } from '@/lib/aboutData';
import Image from 'next/image';

const SIZE_CLASSES: Record<string, string> = {
  large:  'col-span-2 row-span-2',
  medium: 'col-span-1 row-span-2',
  small:  'col-span-1 row-span-1',
};
const ASPECT: Record<string, string> = {
  large:  'aspect-square md:aspect-auto',
  medium: 'aspect-[3/4]',
  small:  'aspect-square',
};

export default function CampusGallery() {
  return (
    <section aria-labelledby="gallery-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0B3C5D]">Campus Life</p>
          <h2 id="gallery-heading" className="font-serif text-3xl font-bold text-[#1E293B] md:text-4xl">
            Where students come to study seriously.
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#64748B]">
            Modern classrooms, dedicated doubt rooms, digital test labs — and a culture where every student feels seen.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-[22px] ${SIZE_CLASSES[item.size]} ${ASPECT[item.size]} cursor-pointer`}
            >
              {/* Gradient bg (swap for Image in prod) */}
              <Image
                src={item.img}
                alt={item.alt}
                width={item.size === 'large' ? 800 : item.size === 'medium' ? 400 : 200}
                height={item.size === 'large' ? 800 : item.size === 'medium' ? 400 : 200}
                className={`absolute inset-0 bg-gradient-to-br w-full h-full transition-transform duration-600 group-hover:scale-[1.06]`}
                loading="lazy"
              />
              {/* Hover overlay */}
              <figcaption className="absolute inset-0 flex items-end rounded-[22px] bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">{item.label}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
