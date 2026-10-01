import React from 'react'

const STEPS = [
  { time: 'STEP · MESSAGE', title: 'Message on WhatsApp', copy: 'Tap "Book on WhatsApp" and tell us which service you are interested in.' },
  { time: 'STEP · DETAILS', title: 'Share your details', copy: 'Send your name, date, time and place of birth, and a short note about what you need guidance on.' },
  { time: 'STEP · CONFIRM', title: 'Get your time confirmed', copy: 'We will confirm the date and time for your consultation directly over WhatsApp.' },
  { time: 'STEP · SESSION', title: 'Have your consultation', copy: 'Join your scheduled call at the confirmed time and get your questions answered.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <div className="container">
        <span className="eyebrow">✶ The process</span>
        <h2 className="section-title">Simple to book, easy to prepare for</h2>
        <p className="section-lede">From your first WhatsApp message to your consultation - here is what to expect.</p>

        <div className="how-grid">
          {STEPS.map((step) => (
            <div className="how-step" key={step.title}>
              <div className="step-time">{step.time}</div>
              <h4>{step.title}</h4>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
