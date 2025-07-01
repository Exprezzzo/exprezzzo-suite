// apps/lvgt-pwa/components/LVGT/LVGTHeroBanner.tsx
'use client'

import { motion } from 'framer-motion'

export default function LVGTHeroBanner() {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold text-center mb-6"
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 1.8,
        ease: 'easeInOut',
      }}
    >
      <span className="text-red-600">LAS VEGAS </span>
      <span className="text-yellow-400">GOOD TIMES</span>
    </motion.h1>
  )
}
