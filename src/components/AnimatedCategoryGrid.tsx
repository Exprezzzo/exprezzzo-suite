'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type Category = {
  id: string
  name: string
  icon?: string
  image?: string
  count?: number
}

interface AnimatedCategoryGridProps {
  categories: Category[]
}

export default function AnimatedCategoryGrid({ categories }: AnimatedCategoryGridProps) {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  // Individual card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="py-16 px-4 relative">
      {/* Background Vegas Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-400">
            Discover the best Vegas has to offer
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <Link
                href={`/category/${category.id}`}
                className="group relative block overflow-hidden rounded-2xl aspect-square"
              >
                {/* Animated Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(0deg, #FFD700, #EC4899, #6B46C1)',
                      'linear-gradient(180deg, #FFD700, #EC4899, #6B46C1)',
                      'linear-gradient(360deg, #FFD700, #EC4899, #6B46C1)',
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    padding: '2px',
                    borderRadius: '1rem'
                  }}
                >
                  <div className="absolute inset-[2px] bg-black rounded-2xl" />
                </motion.div>
                
                {/* Main Content Container */}
                <div className="relative z-10 h-full rounded-2xl overflow-hidden bg-gray-900">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Category Image with Parallax Effect */}
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 }
                    }}
                  >
                    {category.image ? (
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                    )}
                  </motion.div>
                  
                  {/* Neon Glow Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-yellow-500/20" />
                    <div className="absolute inset-0 backdrop-blur-sm" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-4">
                    {/* Animated Icon */}
                    <motion.div 
                      className="text-4xl mb-2"
                      animate={{
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    >
                      {category.icon || '🎰'}
                    </motion.div>
                    
                    {/* Category Name with Glow */}
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    {/* Venue Count */}
                    <motion.p 
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {category.count || 0} venues
                    </motion.p>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}