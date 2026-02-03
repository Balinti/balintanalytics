import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2,
  className = ''
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const prefersReducedMotion = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setCount(target)
      return
    }

    let start = 0
    const startTime = performance.now()
    const durationMs = duration * 1000

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
