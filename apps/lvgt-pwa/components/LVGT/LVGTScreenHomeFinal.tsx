'use client';

import { motion } from 'framer-motion';

const categories = {
  restaurants: [
    'Mediterranean', 'American', 'Sandwiches / Subs', 'Food Court',
    'Fine Dining', 'Casual Dining', 'Fast Food', 'Breakfast & Brunch',
  ],
  nightlife: [
    'Nightclub', 'Bar / Gastropub', 'Lounge', 'Sports Bar', 'Rooftop Bar', 'Speakeasy',
  ],
  entertainment: [
    'Shows', 'Concerts', 'Comedy', 'Magic Shows', 'Adult Entertainment', 'Live Music Venues',
  ],
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-royalPurple mb-3">{title}</h2>
    <div className="overflow-x-auto flex space-x-4 pb-2">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="min-w-[200px] h-28 bg-white/10 text-white rounded-xl p-4 shadow hover:bg-white/20 transition"
          whileHover={{ scale: 1.05 }}
        >
          <span className="block text-sm font-semibold">{item}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default function ScreenHomeFinal() {
  return (
    <div className="min-h-screen bg-background text-white px-4 py-6">
      {/* Vegas Neon Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-extrabold text-[var(--logo-text-glow-color,#D40000)] tracking-widest drop-shadow-[0_0_6px_var(--logo-border-glow-color,#FFD700)] animate-pulse">
          LAS VEGAS GOOD TIMES
        </h1>
        <p className="text-sm text-royalPurple mt-2">
          Find your zone. Book your vibe.
        </p>
      </motion.div>

      {/* Category Sections */}
      {Object.entries(categories).map(([cat, subcats]) => (
        <Section key={cat} title={cat.toUpperCase()} items={subcats} />
      ))}

      {/* Footer Nav Placeholder */}
      <footer className="mt-12 text-center text-xs text-white/60">
        © 2025 LVGT – Built with Raptor Suite 🔥
      </footer>
    </div>
  );
}
