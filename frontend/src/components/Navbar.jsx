import React, { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#reviews', label: 'Reviews' },
]

const WHATSAPP_NUMBER = '917776079346'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book a consultation.')}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">✶</span> The Astrology World
        </a>

        <nav>
          <ul className="nav-links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book on WhatsApp
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <ul className="nav-links" style={{ flexDirection: 'column', padding: '0 28px 20px' }}>
          {LINKS.map((link) => (
            <li key={link.href} style={{ padding: '10px 0' }}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
