'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroSlides } from './HeroSlides';

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[index];

  return (
    <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {slide.title}
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            {slide.description}
          </p>

          <button className="mt-8 inline-flex items-center justify-center rounded-xl
            bg-primary px-8 py-3 text-primary-foreground font-medium
            hover:opacity-90 transition">
            {slide.cta}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
