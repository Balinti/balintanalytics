import { useState } from 'react'
import { PageTransition, ParallaxSection, ScrollReveal } from '../components/motion'
import '../styles/pages.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, just show success - later integrate with email service
    console.log('Form data:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <PageTransition>
      <div className="contact">
        <ParallaxSection speed={0.2}>
          <section className="page-header">
            <div className="container">
              <h1>Get in Touch</h1>
              <p>Let's discuss how we can help transform your data</p>
            </div>
          </section>
        </ParallaxSection>

        <ScrollReveal>
          <section className="contact-content">
            <div className="container">
              <div className="contact-layout">
                <div className="contact-info">
                  <h2>Contact Information</h2>

                  <div className="info-item">
                    <h3>Location</h3>
                    <p>
                      W Olympic Boulevard<br/>
                      Los Angeles, California<br/>
                      United States
                    </p>
                  </div>

                  <div className="info-item">
                    <h3>Services</h3>
                    <p>
                      Data Analytics<br/>
                      Business Intelligence<br/>
                      Data Engineering<br/>
                      Strategic Consulting
                    </p>
                  </div>

                  <div className="info-item">
                    <h3>Industries</h3>
                    <p>
                      E-Commerce & Retail<br/>
                      Real Estate & Property<br/>
                      Technology & SaaS<br/>
                      Financial Services
                    </p>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Send us a Message</h2>

                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your @email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows="6"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {submitted ? 'Message Sent! \u2714' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
