import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">EZ Labs</div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
