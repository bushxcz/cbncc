import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight } from 'react-icons/hi'
import EventImage from './EventImage.jsx'

gsap.registerPlugin(ScrollTrigger)

/**
 * EventSection renders the details of an event.
 * On desktop, it takes full screen height and displays the text details.
 * On mobile/tablet, it renders the event poster inline below the details.
 */
export default function EventSection({ event, index }) {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    /* Content stagger animation */
    const contentChildren = content.querySelectorAll('[data-animate]')

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      gsap.set(contentChildren, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      })
    })

    mm.add("(max-width: 1023px)", () => {
      gsap.set(contentChildren, {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
      })

      gsap.to(contentChildren, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.12,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={`event-${event.id}`}
      className={`event-sec desktop-section-${index}`}
    >
      {/* Subtle section divider */}
      <div className="event-sec-divider" />

      <div ref={contentRef} className="event-sec-content">
        {/* Event number */}
        <div data-animate className="event-sec-meta">
          <span className="event-sec-number">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="event-sec-line" />
        </div>

        {/* Event name */}
        <h2
          data-animate
          className="event-sec-title"
        >
          {event.name}
        </h2>

        {/* Gold accent line */}
        <div
          data-animate
          className="event-sec-accent-bar"
          style={{ background: event.color }}
        />

        {/* Description */}
        <p
          data-animate
          className="event-sec-description"
        >
          {event.description}
        </p>

        {/* Date & Venue */}
        <div data-animate className="event-sec-details">
          <div>
            <span className="event-detail-label">
              Date
            </span>
            <span className="event-detail-value">
              {event.date}
            </span>
          </div>
          <div>
            <span className="event-detail-label">
              Venue
            </span>
            <span className="event-detail-value">
              {event.venue}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div data-animate className="event-sec-tags">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="event-tag glass-card"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div data-animate className="event-sec-cta">
          <button className="btn-premium" aria-label={`View more about ${event.name}`}>
            <span>View More</span>
            <HiArrowRight className="btn-arrow w-4 h-4" />
          </button>
        </div>

        {/* Mobile image reveal — only rendered on mobile/tablet */}
        <div className="event-sec-mobile-image">
          <EventImage
            src={event.image}
            alt={`${event.name} event poster`}
            accentColor={event.color}
          />
        </div>
      </div>
    </section>
  )
}
