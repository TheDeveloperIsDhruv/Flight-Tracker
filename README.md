# ✈️ Flight Search App  

A simple **full-stack flight search app** built with **React, Express, Axios, and Tailwind CSS**.  

Users can search flights by **From** and **To** city — supports **partial & case-insensitive matches** (e.g. typing `"new"` will match `"New York"`). Results are displayed in a **glassy, modern UI**.  

---

## ⚡ Tech Stack  
- **Frontend:** React, React Router, Axios, Tailwind CSS  
- **Backend:** Node.js, Express, CORS  
- **Data Source:** Mock flight dataset (`mockAPI.js`)  

---

## 🚀 Getting Started  

```bash
# Clone Repo
git clone https://github.com/your-username/flight-search-app.git
cd flight-search-app

# Backend setup
npm install
node server.js   # Runs on http://localhost:3000

# Frontend setup
cd frontend
npm install
npm run dev      # Runs on http://localhost:5173 (Vite default)

🔗 API Endpoint
POST /flights → Returns matching flights

Example request body:
{ "departure": "New York", "arrival": "London" }

🛠️ Future Plans
- 🔗 Integrate with real-world flight APIs (Skyscanner, Amadeus, Aviationstack)
- 📅 Add search by departure/arrival dates & times
- 📍 Add airline logos and flight status details
- 🌍 Deploy for public access
