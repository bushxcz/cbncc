import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator.jsx'

/**
 * Full-screen hero section with animated heading, gold underline,
 * floating particle, and scroll indicator.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full animate-blob-1 opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,213,79,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full animate-blob-2 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,213,79,0.06) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Floating particle — right side */}
      <motion.div
        className="absolute right-[12%] top-[30%] w-3 h-3 rounded-full bg-gold/60 animate-float hidden md:block"
        style={{ filter: 'blur(1px)', boxShadow: '0 0 30px rgba(255,213,79,0.4)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Additional small particles */}
      <motion.div
        className="absolute right-[18%] top-[55%] w-1.5 h-1.5 rounded-full bg-gold/30 animate-float-slow hidden md:block"
        style={{ filter: 'blur(0.5px)', animationDelay: '2s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="absolute left-[15%] bottom-[25%] w-2 h-2 rounded-full bg-gold/20 animate-float-slow hidden lg:block"
        style={{ filter: 'blur(1px)', animationDelay: '4s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-800 tracking-tight leading-none text-text-primary"
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Our Events
        </motion.h1>

        {/* Gold underline */}
        <motion.div
          className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="mt-6 text-text-secondary text-sm md:text-base tracking-wide max-w-md mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Curated experiences that push boundaries
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
