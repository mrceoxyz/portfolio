import FloatingIcons from './FloatingIcons';
import HeroCarousel from './HeroCarousel';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b
        from-background via-background to-muted" />

      {/* Floating icons */}
      <FloatingIcons />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />

      {/* Content */}
      <HeroCarousel />
    </section>
  );
}
