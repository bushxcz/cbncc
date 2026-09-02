import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { coreCouncil } from '../../data/coreCouncil';

gsap.registerPlugin(ScrollTrigger);

export default function CoreTeamSection({ onMemberClick }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const pinnedContentRef = useRef(null);
  const triggerRef = useRef(null);

  const total = coreCouncil.length - 1; // 6

  // Preload all core member images in parallel on mount so transitions are instant without lag
  useEffect(() => {
    coreCouncil.forEach((member) => {
      if (member.image) {
        const img = new Image();
        img.src = member.image;
      }
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pinnedContent = pinnedContentRef.current;
    if (!section || !pinnedContent) return;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${coreCouncil.length * 600}`,
        pin: pinnedContent,
        scrub: 0.5,
        snap: {
          snapTo: 1 / total,
          duration: { min: 0.25, max: 0.5 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Precise rounding guarantees no index is skipped during scroll
          const rawIdx = Math.round(self.progress * total);
          const nextIndex = Math.min(total, Math.max(0, rawIdx));
          setActiveSlide(nextIndex);
        },
      });

      triggerRef.current = st;
    }, section);

    return () => ctx.revert();
  }, [total]);

  const goToSlide = (idx) => {
    setActiveSlide(idx);
    if (triggerRef.current) {
      const targetProgress = idx / total;
      const scrollPos =
        triggerRef.current.start +
        targetProgress * (triggerRef.current.end - triggerRef.current.start);
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    }
  };

  const currentMember = coreCouncil[activeSlide] || coreCouncil[0];

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* Pinned Screen Container — Fits neatly in one viewport height */}
      <div
        ref={pinnedContentRef}
        className="w-full h-screen max-h-screen flex flex-col justify-center px-4 md:px-8 py-4 max-w-[1300px] mx-auto select-none"
      >
        {/* CORE TEAM Heading — Exact same size & style as Tech Team */}
        <div className="flex items-center justify-center gap-6 mb-4 lg:mb-6 shrink-0">
          <div className="h-px bg-white/20 w-full hidden md:block" />
          <h2 className="font-display-xl text-2xl md:text-4xl text-white shrink-0 uppercase tracking-wider text-center font-extrabold">
            CORE TEAM
          </h2>
          <div className="h-px bg-white/20 w-full hidden md:block" />
        </div>

        {/* Core Team Grid Layout — Desktop & Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full my-auto">
          
          {/* Left Column: 01 to 07 list — Bigger rows, legible Space Grotesk role tags, smooth transitions */}
          <div className="lg:col-span-7 flex flex-col space-y-2 sm:space-y-2.5">
            {coreCouncil.map((member, index) => {
              const isActive = activeSlide === index;
              return (
                <div
                  key={member.id}
                  onClick={() => {
                    goToSlide(index);
                    if (onMemberClick) onMemberClick(member);
                  }}
                  onMouseEnter={() => setActiveSlide(index)}
                  className={`py-3 sm:py-3.5 px-3 sm:px-4 flex items-center justify-between gap-4 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'opacity-100 translate-x-3'
                      : 'opacity-30 hover:opacity-75'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Number 01 to 07 — bigger & prominent */}
                    <span
                      className={`font-mono text-base sm:text-lg md:text-xl font-bold tracking-wider transition-colors duration-300 w-8 sm:w-10 ${
                        isActive ? 'text-cyan-400' : 'text-white/30'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Member Name — bigger & bold */}
                    <span
                      className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold font-display-xl uppercase tracking-tight transition-colors duration-300 truncate ${
                        isActive ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {member.name}
                    </span>
                  </div>

                  {/* Role Tag — Space Grotesk font, highly readable, clear contrast */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`font-body text-xs sm:text-sm font-semibold tracking-wide px-3 py-1 rounded-md transition-all duration-300 ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-950/60 shadow-sm'
                          : 'text-white/50 bg-white/[0.04]'
                      }`}
                    >
                      {member.role}
                    </span>
                    <span
                      className={`material-symbols-outlined transition-all duration-300 text-base ${
                        isActive ? 'text-cyan-400 translate-x-1' : 'text-white/20'
                      }`}
                    >
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Clean Solid Rectangular Photo Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              onClick={() => onMemberClick && onMemberClick(currentMember)}
              className="relative w-full max-w-[300px] sm:max-w-[330px] xl:max-w-[360px] aspect-[3/4] overflow-hidden bg-[#161b22] cursor-pointer shadow-2xl"
            >
              {/* Stacked Images — solid crossfade with gentle scale so it NEVER goes transparent */}
              {coreCouncil.map((member, index) => {
                const isActive = activeSlide === index;
                return (
                  <img
                    key={member.id}
                    src={member.image}
                    alt={member.name}
                    loading="eager"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-out ${
                      isActive
                        ? 'opacity-100 z-10 scale-100'
                        : 'opacity-0 z-0 pointer-events-none scale-105'
                    }`}
                  />
                );
              })}

              {/* Bottom Solid Frosted Banner with Member Details */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-20">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-body text-xs sm:text-sm font-bold tracking-wide text-cyan-300 uppercase">
                    {currentMember.role}
                  </span>
                  <span className="text-[11px] font-mono text-white/50 tracking-wider">
                    {String(activeSlide + 1).padStart(2, '0')} / 07
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-display-xl uppercase text-white tracking-tight leading-tight transition-all duration-300">
                  {currentMember.name}
                </h3>
                <p className="text-xs text-white/70 font-body mt-1 line-clamp-2 italic">
                  "{currentMember.quote}"
                </p>
                <div className="mt-2.5 flex items-center gap-1 text-[10px] font-mono text-white/40 uppercase tracking-wider hover:text-cyan-400 transition-colors">
                  <span>View profile</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll down hint & step navigation below the grid */}
        <div className="shrink-0 flex items-center justify-between text-[11px] font-mono text-white/40 pt-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              className="p-1 rounded hover:text-white disabled:opacity-20 transition-colors cursor-pointer flex items-center"
              aria-label="Previous member"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>
            <span className="text-white/80 font-medium">
              {String(activeSlide + 1).padStart(2, '0')} / 07 — {currentMember.name}
            </span>
            <button
              onClick={() => goToSlide(Math.min(total, activeSlide + 1))}
              disabled={activeSlide === total}
              className="p-1 rounded hover:text-white disabled:opacity-20 transition-colors cursor-pointer flex items-center"
              aria-label="Next member"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {coreCouncil.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === i ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Go to member ${i + 1}`}
              />
            ))}
          </div>

          <span className="uppercase tracking-widest text-[10px] hidden sm:inline">
            Scroll down to advance
          </span>
        </div>
      </div>
    </section>
  );
}
