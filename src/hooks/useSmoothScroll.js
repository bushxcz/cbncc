import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Initialises Lenis smooth scroll and hooks it into
 * requestAnimationFrame and GSAP ScrollTrigger. Cleans up on unmount.
 */
export default function useSmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1,
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return lenisRef
}
