import '../styles/pages.css'

export default function Clients() {
  return (
    <div className="clients">
      <section className="page-header">
        <div className="container">
          <h1>Our Clients</h1>
          <p>We provide data-driven solutions for all types of businesses</p>
        </div>
      </section>

      <section className="clients-content">
        <div className="container">
          <div className="client-types">
            <div className="client-type">
              <h3>Small & Local Businesses</h3>
              <p>
                We help local businesses understand their data and make informed decisions. 
                From analytics setup to custom reporting, we provide affordable solutions tailored to your scale.
              </p>
            </div>
            <div className="client-type">
              <h3>Mid-Market Companies</h3>
              <p>
                For growing companies, we build scalable data architectures and analytics platforms 
                that support rapid expansion and complex business requirements.
              </p>
            </div>
            <div className="client-type">
              <h3>Enterprise Organizations</h3>
              <p>
                Large corporations benefit from our strategic consulting, advanced analytics capabilities, 
                and enterprise-grade data solutions that drive organizational transformation.
              </p>
            </div>
            <div className="client-type">
              <h3>Startups & Tech</h3>
              <p>
                We partner with startups to build data-driven cultures from day one. 
                Our advisory services help establish metrics that matter and scale analytics as you grow.
              </p>
            </div>
          </div>

          <div className="client-section">
            <h2>Industries We Serve</h2>
            <div className="industries-grid">
              <div className="industry">E-Commerce & Retail</div>
              <div className="industry">Real Estate & Property</div>
              <div className="industry">Technology & SaaS</div>
              <div className="industry">Financial Services</div>
              <div className="industry">Digital Marketing</div>
              <div className="industry">Sports & Athletics</div>
              <div className="industry">Environmental Analytics</div>
              <div className="industry">Education & Learning</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
