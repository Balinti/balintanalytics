import { memo } from 'react'

const ServiceCard = memo(function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      {image && (
        <div className="service-card-image">
          <img src={image} alt={title} loading="lazy" />
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
