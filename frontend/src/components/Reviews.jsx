import React, { useEffect, useState } from 'react'
import { fetchReviews } from '../api.js'

const FALLBACK_REVIEWS = [
  { id: 1, clientName: 'Ananya R.', rating: 5, comment: 'The consultation gave me real clarity on my relationship questions. Guruji explained everything with patience and honesty.', serviceTaken: 'Marriage & Relationship (Kundli Matching)' },
  { id: 2, clientName: 'Rahul Mehta', rating: 5, comment: 'Very practical guidance for my business decisions. Things started moving in the right direction within a couple of months.', serviceTaken: 'Finance & Business Guidance' },
  { id: 3, clientName: 'Priya Sharma', rating: 5, comment: 'The dosha analysis was detailed and the remedies were simple to follow. Truly grateful for the guidance.', serviceTaken: 'Dosha Analysis (Mangal, Kaal Sarp, Pitru, etc.)' },
  { id: 4, clientName: 'Vikram Singh', rating: 5, comment: 'My Kundli analysis was extremely detailed and he answered every question patiently.', serviceTaken: 'Birth Chart (Kundli) Analysis' },
  { id: 5, clientName: 'Sneha Patel', rating: 5, comment: 'The muhurat he suggested for our family function worked out perfectly.', serviceTaken: 'Shubh Ashubh Muhurat' },
  { id: 6, clientName: 'Arjun Nair', rating: 5, comment: 'Very knowledgeable and straightforward. Booking on WhatsApp was quick and the whole process felt professional.', serviceTaken: 'Career & Profession Guidance' },
]

export default function Reviews() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS)

  useEffect(() => {
    fetchReviews()
      .then((data) => { if (data && data.length) setReviews(data) })
      .catch(() => { /* keep fallback reviews if the API is unreachable */ })
  }, [])

  const avg = reviews.length
    ? (reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : '5.0'

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <span className="eyebrow">✶ Client experiences</span>
        <h2 className="section-title">What clients say after their session</h2>

        <div className="reviews-rating-summary">
          <span className="rating-number">{avg}</span>
          <div>
            <div className="stars">{'★'.repeat(5)}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--ink-soft)' }}>
              based on {reviews.length} client reviews
            </div>
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id ?? review.clientName}>
              <div className="stars">{'★'.repeat(review.rating || 5)}{'☆'.repeat(5 - (review.rating || 5))}</div>
              <p>&ldquo;{review.comment}&rdquo;</p>
              <div className="review-footer">
                <strong>{review.clientName}</strong>
                <span>{review.serviceTaken}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
