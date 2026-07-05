import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemberModal = ({ member, onClose }) => {
  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white text-black overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[600px]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors backdrop-blur-md"
            >
              <span className="material-symbols-outlined text-black font-bold">close</span>
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-full relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale opacity-90"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white relative">
              <span className="font-label-caps text-[12px] text-black/50 uppercase tracking-[0.2em] mb-4 block font-bold">
                {member.degree} | {member.batch}
              </span>
              
              <h3 className="font-headline-lg text-4xl md:text-[48px] text-black mb-2 leading-none uppercase font-black tracking-tight">
                {member.name}
              </h3>
              
              <p className="font-label-caps text-sm text-black/60 uppercase tracking-widest mb-8">
                {member.role}
              </p>
              
              <div className="h-[2px] bg-black/10 w-16 mb-8"></div>
              
              <p className="font-body-md text-black/80 text-lg leading-relaxed mb-8 flex-grow">
                {member.bio}
              </p>
              
              <div className="border-l-4 border-black pl-6 py-2">
                <p className="font-body-md italic text-black text-xl font-medium leading-snug">
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
