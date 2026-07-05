import { useRef, useState, useCallback, useEffect } from 'react'
import useMouseTilt from '../hooks/useMouseTilt.js'

/**
 * Event poster image with:
 * - 3D mouse-following tilt
 * - Circular spotlight reveal on hover
 * - Lazy loading with placeholder blur
 * - Glass border and floating effect
 */
export default function EventImage({ src, alt, accentColor }) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const spotlightRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  /* 3D tilt via custom hook */
  useMouseTilt(containerRef, { maxRotation: 12, smoothing: 0.08 })

  /* Spotlight follows mouse inside the image */
  const onMouseMove = useCallback((e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    containerRef.current.style.setProperty('--mx', `${x}%`)
    containerRef.current.style.setProperty('--my', `${y}%`)
  }, [])

  /* Clean up inline transform on unmount */
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        containerRef.current.style.transform = ''
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 cursor-none group"
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glass border container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(255,255,255,0.06)',
          boxShadow: `0 25px 60px -12px rgba(0,0,0,0.6), 0 0 40px ${accentColor}08`,
        }}
      >
        {/* Placeholder */}
        {!loaded && (
          <div className="absolute inset-0 img-placeholder rounded-2xl z-10" />
        )}

        {/* Main image */}
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`
            w-full aspect-[3/4] object-cover rounded-2xl
            transition-all duration-700 ease-out
            ${loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-lg'}
          `}
        />

        {/* Spotlight overlay — circular reveal on hover */}
        <div
          className={`
            absolute inset-0 rounded-2xl transition-opacity duration-500
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            background: 'rgba(0,0,0,0.35)',
          }}
        />
        <div
          ref={spotlightRef}
          className={`
            absolute inset-0 rounded-2xl spotlight-mask transition-opacity duration-500
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)`,
          }}
        >
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="w-full aspect-[3/4] object-cover rounded-2xl brightness-125 contrast-110"
            style={{ filter: 'brightness(1.3) contrast(1.1) saturate(1.1)' }}
          />
        </div>

        {/* Edge glow on hover */}
        <div
          className={`
            absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500
            ${isHovering ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            boxShadow: `inset 0 0 60px ${accentColor}10, 0 0 50px ${accentColor}08`,
          }}
        />
      </div>

      {/* Floating accent dot */}
      <div
        className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full animate-pulse-glow hidden lg:block"
        style={{ background: accentColor, filter: 'blur(4px)' }}
      />
    </div>
  )
}
