# E-Commerce App

A full-stack e-commerce application with React frontend and Node.js/Express backend.

## 🏗️ Project Structure

```
E-Commerce-App/
├── backend/                 # Express.js API server
│   ├── controllers/        # Route handlers
│   ├── database/          # MongoDB connection
│   ├── emailVerify/       # Email OTP verification
│   ├── middleware/        # Auth & file upload middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── utils/             # Cloudinary config
│   ├── package.json
│   └── server.js          # Entry point
│
└── frontend/              # React + Vite frontend
    ├── src/
    │   ├── assets/        # Components & UI
    │   ├── pages/        # Page components
    │   ├── redux/        # Redux slices & store
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🚀 Features

- **User Authentication** - JWT-based login/signup with email verification
- **Product Management** - Browse, filter, and search products
- **Shopping Cart** - Add/remove items, quantity management
- **User Profile** - View and update profile information
- **Image Upload** - Product images via Cloudinary
- **OTP Verification** - Email-based account verification

## 🛠️ Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (image hosting)
- Nodemailer (emails)

### Frontend
- React 19 + Vite
- Redux Toolkit (state management)
- React Router DOM
- Tailwind CSS + shadcn/ui
- Axios (HTTP client)

## 📋 Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- Cloudinary account

## ⚙️ Installation

### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file in backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:

```bash
npm run dev
```

## 🔗 API Endpoints

### User Routes
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `GET /api/v1/user/me` - Get current user
- `PUT /api/v1/user/update` - Update profile

### Product Routes
- `GET /api/v1/product/get` - Get all products
- `GET /api/v1/product/get/:id` - Get single product
- `POST /api/v1/product/create` - Create product (admin)
- `PUT /api/v1/product/update/:id` - Update product
- `DELETE /api/v1/product/delete/:id` - Delete product

### Cart Routes
- `GET /api/v1/cart/get` - Get user cart
- `POST /api/v1/cart/add` - Add item to cart
- `PUT /api/v1/cart/update/:id` - Update cart item
- `DELETE /api/v1/cart/remove/:id` - Remove cart item

## 📦 Dependencies

### Backend
- express, mongoose, jsonwebtoken, bcryptjs
- cors, dotenv, multer, cloudinary, nodemailer

### Frontend
- react, react-dom, react-router-dom
- @reduxjs/toolkit, redux-persist
- axios, lucide-react, tailwindcss

## 🌐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT tokens |
| `CLOUDINARY_*` | Cloudinary API credentials |
| `EMAIL_*` | SMTP email configuration |

## 📄 License

ISC - Author: mukesh