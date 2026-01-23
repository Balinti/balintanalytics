import { useState, useEffect } from 'react'
import '../styles/pages.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="about">
      <section className="page-header">
        <div className="container">
          <h1>About Balint Analytics</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className={`about-section fade-in ${isVisible ? 'visible' : ''}`}>
            <h2>Free Proof of Concept</h2>
            <p>
              How often have individuals contacted you offering a complimentary consultation? At Balint Analytics,
              we're offering a free proof of concept to you. This will not be a single, deceitful call with the
              intent to convert you but rather a small project of your choosing. We do not charge for this service
              because we believe in building long-term relationships.
            </p>
            <p>
              Not sure what kind of assistance you require? Allow us to review and identify your top analytics needs.
            </p>
          </div>

          <div className={`about-section ceo-section fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="ceo-content">
              <div className="ceo-info">
                <h2>EDOE BALINT</h2>
                <span className="ceo-title">Owner</span>
                <p>
                  A seasoned entrepreneur in the field of Analytics with 14 years of hands-on experience in Data
                  and Business Analysis. Possesses a deep understanding of the entire data lifecycle, commencing
                  from the acquisition of raw data, progressing through data warehousing, and culminating in the
                  development of dashboards that effectively communicate actionable business insights.
                </p>
                <p>
                  Proficient in implementing Agile and Lean methodologies.
                </p>
              </div>
            </div>
          </div>

          <div className={`about-section fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <h2>Our Approach</h2>
            <p>
              We believe in achieving significant results without unnecessary complexity. Our communication style
              centers on delivering technology that generates substantial impact. Every engagement is a partnership
              where we deeply understand your business challenges and build tailored solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
