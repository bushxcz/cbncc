import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator.jsx'

/**
 * Full-screen hero section with animated heading, gold underline,
 * floating particle, and scroll indicator.
 */
export default function EventsHero() {
  return (
    <section
      id="hero"
      className="events-hero"
    >
      {/* Gradient blobs */}
      <div className="events-hero-blobs">
        <div
          className="events-hero-blob-1 animate-blob-1"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="events-hero-blob-2 animate-blob-2"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Floating particle — right side */}
      <motion.div
        className="events-hero-particle-1 animate-float"
        style={{ filter: 'blur(1px)', boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)', background: 'rgba(255, 255, 255, 0.8)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Additional small particles */}
      <motion.div
        className="events-hero-particle-2 animate-float-slow"
        style={{ filter: 'blur(0.5px)', animationDelay: '2s', background: 'rgba(56, 189, 248, 0.4)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="events-hero-particle-3 animate-float-slow"
        style={{ filter: 'blur(1px)', animationDelay: '4s', background: 'rgba(255, 255, 255, 0.3)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />

      {/* Main content */}
      <div className="events-hero-content max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono text-cyan-400 uppercase tracking-[0.4em] mb-4 text-center"
        >
          Experiences &amp; Gatherings
        </motion.p>

        <motion.h1
          className="font-display-xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight leading-none uppercase text-center"
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          OUR EVENTS
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          className="events-hero-underline"
          style={{ background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.8), transparent)' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 140, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="font-body-md text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-center leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Curated experiences, hackathons, and technical summits that push boundaries
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
