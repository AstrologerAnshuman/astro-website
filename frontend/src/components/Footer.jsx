import React from 'react'

const WHATSAPP_NUMBER = '917776079346'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book a consultation.')}`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">✶ The Astrology World</div>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">Book on WhatsApp</a></li>
          </ul>
        </div>

        <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: 13.5 }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp / Call: +91 77760 79346
          </a>
          <a href="https://youtube.com/@sadhakjyotishmishrra?si=PhAnpFLch1lVnsj7" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.instagram.com/sadhakjyotishmishra?igsh=dTU0eXlvZHd1MDRs" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <div className="footer-note">
          © {new Date().getFullYear()} The Astrology World — Astrologer Anshuuvman Mishrra.
          Readings and rituals are for guidance and reflection; they are not a
          substitute for medical, legal, or financial advice.
        </div>
      </div>
    </footer>
  )
}
