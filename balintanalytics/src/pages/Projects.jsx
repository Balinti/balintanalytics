import { useState, useEffect, useMemo } from 'react'
import '../styles/pages.css'

const PROJECTS = [
  {
    id: 1,
    title: "Real Estate Analytics Platform",
    description: "Comprehensive MLS data integration with predictive analytics for property market analysis",
    services: ["Data Engineering", "Web Analytics", "Predictive Modeling"],
    image: '/balintanalytics/images/projects/real-estate.webp'
  },
  {
    id: 2,
    title: "E-Commerce Performance Dashboard",
    description: "Real-time analytics dashboard tracking conversion rates, ROAS, and customer behavior",
    services: ["Web Analytics", "Data Visualization", "Performance Tracking"],
    image: '/balintanalytics/images/projects/ecommerce.webp'
  },
  {
    id: 3,
    title: "Startup Financial Modeling",
    description: "Custom financial models and forecasting tools for growing startups",
    services: ["Financial Modeling", "Data Architecture", "Advisory"],
    image: '/balintanalytics/images/projects/startup-finance.webp'
  },
  {
    id: 4,
    title: "A/B Testing Framework",
    description: "Built comprehensive experimentation platform for major e-commerce client",
    services: ["A/B Testing", "Statistical Analysis", "Implementation"],
    image: '/balintanalytics/images/projects/ab-testing-framework.webp'
  },
  {
    id: 5,
    title: "Fraud Detection System",
    description: "Machine learning models to identify and prevent fraudulent transactions",
    services: ["Fraud Analytics", "Machine Learning", "Data Engineering"],
    image: '/balintanalytics/images/projects/fraud-detection.webp'
  },
  {
    id: 6,
    title: "Marketing Attribution Model",
    description: "Multi-touch attribution analysis across digital marketing channels",
    services: ["Marketing Analytics", "Statistical Modeling", "Consulting"],
    image: '/balintanalytics/images/projects/marketing-attribution.webp'
  }
]

export default function Projects() {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    PROJECTS.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 150)
    })
  }, [])

  const projectCards = useMemo(() =>
    PROJECTS.map((project, index) => (
      <div
        key={project.id}
        className={`project-card fade-in ${visibleCards.includes(index) ? 'visible' : ''}`}
      >
        <div className="project-image">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-services">
            {project.services.map((service, idx) => (
              <span key={idx} className="service-badge">{service}</span>
            ))}
          </div>
        </div>
      </div>
    )), [visibleCards]
  )

  return (
    <div className="projects">
      <section className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>A selection of successful engagements and solutions we've delivered</p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projectCards}
          </div>
        </div>
      </section>
    </div>
  )
}
