import '../styles/pages.css'

export default function About() {
  return (
    <div className="about">
      <section className="page-header">
        <div className="container">
          <h1>About Balint Analytics</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Balint Analytics is a data consulting firm founded in 2019, headquartered in Los Angeles, California. 
              With a team of data experts, we specialize in delivering strategic data solutions for businesses of all sizes.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our specialization revolves around delivering extensive consultancy encompassing data analytics and business intelligence. 
              We focus on a close collaboration with clients throughout the entire journey, placing their distinct requirements at the forefront.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <ul className="about-list">
              <li>Data Engineering and Architecture</li>
              <li>Web Analytics and Tracking</li>
              <li>Fraud Detection and Prevention</li>
              <li>A/B Testing and Experimentation</li>
              <li>Marketing Analytics</li>
              <li>Financial Models and Forecasting</li>
              <li>Product Analytics</li>
              <li>Startup Advisory and Mentorship</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Our Approach</h2>
            <p>
              We believe in achieving significant results without unnecessary complexity. Our communication style centers on 
              delivering technology that generates substantial impact. Every engagement is a partnership where we deeply understand 
              your business challenges and build tailored solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
