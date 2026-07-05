import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useSmoothScroll from '../hooks/useSmoothScroll.js'
import Hero from '../components/Hero.jsx'
import EventSection from '../components/EventSection.jsx'
import MouseGlow from '../components/MouseGlow.jsx'
import EventImage from '../components/EventImage.jsx'
import events from '../data/events.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Main Events page.
 * Composes Hero + Event sections with smooth scrolling,
 * animated background, noise overlay, and cursor glow.
 * Desktop: Implements a sticky pinned frame layout where the right column remains fixed
 * and stacked event posters reveal themselves using a circular slide mask transition.
 */
export default function Events() {
  useSmoothScroll()
  const bgParticlesRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // Only run sticky scroll reveal animation on desktop (lg screens)
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      events.forEach((_, i) => {
        // Track the active section index for pointer-events / hover state
        ScrollTrigger.create({
          trigger: `.desktop-section-${i}`,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(i)
            }
          },
        })

        // Animate circular slide mask for stacked posters (excluding the first one which is background)
        if (i === 0) return

        const targetPanel = document.querySelector(`.event-image-panel-${i}`)
        if (!targetPanel) return

        gsap.fromTo(
          targetPanel,
          {
            clipPath: 'circle(0% at 50% 120%)',
          },
          {
            clipPath: 'circle(150% at 50% 50%)',
            ease: 'none',
            scrollTrigger: {
              trigger: `.desktop-section-${i}`,
              start: 'top bottom', // Start revealing as the text card starts entering from the bottom
              end: 'top 10%',      // Fully reveal when the text card is almost centered
              scrub: true,
            },
          }
        )
      })
    })

    return () => {
      mm.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-bg">
      {/* Noise grain overlay */}
      <div className="noise-overlay animate-grain" />

      {/* Floating background particles */}
      <div
        ref={bgParticlesRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${10 + i * 15}%`,
              top: `${15 + (i * 37) % 70}%`,
              background: 'rgba(255,213,79,0.15)',
              filter: 'blur(1px)',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient blobs for background depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full animate-blob-1"
          style={{
            background: 'radial-gradient(circle, rgba(255,213,79,0.03) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full animate-blob-2"
          style={{
            background: 'radial-gradient(circle, rgba(187,134,252,0.02) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Cursor glow */}
      <MouseGlow />

      {/* Hero */}
      <Hero />

      {/* Event sections dual layout */}
      <main className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-[50px]">
        <div className="flex flex-col lg:flex-row lg:gap-[100px] relative">
          {/* Left Column (scrollable text details) — 55-60% */}
          <div className="w-full lg:w-[55%] shrink-0 lg:pl-[80px]">
            {events.map((event, index) => (
              <EventSection key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Right Column (sticky image frame - desktop only) — 40-45% */}
          <div className="hidden lg:flex lg:flex-1 h-screen sticky top-0 items-center justify-end pr-2 pointer-events-none z-20">
            <div className="relative w-full max-w-[440px] aspect-[3/4]">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`absolute inset-0 event-image-panel-${index}`}
                  style={{
                    zIndex: (index + 1) * 10,
                    clipPath: index === 0 ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 120%)',
                    pointerEvents: index === activeIndex ? 'auto' : 'none',
                    willChange: 'clip-path',
                  }}
                >
                  <EventImage
                    src={event.image}
                    alt={event.name}
                    accentColor={event.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center border-t border-white/5 mt-20">
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase font-light">
          © 2026 Event Showcase — All Rights Reserved
        </p>
      </footer>
    </div>
  )
}

