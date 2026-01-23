import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages.css'

const CLIENTS = [
  {
    id: 1,
    name: 'Redemption Games',
    category: 'Mobile Games',
    description: 'Serving them as their external Analytics director since 2019'
  },
  {
    id: 2,
    name: 'UNKJD',
    category: 'Web 3 Gaming',
    description: 'Help in defining analytics from scratch'
  },
  {
    id: 3,
    name: 'Whatnot',
    category: 'Auction Market Place',
    description: 'External consultation for product and user acquisition analytics'
  },
  {
    id: 4,
    name: 'Crazy Labs',
    category: 'Mobile Games',
    description: 'Analytics & Design'
  },
  {
    id: 5,
    name: 'Journey IO',
    category: 'Starting Small',
    description: 'Data Analytics and engineering consultancy'
  },
  {
    id: 6,
    name: 'Screen IL',
    category: 'A Fresh Start',
    description: 'Analytics consultancy'
  },
  {
    id: 7,
    name: 'AppLovin',
    category: 'Mobile Gaming',
    description: "Helped with Redemption Games' acquisition. A/B test and Firebase advisory"
  },
  {
    id: 8,
    name: 'Kicks Crew',
    category: 'Sneakers Marketplace',
    description: 'Help with SEO'
  },
  {
    id: 9,
    name: 'Skilled Creative',
    category: 'Voice Gaming',
    description: 'Voice Gaming analytics to their initiative with Sony for Who wants to be a millionaire'
  },
  {
    id: 10,
    name: 'Nix Hydra',
    category: 'Story Games',
    description: 'End to end analytics for 2 games in production: Arcana & Fictif'
  },
  {
    id: 11,
    name: 'Overwolf',
    category: 'UGC',
    description: 'Marketing Analytics'
  },
  {
    id: 12,
    name: 'Corrily',
    category: 'Startup Advisory',
    description: 'Architecture, analytics & visualization'
  }
]

export default function Clients() {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    // Staggered animation for cards
    CLIENTS.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index])
      }, index * 100)
    })
  }, [])

  const clientCards = useMemo(() =>
    CLIENTS.map((client, index) => (
      <div
        key={client.id}
        className={`client-card fade-in ${visibleCards.includes(index) ? 'visible' : ''}`}
      >
        <div className="client-card-header">
          <h3>{client.name}</h3>
          <span className="client-category">{client.category}</span>
        </div>
        <p className="client-description">{client.description}</p>
        <Link to="/contact" className="client-cta">
          Get in Touch
        </Link>
      </div>
    )), [visibleCards]
  )

  return (
    <div className="clients">
      <section className="page-header">
        <div className="container">
          <h1>Our Clients</h1>
          <p>Trusted by leading companies across gaming, marketplaces, and technology</p>
        </div>
      </section>

      <section className="clients-content">
        <div className="container">
          <div className="clients-grid">
            {clientCards}
          </div>
        </div>
      </section>

      <section className="clients-cta">
        <div className="container">
          <h2>Ready to Join Our Client Portfolio?</h2>
          <p>Let's discuss how we can help transform your data strategy.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
