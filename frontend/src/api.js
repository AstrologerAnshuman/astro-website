const API_BASE = import.meta.env.VITE_API_URL || '/api'

async function handle(res) {
  if (!res.ok) {
    let message = 'Something went wrong. Please try again.'
    try {
      const data = await res.json()
      message = data.error || message
    } catch (_) {}
    throw new Error(message)
  }
  return res.json()
}

export async function fetchServices() {
  const res = await fetch(`${API_BASE}/services`)
  return handle(res)
}

export async function fetchReviews() {
  const res = await fetch(`${API_BASE}/reviews`)
  return handle(res)
}
