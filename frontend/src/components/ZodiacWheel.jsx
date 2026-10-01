import React from 'react'

const SIGNS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓']

export default function ZodiacWheel({ className }) {
  const size = 420
  const center = size / 2
  const outerR = 200
  const innerR = 150
  const glyphR = 175

  return (
    <svg
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decorative zodiac wheel"
    >
      <circle cx={center} cy={center} r={outerR} fill="none" stroke="#C9A24B" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx={center} cy={center} r={innerR} fill="none" stroke="#C9A24B" strokeOpacity="0.25" strokeWidth="1" />
      <circle cx={center} cy={center} r={90} fill="none" stroke="#C9A24B" strokeOpacity="0.18" strokeWidth="1" />

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        const x1 = center + innerR * Math.cos(angle)
        const y1 = center + innerR * Math.sin(angle)
        const x2 = center + outerR * Math.cos(angle)
        const y2 = center + outerR * Math.sin(angle)
        return (
          <line
            key={`line-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#C9A24B" strokeOpacity="0.3" strokeWidth="1"
          />
        )
      })}

      {SIGNS.map((glyph, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const x = center + glyphR * Math.cos(angle)
        const y = center + glyphR * Math.sin(angle)
        return (
          <text
            key={glyph}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fill="#E4C777"
            fontFamily="Fraunces, serif"
          >
            {glyph}
          </text>
        )
      })}

      <circle cx={center} cy={center} r={4} fill="#E4C777" />
    </svg>
  )
}
