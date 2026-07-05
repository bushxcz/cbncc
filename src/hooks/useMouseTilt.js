import { useRef, useEffect, useCallback } from 'react'

/**
 * Returns a ref containing { x, y } (normalized -1..1) that tracks
 * how far the cursor is from the center of the target element.
 * Uses requestAnimationFrame for smooth 60fps updates.
 */
export default function useMouseTilt(targetRef, { maxRotation = 12, smoothing = 0.08 } = {}) {
  const tilt = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const rafId = useRef(null)
  const isHovering = useRef(false)

  const animate = useCallback(() => {
    const t = tilt.current
    t.x += (t.targetX - t.x) * smoothing
    t.y += (t.targetY - t.y) * smoothing

    if (targetRef.current) {
      const rx = (t.y * maxRotation).toFixed(2)
      const ry = (-t.x * maxRotation).toFixed(2)
      const tz = (Math.abs(t.x) + Math.abs(t.y)) * 10
      const s = 1 + (Math.abs(t.x) + Math.abs(t.y)) * 0.02

      targetRef.current.style.transform =
        `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz.toFixed(1)}px) scale(${s.toFixed(3)})`
    }

    rafId.current = requestAnimationFrame(animate)
  }, [maxRotation, smoothing, targetRef])

  useEffect(() => {
    const el = targetRef.current
    if (!el) return

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      tilt.current.targetX = ((e.clientX - cx) / (rect.width / 2))
      tilt.current.targetY = ((e.clientY - cy) / (rect.height / 2))
    }

    const onMouseEnter = () => {
      isHovering.current = true
      rafId.current = requestAnimationFrame(animate)
    }

    const onMouseLeave = () => {
      isHovering.current = false
      tilt.current.targetX = 0
      tilt.current.targetY = 0
      // Keep animating to smoothly return to 0
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mouseleave', onMouseLeave)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [targetRef, animate])

  return tilt
}
