import { memo } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

/**
 * Service Card component with lazy loading animation
 * Advanced React patterns: memo, custom hooks, intersection observer
 */
const ServiceCard = memo(function ServiceCard({ title, description, image, delay = 0 }) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true
  })

  return (
    <div
      ref={ref}
      className={`service-card ${isVisible ? 'service-card-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {image && (
        <div className="service-card-image">
          <img
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
      )}
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
})

export default ServiceCard
