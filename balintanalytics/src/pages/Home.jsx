import { useMemo } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import '../styles/pages.css'

// Service data with images - memoized to prevent recreation
const SERVICES = [
  {
    id: 1,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights that drive business decisions.',
    image: '/balintanalytics/images/services/ab-testing.png'
  },
  {
    id: 2,
    title: 'Business Intelligence',
    description: 'Build comprehensive BI solutions tailored to your organization\'s needs.',
    image: '/balintanalytics/images/services/ecommerce-dashboard.png'
  },
  {
    id: 3,
    title: 'Data Engineering',
    description: 'Design and implement robust data architectures for scalable solutions.',
    image: '/balintanalytics/images/services/fraud-detection.png'
  },
  {
    id: 4,
    title: 'AI Solutions',
    description: 'Leverage artificial intelligence to optimize operations and predict outcomes.',
    image: '/balintanalytics/images/services/marketing-attribution.png'
  },
  {
    id: 5,
    title: 'Web Analytics',
    description: 'Track and analyze user behavior to optimize digital experiences.',
    image: '/balintanalytics/images/services/real-estate.png'
  },
  {
    id: 6,
    title: 'Strategic Consulting',
    description: 'Partner with us to align your data strategy with business objectives.',
    image: '/balintanalytics/images/services/financial-modeling.png'
  }
]

export default function Home() {
  // Memoize service cards to prevent unnecessary re-renders
  const serviceCards = useMemo(() =>
    SERVICES.map((service, index) => (
      <ServiceCard
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        delay={index * 100}
      />
    )), []
  )

  return (
    <div className="home">
      <Hero />

      <section className="services">
        <div className="container">
          <h2>Our Specialization</h2>
          <p className="section-intro">
            We deliver extensive consultancy encompassing data analytics and business intelligence with a focus on
            delivering strategic results without unnecessary complexity.
          </p>

          <div className="services-grid">
            {serviceCards}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Data?</h2>
          <p>Let's work together to maximize your business potential through data-driven strategies.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
