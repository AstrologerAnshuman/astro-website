import React from 'react'
import ZodiacWheel from './ZodiacWheel.jsx'

const WHATSAPP_NUMBER = '917776079346'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to book a consultation.')}`

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">✶ Astrology &amp; Numerology Consultations</span>
          <h1>
            Clear guidance for life&apos;s <em>biggest questions</em>
          </h1>
          <p>
            One-on-one consultations with Astrologer Anshuuvman Mishrra — Kundli
            analysis, numerology, horoscope, muhurat, gemstone and mantra guidance,
            based on your own birth details.
          </p>
          <div className="hero-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book on WhatsApp
            </a>
            <a href="#services" className="btn btn-ghost">See all services</a>
          </div>
          <div className="hero-facts">
            <div><strong>15</strong>Astrology &amp; Numerology services</div>
            <div><strong>1-on-1</strong>personal consultations</div>
            <div><strong>WhatsApp</strong>booking &amp; support</div>
          </div>
        </div>

        <div className="hero-wheel-wrap">
          <ZodiacWheel className="hero-wheel" />
        </div>
      </div>
    </section>
  )
}
