import React from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from '../ScrollIndicator.jsx';

export default function TeamHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background ambient gradient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 70%)' }}
        />
      </div>

      {/* Floating subtle particles */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full pointer-events-none"
        style={{ background: 'rgba(56, 189, 248, 0.6)', filter: 'blur(0.5px)', boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full pointer-events-none"
        style={{ background: 'rgba(255, 255, 255, 0.4)', filter: 'blur(1px)' }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono text-cyan-400 uppercase tracking-[0.4em] mb-4 text-center"
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

        {/* Cyan gradient underline matching Events page */}
        <motion.div
          className="h-[3px] rounded-full mx-auto mb-6"
          style={{ background: 'linear-gradient(to right, transparent, rgba(56, 189, 248, 0.8), transparent)' }}
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

      {/* Animated scroll down indicator with mouse wheel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}
