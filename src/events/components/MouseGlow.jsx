import { useEffect, useRef } from 'react'

/**
 * A golden glowing orb that follows the mouse cursor.
 * Uses mix-blend-mode: screen for a premium glow effect.
 */
export default function MouseGlow() {
  const glowRef = useRef(null)
  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      pos.current.targetX = e.clientX
      pos.current.targetY = e.clientY
    }

    function animate() {
      const p = pos.current
      p.x += (p.targetX - p.x) * 0.08
      p.y += (p.targetY - p.y) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${p.x - 150}px, ${p.y - 150}px)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{ willChange: 'transform' }}
    >
      <div
        className="w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,213,79,0.12) 0%, rgba(255,213,79,0.04) 40%, transparent 70%)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}
