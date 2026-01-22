import { Link } from 'react-router-dom'
import { useState, useCallback, memo } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import '../styles/navigation.css'

/**
 * Navigation component with theme toggle
 * Advanced React patterns: memo, useCallback for event handlers
 */
const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">BALINT ANALYTICS</span>
          <span className="logo-subtitle">Data, AI & BI</span>
        </Link>

        <div className="navbar-actions">
          <ThemeToggle />
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients" className="nav-link" onClick={closeMenu}>
              Clients
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculators" className="nav-link" onClick={closeMenu}>
              Calculators
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-btn" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
})

export default Navigation
