import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator.jsx';

export default function TeamHero() {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 sm:py-0 overflow-hidden">
      {/* Background ambient gradient glow (static, no flickering) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-xs font-mono text-white/70 uppercase tracking-[0.3em] mb-4 text-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04]"
        >
          Backbone of This Club
        </motion.p>

        <motion.h1
          className="font-display-xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight leading-none uppercase text-center"
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          MEET OUR TEAM
        </motion.h1>

        {/* White gradient underline */}
        <motion.div
          className="h-[3px] rounded-full mx-auto mb-6"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)' }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 140, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="font-body text-white/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          The visionary minds, engineers, designers, and organizers dedicated to building high-impact tech culture and empowering student innovators at Netaji Subhas University.
        </motion.p>
      </div>

      {/* Animated scroll down indicator with mouse wheel — safe non-clashing margin on mobile */}
      <div className="mt-10 mb-2 sm:mb-0 sm:mt-0 sm:absolute sm:bottom-8 left-1/2 sm:-translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
        <ScrollIndicator />
      </div>
    </section>
  );
}
