import { motion } from 'framer-motion'

/**
 * Animated mouse scroll indicator at the bottom center of the hero.
 */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Mouse outline */}
      <div className="scroll-indicator-mouse">
        <div className="scroll-indicator-wheel animate-scroll-wheel" />
      </div>

      <span className="scroll-indicator-text">
        Scroll Down
      </span>
    </motion.div>
  )
}
