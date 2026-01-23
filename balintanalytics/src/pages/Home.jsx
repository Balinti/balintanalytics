import { useMemo } from 'react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import '../styles/pages.css'

// Service data with images - memoized to prevent recreation
const SERVICES = [
  {
    id: 1,
    title: 'Data Dashboard Design',
    description: 'Build intuitive dashboards that visualize key metrics and KPIs for real-time decision making.',
    image: '/balintanalytics/images/services/data-dashboard.png'
  },
  {
    id: 2,
    title: 'Traffic Flow Analysis',
    description: 'Understand how users navigate through your website and identify drop-off points.',
    image: '/balintanalytics/images/services/traffic-flow.png'
  },
  {
    id: 3,
    title: 'Conversion Funnel Optimization',
    description: 'Analyze and optimize your conversion funnels to maximize user conversions.',
    image: '/balintanalytics/images/services/conversion-funnel.png'
  },
  {
    id: 4,
    title: 'Heatmap Analysis',
    description: 'Visualize user interactions to understand where visitors click, scroll, and engage.',
    image: '/balintanalytics/images/services/heatmap.png'
  },
  {
    id: 5,
    title: 'User Journey Mapping',
    description: 'Map complete user journeys to identify opportunities for experience improvement.',
    image: '/balintanalytics/images/services/user-journey.png'
  },
  {
    id: 6,
    title: 'A/B Testing',
    description: 'Run controlled experiments to determine which variations perform best.',
    image: '/balintanalytics/images/services/ab-testing.png'
  },
  {
    id: 7,
    title: 'Real-Time Analytics',
    description: 'Monitor live user activity and respond to trends as they happen.',
    image: '/balintanalytics/images/services/real-time-analytics.png'
  },
  {
    id: 8,
    title: 'Mobile Analytics',
    description: 'Track and analyze mobile user behavior across devices and platforms.',
    image: '/balintanalytics/images/services/mobile-analytics.png'
  },
  {
    id: 9,
    title: 'Audience Segmentation',
    description: 'Divide your audience into meaningful segments for targeted analysis and marketing.',
    image: '/balintanalytics/images/services/audience-segmentation.png'
  },
  {
    id: 10,
    title: 'Attribution Modeling',
    description: 'Understand which channels and touchpoints drive conversions and revenue.',
    image: '/balintanalytics/images/services/attribution-modeling.png'
  },
  {
    id: 11,
    title: 'E-commerce Analytics',
    description: 'Track shopping behavior, cart abandonment, and purchase patterns.',
    image: '/balintanalytics/images/services/ecommerce-analytics.png'
  },
  {
    id: 12,
    title: 'Goal Tracking',
    description: 'Define and monitor key business goals to measure success and ROI.',
    image: '/balintanalytics/images/services/goal-tracking.png'
  },
  {
    id: 13,
    title: 'Pageview Analytics',
    description: 'Analyze page performance, load times, and content engagement metrics.',
    image: '/balintanalytics/images/services/pageview-analytics.png'
  },
  {
    id: 14,
    title: 'Event Tracking',
    description: 'Track custom events and user interactions beyond standard pageviews.',
    image: '/balintanalytics/images/services/event-tracking.png'
  },
  {
    id: 15,
    title: 'Data Insights',
    description: 'Extract meaningful insights from complex data to inform strategic decisions.',
    image: '/balintanalytics/images/services/data-insights.png'
  },
  {
    id: 16,
    title: 'Bounce Rate Analysis',
    description: 'Understand why visitors leave and implement strategies to improve engagement.',
    image: '/balintanalytics/images/services/bounce-rate.png'
  },
  {
    id: 17,
    title: 'Session Analytics',
    description: 'Analyze user sessions to understand engagement patterns and duration.',
    image: '/balintanalytics/images/services/session-analytics.png'
  },
  {
    id: 18,
    title: 'Click Tracking',
    description: 'Monitor click patterns to optimize UI elements and call-to-action placement.',
    image: '/balintanalytics/images/services/click-tracking.png'
  },
  {
    id: 19,
    title: 'Data Pipeline Engineering',
    description: 'Build robust data pipelines to collect, process, and store analytics data.',
    image: '/balintanalytics/images/services/data-pipeline.png'
  },
  {
    id: 20,
    title: 'Predictive Analytics',
    description: 'Use machine learning to forecast trends and predict user behavior.',
    image: '/balintanalytics/images/services/predictive-analytics.png'
  }
]

export default function Home() {
  // Memoize service cards to prevent unnecessary re-renders
  const serviceCards = useMemo(() =>
    SERVICES.map((service, index) => (
      <ServiceCard
        key={service.id}
        title={service.title}
        description={service.description}
        image={service.image}
        delay={index * 100}
      />
    )), []
  )

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
            {serviceCards}
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
