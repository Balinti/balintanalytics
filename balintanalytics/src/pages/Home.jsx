import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import '../styles/pages.css'

export default function Home() {
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
            <div className="service-card">
              <h3>Data Analytics</h3>
              <p>Transform raw data into actionable insights that drive business decisions.</p>
            </div>
            <div className="service-card">
              <h3>Business Intelligence</h3>
              <p>Build comprehensive BI solutions tailored to your organization's needs.</p>
            </div>
            <div className="service-card">
              <h3>Data Engineering</h3>
              <p>Design and implement robust data architectures for scalable solutions.</p>
            </div>
            <div className="service-card">
              <h3>AI Solutions</h3>
              <p>Leverage artificial intelligence to optimize operations and predict outcomes.</p>
            </div>
            <div className="service-card">
              <h3>Web Analytics</h3>
              <p>Track and analyze user behavior to optimize digital experiences.</p>
            </div>
            <div className="service-card">
              <h3>Strategic Consulting</h3>
              <p>Partner with us to align your data strategy with business objectives.</p>
            </div>
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
