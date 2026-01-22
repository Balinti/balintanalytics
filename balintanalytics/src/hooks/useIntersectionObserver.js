import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook for intersection observer - useful for lazy loading and animations
 * Advanced React pattern: Custom hooks with refs and cleanup
 */
export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true
  } = options

  const [entry, setEntry] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const frozen = useRef(false)

  const updateEntry = useCallback(([entry]) => {
    setEntry(entry)

    if (entry.isIntersecting) {
      setIsVisible(true)
      if (freezeOnceVisible) {
        frozen.current = true
      }
    } else if (!freezeOnceVisible) {
      setIsVisible(false)
    }
  }, [freezeOnceVisible])

  useEffect(() => {
    const node = elementRef.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen.current || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, root, rootMargin, updateEntry])

  return { ref: elementRef, entry, isVisible }
}

export default useIntersectionObserver
