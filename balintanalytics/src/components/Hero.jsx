import { Link } from 'react-router-dom'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">BALINT ANALYTICS</h1>
        <p className="hero-subtitle">Data, AI & BI</p>

        <p className="hero-description">
          At Balint Analytics, our focus lies on addressing productivity challenges around your business and data.
          We assist our clients in maximizing their influence during the product development process.
          The communication style predominantly centers around achieving significant results without unnecessary complexity.
          The goal is to ensure that your technology generates substantial impact rather than just functioning.
        </p>

        <p className="hero-secondary">
          Our specialization revolves around delivering extensive consultancy encompassing data analytics and business intelligence.
          A strategy that involves a close collaboration with clients throughout the entire journey, placing their distinct requirements at the forefront.
        </p>

        <div className="hero-services-list">
          <h3>Our services encompass:</h3>
          <ul>
            <li>Gathering and cleaning data</li>
            <li>Developing strategies for acquiring products and users</li>
            <li>Ensuring data accuracy and consistency</li>
            <li>Implementing experimental frameworks</li>
            <li>Creating reports and visualizations</li>
            <li>Deploying and evaluating AI agents</li>
          </ul>
        </div>

        <div className="hero-cta">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
