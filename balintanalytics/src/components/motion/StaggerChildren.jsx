import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

export function StaggerContainer({
  children,
  stagger = 0.08,
  once = true,
  threshold = 0.1,
  className = '',
  style
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  style
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
      }}
    >
      {children}
    </motion.div>
  )
}
