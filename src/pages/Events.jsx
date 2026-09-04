import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useSmoothScroll from '../hooks/useSmoothScroll.js'
import EventsHero from '../components/EventsHero.jsx'
import EventSection from '../components/EventSection.jsx'
import EventImage from '../components/EventImage.jsx'
import CtaFooterSection from '../components/CtaFooterSection.jsx'
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
          scrub: 0.4,
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
    <div className="events-page-root w-full bg-[#0d1117] text-white min-h-screen">
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

      {/* Footer Section — Shared across Home, Team, and Events */}
      <CtaFooterSection />
    </div>
  )
}
