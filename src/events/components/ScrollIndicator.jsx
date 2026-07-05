import { motion } from 'framer-motion'

/**
 * Animated mouse scroll indicator at the bottom center of the hero.
 */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Mouse outline */}
      <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
        <div className="w-1 h-2.5 rounded-full bg-gold animate-scroll-wheel" />
      </div>

      <span className="text-xs tracking-[0.25em] uppercase text-text-muted font-light">
        Scroll Down
      </span>
    </motion.div>
  )
}
