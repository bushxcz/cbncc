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
            background: 'radial-gradient(circle, rgba(255,213,79,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="events-hero-blob-2 animate-blob-2"
          style={{
            background: 'radial-gradient(circle, rgba(255,213,79,0.06) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Floating particle — right side */}
      <motion.div
        className="events-hero-particle-1 animate-float"
        style={{ filter: 'blur(1px)', boxShadow: '0 0 30px rgba(255,213,79,0.4)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />

      {/* Additional small particles */}
      <motion.div
        className="events-hero-particle-2 animate-float-slow"
        style={{ filter: 'blur(0.5px)', animationDelay: '2s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
      <motion.div
        className="events-hero-particle-3 animate-float-slow"
        style={{ filter: 'blur(1px)', animationDelay: '4s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />

      {/* Main content */}
      <div className="events-hero-content">
        <motion.h1
          className="events-hero-title"
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Our Events
        </motion.h1>

        {/* Gold underline */}
        <motion.div
          className="events-hero-underline"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="events-hero-subtitle"
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
