import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default App
