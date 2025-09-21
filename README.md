# BookNexus - Library Management System

## Overview
BookNexus is a modern library management system built with React, Node.js, and PostgreSQL. It features AI-powered search capabilities and book summaries using Google's Gemini API.

## Features
- 📚 Comprehensive book management
- 🔍 AI-powered search functionality
- 📱 Responsive design with dark mode support
- 👥 User authentication and role-based access
- 📊 Admin dashboard with analytics
- 💡 AI-generated book summaries
- 📖 Digital book tracking system

## Tech Stack
- **Frontend:**
  - React
  - TypeScript
  - TailwindCSS
  - Framer Motion
  - React Router
  
- **Backend:**
  - Node.js
  - Express
  - PostgreSQL
  - Prisma ORM
  - JWT Authentication

- **AI Integration:**
  - Google Gemini API

## Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- Google Gemini API key

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/BookNexus.git
cd BookNexus
```

2. **Install dependencies:**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment Setup:**

Create `.env` file in the backend directory:
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=booknexus_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h
GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=postgresql://your_db_user:your_db_password@localhost:5432/booknexus_db
```

4. **Database Setup:**
```bash
cd backend
npm run seed
```

5. **Start the application:**
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## Usage
- Access the application at `http://localhost:5173`
- Default admin credentials:
  - Email: admin@example.com
  - Password: password123

## Key Features

### For Users
- Browse and search books
- View book details and availability
- Check out and return books
- Get AI-generated book summaries

### For Administrators
- Manage books (add, edit, delete)
- Track book inventory
- Monitor user activity
- View library statistics
- Manage user accounts


## Acknowledgments
- Google Gemini API for AI capabilities
- TailwindCSS for styling
- Framer Motion for animations
- All contributors who have helped with the project

## Contact
Your Name - [@ManushaKavishan](https://github.com/ManushaKavishan)
