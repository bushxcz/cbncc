import { useEffect, useRef } from 'react'

/**
 * Applies a vertical parallax offset to the target ref
 * based on scroll position. Speed controls the intensity.
 */
export default function useParallax(targetRef, speed = 0.3) {
  const rafId = useRef(null)

  useEffect(() => {
    const el = targetRef.current
    if (!el) return

    function update() {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const visible = rect.top < windowH && rect.bottom > 0

      if (visible) {
        const center = rect.top + rect.height / 2 - windowH / 2
        const offset = center * speed
        el.style.transform = `translateY(${offset.toFixed(1)}px)`
      }

      rafId.current = requestAnimationFrame(update)
    }

    rafId.current = requestAnimationFrame(update)

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [targetRef, speed])
}
