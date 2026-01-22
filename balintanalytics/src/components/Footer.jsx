import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Balint Analytics</h3>
            <p>Data, AI & BI Solutions</p>
            <p className="footer-tagline">
              Transforming businesses through data-driven insights and strategic consulting.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Data Analytics</li>
              <li>Business Intelligence</li>
              <li>Data Engineering</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <p>
              <strong>Location:</strong><br/>
              Los Angeles, California<br/>
              United States
            </p>
            <Link to="/contact" className="btn btn-small">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Balint Analytics. All rights reserved.</p>
          <p>Built with React & Deployed on GitHub Pages</p>
        </div>
      </div>
    </footer>
  )
}
