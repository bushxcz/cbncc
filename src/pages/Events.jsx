import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useSmoothScroll from '../hooks/useSmoothScroll.js'
import EventsHero from '../components/EventsHero.jsx'
import EventSection from '../components/EventSection.jsx'
import MouseGlow from '../components/MouseGlow.jsx'
import EventImage from '../components/EventImage.jsx'
import events from '../data/events.js'
import '../styles/Events.css'

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
  const eventsLayoutRef = useRef(null)
  const eventsTextTrackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      const layout = eventsLayoutRef.current
      const textTrack = eventsTextTrackRef.current
      const imagePanels = gsap.utils.toArray('.events-image-panel')

      if (!layout || !textTrack || imagePanels.length === 0) return

      const setImageProgress = (progress) => {
        const total = events.length - 1
        const nextIndex = Math.min(total, Math.max(0, Math.round(progress * total)))
        setActiveIndex(nextIndex)

        imagePanels.forEach((panel, index) => {
          if (index === 0) {
            gsap.set(panel, { clipPath: 'circle(150% at 50% 50%)' })
            return
          }

          const segmentStart = (index - 1) / total
          const segmentEnd = index / total
          const localProgress = gsap.utils.clamp(
            0,
            1,
            (progress - segmentStart) / (segmentEnd - segmentStart)
          )

          gsap.set(panel, {
            clipPath: `circle(${localProgress * 150}% at 50% 50%)`,
          })
        })
      }

      gsap.set(textTrack, { y: 0 })
      setImageProgress(0)

      const tween = gsap.to(textTrack, {
        y: () => -(events.length - 1) * window.innerHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: layout,
          start: 'top top',
          end: () => `+=${(events.length - 1) * window.innerHeight}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setImageProgress(self.progress),
        },
      })

      return () => tween.kill()
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <div className="events-page-root">
      {/* Noise grain overlay */}
      <div className="noise-overlay animate-grain" />

      {/* Floating background particles */}
      <div
        ref={bgParticlesRef}
        className="events-bg-particles"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="events-bg-particle animate-float-slow"
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
      <div className="events-glow-blobs">
        <div
          className="events-glow-blob-1 animate-blob-1"
          style={{
            background: 'radial-gradient(circle, rgba(255,213,79,0.03) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="events-glow-blob-2 animate-blob-2"
          style={{
            background: 'radial-gradient(circle, rgba(187,134,252,0.02) 0%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Cursor glow */}
      <MouseGlow />

      {/* Hero */}
      <EventsHero />

      {/* Event sections dual layout */}
      <main className="events-main-container" ref={eventsLayoutRef}>
        <div className="events-layout-row">
          {/* Left Column (scrollable text details) — 55-60% */}
          <div className="events-left-column" ref={eventsTextTrackRef}>
            {events.map((event, index) => (
              <EventSection key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Right Column (sticky image frame - desktop only) — 40-45% */}
          <div className="events-right-column">
            <div className="events-image-wrapper">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`events-image-panel event-image-panel-${index}`}
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
      <footer className="events-footer">
        <p className="events-footer-text">
          © 2026 Event Showcase — All Rights Reserved
        </p>
      </footer>
    </div>
  )
}
