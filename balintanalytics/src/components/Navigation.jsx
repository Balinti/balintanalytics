import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import '../styles/navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">BALINT ANALYTICS</span>
          <span className="logo-subtitle">Data, AI & BI</span>
        </Link>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" className="nav-link" onClick={() => setIsOpen(false)}>
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculators" className="nav-link" onClick={() => setIsOpen(false)}>
              Calculators
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-btn" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
