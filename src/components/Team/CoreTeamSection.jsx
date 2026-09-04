import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { coreCouncil } from '../../data/coreCouncil';
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  HoverSliderImage,
} from './HoverSlider';

gsap.registerPlugin(ScrollTrigger);

export default function CoreTeamSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  const pinnedRef = useRef(null);

  const total = coreCouncil.length; // 7

  // Preload all core member images
  useEffect(() => {
    coreCouncil.forEach((member) => {
      if (member.image) {
        const img = new Image();
        img.src = member.image;
      }
    });
  }, []);

  // Desktop: GSAP ScrollTrigger pin + scrub to cycle through slides
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const section = sectionRef.current;
      const pinned = pinnedRef.current;
      if (!section || !pinned) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${total * 550}`,
        pin: pinned,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (total - 1),
          duration: { min: 0.25, max: 0.5 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const rawIdx = Math.round(self.progress * (total - 1));
          setActiveSlide(Math.min(total - 1, Math.max(0, rawIdx)));
        },
      });
    });

    return () => mm.revert();
  }, [total]);

  const currentMember = coreCouncil[activeSlide] || coreCouncil[0];

  return (
    <>
      {/* ── Scoped styles ── */}
      <style>{`
        .core-slider-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }
        .core-slider-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 16px;
          cursor: default;
          transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1);
          user-select: none;
        }
        .core-slider-item.active {
          opacity: 1;
          transform: translateX(8px);
        }
        .core-slider-item:not(.active) {
          opacity: 0.25;
        }
        .core-slider-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.08em;
          width: 36px;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }
        .core-slider-number.active { color: #ffffff; }
        .core-slider-number:not(.active) { color: rgba(255,255,255,0.3); }

        .core-slider-name {
          font-family: 'Sora', sans-serif;
          font-size: clamp(22px, 3vw, 38px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .core-slider-role-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 4px 12px;
          border-radius: 6px;
          flex-shrink: 0;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .core-slider-role-tag.active {
          color: #ffffff;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .core-slider-role-tag:not(.active) {
          color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.03);
          border: 1px solid transparent;
        }

        /* Image frame */
        .core-image-frame {
          position: relative;
          width: 100%;
          max-width: 360px;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: #161b22;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }
        .core-image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid rgba(255,255,255,0.1);
          z-index: 2;
          pointer-events: none;
        }

        /* Bottom info bar on image */
        .core-image-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7) 60%, transparent);
          z-index: 20;
        }

        /* Scroll hint bar */
        .core-scroll-hint {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* Progress dots */
        .core-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: all 0.3s ease;
        }
        .core-dot.active {
          width: 20px;
          border-radius: 100px;
          background: #ffffff;
        }

        /* ── Mobile: staggered grid ── */
        .core-mobile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 12px;
          max-width: 420px;
          margin: 0 auto;
        }
        .core-mobile-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #161b22;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .core-mobile-card:nth-child(odd) {
          margin-top: 40px;
        }
        .core-mobile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(15%);
        }
        .core-mobile-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px 14px;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%);
        }
        .core-mobile-name {
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .core-mobile-role {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.6);
          margin-top: 3px;
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* MOBILE (< 1024px): staggered photo grid                  */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="block lg:hidden relative w-full px-5 pt-12 pb-20 overflow-hidden">
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px bg-white/20 flex-1" />
          <h2 className="font-display-xl text-2xl sm:text-3xl text-white shrink-0 uppercase tracking-wider text-center font-extrabold">
            CORE TEAM
          </h2>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <div className="core-mobile-grid">
          {coreCouncil.map((member) => (
            <div key={member.id} className="core-mobile-card">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                className="core-mobile-img"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600';
                }}
              />
              <div className="core-mobile-overlay">
                <span className="block h-px w-5 bg-white/60 mb-2" />
                <h3 className="core-mobile-name">{member.name}</h3>
                <p className="core-mobile-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* DESKTOP (≥ 1024px): Pinned scroll HoverSlider             */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section ref={sectionRef} className="hidden lg:block relative w-full">
        <div
          ref={pinnedRef}
          className="w-full h-screen max-h-screen flex flex-col justify-center px-4 md:px-8 py-4 max-w-[1300px] mx-auto select-none"
        >
          {/* Section heading */}
          <div className="flex items-center justify-center gap-6 mb-4 lg:mb-6 shrink-0">
            <div className="h-px bg-white/20 w-full hidden md:block" />
            <h2 className="font-display-xl text-2xl md:text-4xl text-white shrink-0 uppercase tracking-wider text-center font-extrabold">
              CORE TEAM
            </h2>
            <div className="h-px bg-white/20 w-full hidden md:block" />
          </div>

          {/* HoverSlider — controlled by scroll */}
          <HoverSlider
            activeSlide={activeSlide}
            onSlideChange={setActiveSlide}
            className="grid grid-cols-12 gap-12 items-center w-full my-auto"
          >
            {/* Left: Name list with stagger text animation */}
            <div className="col-span-7 core-slider-row">
              {coreCouncil.map((member, index) => {
                const isActive = activeSlide === index;
                return (
                  <div
                    key={member.id}
                    className={`core-slider-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="flex items-center gap-6 min-w-0">
                      <span className={`core-slider-number ${isActive ? 'active' : ''}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="core-slider-name">
                        <TextStaggerHover text={member.name} index={index} />
                      </span>
                    </div>
                    <span className={`core-slider-role-tag ${isActive ? 'active' : ''}`}>
                      {member.role}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Image stack with clip-path reveal */}
            <div className="col-span-5 flex justify-center items-center">
              <div className="core-image-frame">
                <HoverSliderImageWrap className="w-full h-full">
                  {coreCouncil.map((member, index) => (
                    <HoverSliderImage
                      key={member.id}
                      index={index}
                      imageUrl={member.image}
                      src={member.image}
                      alt={member.name}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  ))}
                </HoverSliderImageWrap>

                {/* Bottom info overlay */}
                <div className="core-image-info">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-body text-xs sm:text-sm font-bold tracking-wide text-white/80 uppercase">
                      {currentMember.role}
                    </span>
                    <span className="text-[11px] font-mono text-white/50 tracking-wider">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-display-xl uppercase text-white tracking-tight leading-tight">
                    {currentMember.name}
                  </h3>
                  <p className="text-xs text-white/70 font-body mt-1 line-clamp-2 italic">
                    "{currentMember.quote}"
                  </p>
                </div>
              </div>
            </div>
          </HoverSlider>

          {/* Scroll hint & progress dots */}
          <div className="core-scroll-hint shrink-0">
            <span className="text-white/70 font-medium">
              {String(activeSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')} — {currentMember.name}
            </span>

            <div className="flex items-center gap-2">
              {coreCouncil.map((_, i) => (
                <div
                  key={i}
                  className={`core-dot ${activeSlide === i ? 'active' : ''}`}
                />
              ))}
            </div>

            <span className="uppercase tracking-widest text-[10px]">
              Scroll down to advance (01 &rarr; {String(total).padStart(2, '0')})
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
