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

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id={`event-${event.id}`}
      className={`
        desktop-section-${index}
        min-h-screen flex flex-col justify-center
        py-16 md:py-24 lg:py-0 relative
      `}
    >
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div ref={contentRef} className="flex flex-col gap-6 w-full max-w-lg">
        {/* Event number */}
        <div data-animate className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-text-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="h-px w-8 bg-white/10" />
        </div>

        {/* Event name */}
        <h2
          data-animate
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 tracking-tight leading-[1.05]"
        >
          {event.name}
        </h2>

        {/* Gold accent line */}
        <div
          data-animate
          className="h-[2px] w-16 rounded-full"
          style={{ background: event.color }}
        />

        {/* Description */}
        <p
          data-animate
          className="text-text-secondary text-sm md:text-base leading-relaxed font-light"
        >
          {event.description}
        </p>

        {/* Date & Venue */}
        <div data-animate className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
              Date
            </span>
            <span className="text-sm text-text-primary font-medium">
              {event.date}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted block mb-1">
              Venue
            </span>
            <span className="text-sm text-text-primary font-medium">
              {event.venue}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div data-animate className="flex flex-wrap gap-2 mt-1">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-full glass-card text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div data-animate className="mt-4">
          <button className="btn-premium" aria-label={`View more about ${event.name}`}>
            <span>View More</span>
            <HiArrowRight className="btn-arrow w-4 h-4" />
          </button>
        </div>

        {/* Mobile image reveal — only rendered on mobile/tablet */}
        <div className="mt-10 lg:hidden w-full">
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

