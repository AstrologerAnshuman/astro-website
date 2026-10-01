# The Astrology World

React + Vite frontend (`frontend/`) and an optional Spring Boot read-only API (`backend/`).

## Render deployment

Backend (Web Service): Language Docker, Region Singapore, Root Directory `backend`, Dockerfile Path `./Dockerfile`.
Frontend (Static Site): Root Directory `frontend`, Build `npm install && npm run build`, Publish `dist`,
env var `VITE_API_URL=https://YOUR-BACKEND.onrender.com/api` (optional; the site works with built-in data without it).

After deploying, replace `YOUR-SITE` in `frontend/public/robots.txt` and `sitemap.xml` with the real site URL.
