import '../styles/pages.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real Estate Analytics Platform",
      description: "Comprehensive MLS data integration with predictive analytics for property market analysis",
      services: ["Data Engineering", "Web Analytics", "Predictive Modeling"]
    },
    {
      id: 2,
      title: "E-Commerce Performance Dashboard",
      description: "Real-time analytics dashboard tracking conversion rates, ROAS, and customer behavior",
      services: ["Web Analytics", "Data Visualization", "Performance Tracking"]
    },
    {
      id: 3,
      title: "Startup Financial Modeling",
      description: "Custom financial models and forecasting tools for growing startups",
      services: ["Financial Modeling", "Data Architecture", "Advisory"]
    },
    {
      id: 4,
      title: "A/B Testing Framework",
      description: "Built comprehensive experimentation platform for major e-commerce client",
      services: ["A/B Testing", "Statistical Analysis", "Implementation"]
    },
    {
      id: 5,
      title: "Fraud Detection System",
      description: "Machine learning models to identify and prevent fraudulent transactions",
      services: ["Fraud Analytics", "Machine Learning", "Data Engineering"]
    },
    {
      id: 6,
      title: "Marketing Attribution Model",
      description: "Multi-touch attribution analysis across digital marketing channels",
      services: ["Marketing Analytics", "Statistical Modeling", "Consulting"]
    }
  ]

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
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-services">
                  {project.services.map((service, idx) => (
                    <span key={idx} className="service-badge">{service}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
