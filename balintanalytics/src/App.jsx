import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Lazy load pages for better performance - Advanced React pattern
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Clients = lazy(() => import('./pages/Clients'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const Calculators = lazy(() => import('./pages/Calculators'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense key={location.pathname} fallback={<Loading message="Loading page..." />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculators" element={<Calculators />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="app">
            <Navigation />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
