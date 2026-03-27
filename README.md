# Simple CRM Dashboard

A full-stack CRM dashboard application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Protected routes
- Dashboard with leads, tasks, and users
- Responsive design with Tailwind CSS
- Toast notifications
- Clean and modern UI

## Tech Stack

### Frontend

- React.js (Vite)
- TypeScript
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- Lucide React (Icons)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation & Setup

### 1. Clone the repository

```bash
cd simple-crm-dashboard
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ..
npm install
```

### 4. Configure Environment Variables

#### Backend (.env)

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/crm_dashboard
JWT_SECRET=crm_dashboard_secret_key_2024_production_ready
NODE_ENV=development
```

**Note:** If you're using MongoDB Atlas (cloud), replace `MONGODB_URI` with your connection string.

#### Frontend (.env)

The frontend `.env` file is already configured. The default configuration is:

```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Start MongoDB

If you're using local MongoDB, start the MongoDB service:

**macOS/Linux:**

```bash
sudo systemctl start mongodb
# or
brew services start mongodb-community
```

**Windows:**

```bash
net start MongoDB
```

### 6. Seed the Database

Run the seed script to populate the database with sample data:

```bash
cd backend
node src/seed.js
```

This will create:

- 2 sample users
- 5 sample leads
- 5 sample tasks

### 7. Start the Backend Server

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:5000`

### 8. Start the Frontend Development Server

Open a new terminal and run:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## Test Credentials

After seeding the database, you can login with these credentials:

### Admin Account

- **Email:** admin@124.com
- **Password:** admin123

### User Account

- **Email:** user@345.com
- **Password:** user123

## Project Structure

```
simple-crm-dashboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── leadController.js
│   │   │   ├── taskController.js
│   │   │   └── userController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Lead.js
│   │   │   └── Task.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── leadRoutes.js
│   │   │   ├── taskRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env
│   └── package.json
├── Frontend/src/
│   ├── components/
│   │   └── ProtectedRoute.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   └── Dashboard.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   └── dataService.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── package.json
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Leads

- `GET /api/leads` - Get all leads (protected)
- `POST /api/leads` - Create new lead (protected)

### Tasks

- `GET /api/tasks` - Get all tasks (protected)
- `POST /api/tasks` - Create new task (protected)

### Users

- `GET /api/users` - Get all users (protected)

## Features Implemented

### Authentication

- Email and password validation
- JWT token generation
- Token stored in localStorage
- Password hashing with bcryptjs
- Protected routes on both frontend and backend

### Dashboard

- Display user information
- Show statistics (total leads, tasks, users)
- List recent leads with status and value
- List recent tasks with priority and status
- Display team members
- Logout functionality

### Security

- JWT middleware for route protection
- Password hashing
- CORS enabled
- Environment variables for sensitive data

### UI/UX

- Responsive design
- Loading states
- Error handling
- Toast notifications
- Modern and clean interface
- Smooth transitions and hover effects

```bash
npm run build
```

Deploy the `dist` folder to:

- Vercel (recommended)
- Netlify
- AWS S3 + CloudFront

Make sure to update the `VITE_API_URL` environment variable to point to your production backend API.

## License

MIT

## Author

Prince Pandey
