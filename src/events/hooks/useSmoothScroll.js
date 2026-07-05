import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

/**
 * Initialises Lenis smooth scroll and hooks it into
 * requestAnimationFrame. Cleans up on unmount.
 */
export default function useSmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return lenisRef
}
