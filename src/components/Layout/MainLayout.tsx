import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bars3Icon, 
  XMarkIcon, 
  SparklesIcon,
  MapPinIcon,
  CalendarIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface MainLayoutProps {
  children: React.ReactNode
}

// Fix TypeScript issue with motion.header
const MotionHeader = motion.header

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: SparklesIcon },
    { name: 'Discover', href: '/discover', icon: MagnifyingGlassIcon },
    { name: 'Events', href: '/events', icon: CalendarIcon },
    { name: 'Locations', href: '/locations', icon: MapPinIcon },
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-vegas-black via-vegas-black-light to-vegas-black">
      {/* Header with animation */}
      <MotionHeader
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-vegas-black/95 backdrop-blur-md border-b border-vegas-gold/20"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <a href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-vegas-gradient p-2 shadow-neon-gold">
                    <SparklesIcon className="h-6 w-6 text-white animate-pulse" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-vegas-gold to-vegas-purple bg-clip-text text-transparent">
                    Las Vegas Good Times
                  </h1>
                  <p className="text-sm text-vegas-gold/80 font-body">Luxury Concierge</p>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 text-white hover:text-vegas-gold transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-body font-medium">{item.name}</span>
                </motion.a>
              ))}
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="hidden sm:flex items-center space-x-2 rounded-full bg-vegas-gradient px-4 py-2 text-white font-body font-medium shadow-neon-gold"
                whileHover={{ scale: 1.05 }}
              >
                <UserCircleIcon className="h-5 w-5" />
                <span>Sign In</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                type="button"
                className="md:hidden rounded-md p-2 text-white hover:text-vegas-gold"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </nav>
      </MotionHeader>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-vegas-black border-t border-vegas-gold/20 mt-20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-vegas-gradient p-1.5">
                <SparklesIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-vegas-gold">
                Las Vegas Good Times
              </h3>
            </div>
            <p className="text-gray-400 font-body">
              © 2024 Las Vegas Good Times. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout