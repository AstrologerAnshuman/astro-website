// import React from 'react'
// import astrologerPhoto from '../assets/astrologer-portrait.png'
// import ZodiacWheel from './ZodiacWheel.jsx'

// export default function About() {
//   return (
//     <section id="about" className="section about">
//       <div className="container about-grid">
//         <div>
//           <div className="about-portrait">
//             <ZodiacWheel className="hero-wheel-glyphs" />
//           </div>
//           <div className="about-credentials">
//             <div><span>✶</span> Kundli analysis, matching &amp; dosha guidance</div>
//             <div><span>✶</span> Career, finance, health &amp; relationship astrology</div>
//             <div><span>✶</span> Bookings and support available over WhatsApp &amp; call</div>
//           </div>
//         </div>

//         <div>
//           <span className="eyebrow">About your astrologer</span>
//           <h2 className="section-title">Astrologer Anshuuvman Mishrra</h2>
//           <p className="section-lede">
//             Anshuuvman Mishrra offers astrology and numerology consultations covering
//             career, finance, marriage, health, education, legal matters, muhurat,
//             gemstones and personalised mantra remedies.
//           </p>
//           <p className="section-lede" style={{ marginTop: 16 }}>
//             Every consultation is one-on-one and grounded in your specific birth
//             details - no generic readings.
//           </p>

//           <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
//             <a href="https://youtube.com/@sadhakjyotishmishrra?si=PhAnpFLch1lVnsj7" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
//               YouTube
//             </a>
//             <a href="https://www.instagram.com/sadhakjyotishmishra?igsh=dTU0eXlvZHd1MDRs" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
//               Instagram
//             </a>
//             <a href="mailto:astrologeranshuuvmanmishrra@gmail.com" className="btn btn-outline-dark">
//               Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import React from 'react'
import astrologerPhoto from '../assets/astrologer-portrait.png'
import ZodiacWheel from './ZodiacWheel.jsx'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <div className="about-portrait">
            <img
              src={astrologerPhoto}
              alt="Astrologer Anshuuvman Mishrra"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }}
            />
          </div>
          <div className="about-credentials">
            <div><span>✶</span> Tantra Kriya specialist - Vashikaran, prosperity &amp; protection rituals</div>
            <div><span>✶</span> Vastu consultations for homes, offices &amp; new construction</div>
            <div><span>✶</span> Bookings and support available over WhatsApp &amp; call</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">About your astrologer</span>
          <h2 className="section-title">Astrologer Anshuuvman Mishrra</h2>
          <p className="section-lede">
            Anshuuvman Mishrra practices traditional Tantra Kriya and Vastu Shastra,
            working with clients on love and relationship problems, prosperity and
            business growth, protection from negative energy, and Vastu-aligned homes
            and workplaces.
          </p>
          <p className="section-lede" style={{ marginTop: 16 }}>
            Every consultation is one-on-one and grounded in your specific situation -
            no generic remedies. Vastu visits are conducted on-site, and Tantra Kriya
            rituals are guided step by step so you know exactly how to expect.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
            <a href="https://youtube.com/@sadhakjyotishmishrra?si=PhAnpFLch1lVnsj7" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
              YouTube
            </a>
            <a href="https://www.instagram.com/sadhakjyotishmishra?igsh=dTU0eXlvZHd1MDRs" target="_blank" rel="noreferrer" className="btn btn-outline-dark">
              Instagram
            </a>
            <a href="mailto:astrologeranshuuvmanmishrra@gmail.com" className="btn btn-outline-dark">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}