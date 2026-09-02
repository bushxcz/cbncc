import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemberModal = ({ member, onClose }) => {
  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#161b22] text-white border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-[550px] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-md cursor-pointer"
              title="Close"
            >
              <span className="material-symbols-outlined text-white text-lg">close</span>
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-black">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#161b22]" />
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-[#161b22] relative overflow-y-auto">
              <span className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3 block font-bold">
                {member.degree} | {member.batch}
              </span>
              
              <h3 className="font-display-xl text-3xl md:text-4xl text-white mb-1 uppercase font-black tracking-tight">
                {member.name}
              </h3>
              
              <p className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6">
                {member.role}
              </p>
              
              <div className="h-px bg-white/15 w-16 mb-6"></div>
              
              <p className="text-white/80 text-base leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>
              
              <div className="border-l-2 border-cyan-400 pl-4 py-1">
                <p className="italic text-white/90 text-sm font-medium leading-snug">
                  "{member.quote}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MemberModal;
