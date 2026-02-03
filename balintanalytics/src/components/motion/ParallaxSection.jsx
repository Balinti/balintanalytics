import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxSection({
  children,
  speed = 0.2,
  className = '',
  style
}) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <motion.div className={className} style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}
