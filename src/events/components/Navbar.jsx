import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

/**
 * Premium glassmorphic navbar.
 * Left: Brand logo "CBNCC".
 * Right: Navigation links (ABOUT US, TEAM, ALUMNI, EVENTS, FAQ, CONTACT US).
 * Mobile: Fully responsive hamburger overlay menu.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'ABOUT US', href: '#about' },
    { name: 'TEAM', href: '#team' },
    { name: 'ALUMNI', href: '#alumni' },
    { name: 'EVENTS', href: '#events', active: true },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT US', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[9990] py-5 px-6 md:px-12 lg:px-20 transition-all duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 md:px-8 rounded-full border border-white/5 bg-black/20 backdrop-blur-md">
          {/* Brand Logo */}
          <a
            href="/"
            className="text-xl md:text-2xl font-display font-900 tracking-wider text-text-primary hover:text-gold transition-colors duration-300 flex items-center gap-1.5"
          >
            CBNCC
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  text-[11px] tracking-[0.15em] font-medium transition-all duration-300 relative py-1
                  ${link.active ? 'text-gold' : 'text-text-secondary hover:text-text-primary'}
                `}
              >
                {link.name}
                {/* Active Link Dot */}
                {link.active && (
                  <motion.span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    layoutId="nav-active-indicator"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary hover:text-gold p-1 transition-colors z-[9995]"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-bg/95 backdrop-blur-xl z-[9985] flex flex-col justify-center px-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          >
            {/* Background Gradient Blob inside Drawer */}
            <div
              className="absolute -top-1/4 -right-1/4 w-[300px] h-[300px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255,213,79,0.06) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    text-3xl font-display font-700 tracking-wide transition-colors
                    ${link.active ? 'text-gold' : 'text-text-secondary hover:text-text-primary'}
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
