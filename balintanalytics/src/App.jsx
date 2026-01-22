import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Calculators from './pages/Calculators'

function App() {
  return (
    <Router basename="/balintanalytics">
      <div className="app">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/calculators" element={<Calculators />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App