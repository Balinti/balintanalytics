import { useMemo } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import { PageTransition, StaggerContainer, StaggerItem, ScrollReveal, AnimatedCounter } from '../components/motion'
import '../styles/pages.css'

// Service data with images - memoized to prevent recreation
const SERVICES = [
  {
    id: 1,
    title: 'Gaming Analytics',
    description: 'Whether you require assistance with fundamental Key Performance Indicators (KPIs) like cohort metrics or more complex ones involving product optimization and intricate economy tuning (such as source and sink analysis and dynamic leveling curves), we have the expertise to support you. With a track record of working with over seven gaming companies in our customer portfolio, we are well-equipped to meet your needs.',
    image: '/images/services/gaming-analytics.webp'
  },
  {
    id: 2,
    title: 'A/B Testing',
    description: 'How can we assess whether a feature is delivering the intended outcome? How can we ensure that random factors do not influence our results? With Balint Analytics having conducted over 700 experiments, we are well-equipped to guide you on test setup, determining the appropriate duration, and establishing the expected lift.',
    image: '/images/services/ab-testing.webp'
  },
  {
    id: 3,
    title: 'AI Agents',
    description: 'Deploying AI agents involves aligning their capabilities with your specific business objectives and challenges to ensure relevance and effectiveness. The deployment process includes building robust data pipelines, thorough testing, and integrating the AI smoothly into existing workflows. Regular evaluation ensures the agents deliver consistent value.',
    image: '/images/services/ai-agents.webp'
  },
  {
    id: 4,
    title: 'Data Engineering & Architecture',
    description: 'Regardless of your current stage, whether it involves manually downloading CSV files or setting up a complex infrastructure with multiple data layers, we are here to support you. With our extensive experience in all major cloud services like AWS, Azure, and Google Cloud, we will assist you in finding the optimal roadmap.',
    image: '/images/services/data-architecture.webp'
  },
  {
    id: 5,
    title: 'Web Analytics',
    description: 'If you have a website and need to extract valuable insights from it, we are here to assist you. Whether you need to leverage Google Analytics (including version 4 integration), utilize Mixpanel for in-depth analysis, or capture comprehensive user activity using tools like Segment to democratize data streams to your database, we have you covered.',
    image: '/images/services/web-analytics.webp'
  },
  {
    id: 6,
    title: 'Fraud Analytics',
    description: 'If your business is experiencing a rise in fraud, we are here to assist you in developing a robust framework to address this issue. We can help you establish a risk scoring system, implement Account Take Over (ATO) prevention measures, enhance identity verification processes, and employ methods to identify instances of "friendly" fraud.',
    image: '/images/services/fraud-analytics.webp'
  },
  {
    id: 7,
    title: 'User Acquisition Analytics',
    description: 'Acquiring new customers is vital for any business, particularly for apps and games. User Acquisition analysis examines the factors that influence the acquisition of new users. Balint Analytics employs User Acquisition analysis to reveal how you acquire new users and how to increase this process to ensure you recoup your investment.',
    image: '/images/services/user-acquisition.webp'
  },
  {
    id: 8,
    title: 'Financial Models & Analytics',
    description: 'Financial analytics is the process of using data and statistical techniques to gain insights into financial performance and make informed decisions. It can be used to analyze financial statements, market data, and economic indicators to identify trends and improve financial forecasting, budgeting, and risk management.',
    image: '/images/services/financial-analytics.webp'
  },
  {
    id: 9,
    title: 'Text Analytics',
    description: 'Text analytics is the process of using natural language processing and machine learning techniques to extract insights from unstructured text data. Applications include sentiment analysis, topic modeling, and entity recognition, which can be used to improve customer engagement, product development, and market research.',
    image: '/images/services/text-analytics.webp'
  }
]

const STATS = [
  { value: 14, suffix: '+', label: 'Years Experience' },
  { value: 700, suffix: '+', label: 'Experiments Run' },
  { value: 12, suffix: '+', label: 'Clients Served' },
  { value: 9, suffix: '', label: 'Service Areas' }
]

export default function Home() {
  const serviceCards = useMemo(() =>
    SERVICES.map((service) => (
      <StaggerItem key={service.id}>
        <ServiceCard
          title={service.title}
          description={service.description}
          image={service.image}
        />
      </StaggerItem>
    )), []
  )

  return (
    <PageTransition>
      <div className="home">
        <Hero />

        <section className="services">
          <div className="container">
            <ScrollReveal>
              <h2>Our Specialization</h2>
              <p className="section-intro">
                We deliver extensive consultancy encompassing data analytics and business intelligence with a focus on
                delivering strategic results without unnecessary complexity.
              </p>
            </ScrollReveal>

            <StaggerContainer stagger={0.08} className="services-grid">
              {serviceCards}
            </StaggerContainer>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    className="stat-number"
                  />
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="cta-section">
            <div className="container">
              <h2>Ready to Transform Your Data?</h2>
              <p>Let's work together to maximize your business potential through data-driven strategies.</p>
              <Link to="/contact" className="btn btn-primary btn-large">
                Schedule a Consultation
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  )
}
