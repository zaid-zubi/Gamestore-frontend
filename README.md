# 🎮 GameStore Frontend

A modern **React-based e-commerce frontend** for browsing and purchasing digital game items.  
This project communicates with a backend REST API to provide a complete shopping experience.

---

## 🚀 Features

- User authentication (Login / Register)
- Products list based on location or all products with pagination
- Product details page
- Create order {Buy one product only}
- See Order Receipt
- Responsive UI for all devices

---

## 🧰 Tech Stack

- React 19
- Vite
- React Router DOM
- Context API (State Management)
- Fetch API
- Vanilla CSS

---

## 📦 Prerequisites

Before running this project, make sure you have:

- Node.js 20+
- npm
- GameStore Backend API running locally

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone git@github.com:zaid-zubi/Gamestore-frontend.git
cd gamestore-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables

Create a .env file in the root directory:
```bash
VITE_BACKEND_API_BASE_URL=http://127.0.0.1:8000
```

### 4. Run the development server
```bash
npm run dev
```
==> The app will run at:

http://localhost:5173

🔗 Backend Dependency

This frontend requires the GameStore Backend API to be running.

Make sure to:

Clone and run the backend first
Set the correct API URL in .env
---

📁 Project Structure
```bash
src/
├── components/     # Reusable UI components
├── pages/          # Application pages
├── services/       # API requests
├── context/        # Authentication state
├── assets/         # Static files
├── styles/         # Global styles
└── main.jsx        # Entry point
```
---
🧪 Available Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## ✨ Notes

- Uses Vite environment variables (`VITE_` prefix is required)
- Backend must be running for full functionality. Please refer to the **GameStore-backend README.md** for setup instructions
- Designed with clean architecture and scalability in mind