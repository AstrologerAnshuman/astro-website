import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  )
}
