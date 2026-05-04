# E-Commerce Application

A comprehensive full-stack e-commerce platform built with modern web technologies, featuring user authentication, product management, shopping cart functionality, and admin dashboard. Designed to demonstrate scalable architecture, secure authentication, and efficient state management.

## 🏗️ Architecture Overview

This application follows a microservices-inspired architecture with separate frontend and backend services:

- **Frontend**: React SPA with client-side routing and global state management
- **Backend**: RESTful API server with JWT authentication and cloud storage integration
- **Database**: MongoDB with Mongoose ODM for data modeling
- **File Storage**: Cloudinary for image uploads and management
- **Email Service**: Nodemailer for OTP verification and notifications

### System Architecture Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React SPA     │    │  Express API    │    │   MongoDB       │
│   (Frontend)    │◄──►│   (Backend)     │◄──►│   (Database)    │
│                 │    │                 │    │                 │
│ - Components    │    │ - Controllers   │    │ - Users         │
│ - Redux Store   │    │ - Middleware    │    │ - Products      │
│ - Routing       │    │ - Routes        │    │ - Cart Items    │
│ - UI Library    │    │ - Models        │    │ - Sessions      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Cloudinary    │
                       │ (Image Storage) │
                       └─────────────────┘
```

## 🚀 Key Features

### User Management
- **JWT Authentication**: Secure token-based authentication with refresh mechanisms
- **Email Verification**: OTP-based email verification for account security
- **Profile Management**: User profile updates and session management

### Product Management
- **CRUD Operations**: Full product lifecycle management (admin only)
- **Image Upload**: Cloudinary integration for product images
- **Filtering & Search**: Advanced product filtering and search capabilities
- **Pagination**: Efficient data loading for large product catalogs

### Shopping Cart
- **Real-time Updates**: Redux-powered cart state management
- **Quantity Management**: Add, update, and remove cart items
- **Persistent Storage**: Cart persistence across sessions

### Admin Dashboard
- **User Management**: View and manage user accounts
- **Product Oversight**: Admin controls for product inventory
- **Sales Analytics**: Order and sales tracking
- **Order Management**: Process and track customer orders

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js with middleware architecture
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT) with bcrypt hashing
- **File Upload**: Multer for multipart form data, Cloudinary SDK
- **Email**: Nodemailer with Gmail SMTP
- **Security**: CORS, Helmet, input validation

### Frontend
- **Framework**: React 19 with Hooks and Context API
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: Redux Toolkit with Redux Persist
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with shadcn/ui component library
- **HTTP Client**: Axios with interceptors for API calls
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Version Control**: Git
- **Package Manager**: npm
- **Code Quality**: ESLint for linting
- **Environment**: dotenv for configuration management

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account for image storage
- Gmail account for email services (or alternative SMTP provider)

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd E-Commerce-App
```

### 2. Backend Configuration

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce

# Authentication
JWT_SECRET=your_super_secure_jwt_secret_key_here
JWT_EXPIRES_IN=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=noreply@ecommerce.com
```

Start the backend server:

```bash
npm start
# Server will run on http://localhost:5000
```

### 3. Frontend Configuration

```bash
cd ../frontend
npm install
```

Start the development server:

```bash
npm run dev
# Frontend will run on http://localhost:5173
```

### 4. Database Setup

Ensure MongoDB is running locally or update `MONGODB_URI` for Atlas connection.

## 🔗 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/user/register` | User registration | No |
| POST | `/api/v1/user/login` | User login | No |
| POST | `/api/v1/user/verify-email` | Email verification | No |
| GET | `/api/v1/user/me` | Get current user | Yes |
| PUT | `/api/v1/user/update` | Update profile | Yes |
| POST | `/api/v1/user/logout` | User logout | Yes |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/product/get` | Get all products | No |
| GET | `/api/v1/product/get/:id` | Get single product | No |
| POST | `/api/v1/product/create` | Create product | Admin |
| PUT | `/api/v1/product/update/:id` | Update product | Admin |
| DELETE | `/api/v1/product/delete/:id` | Delete product | Admin |

### Cart Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/v1/cart/get` | Get user cart | Yes |
| POST | `/api/v1/cart/add` | Add item to cart | Yes |
| PUT | `/api/v1/cart/update/:id` | Update cart item | Yes |
| DELETE | `/api/v1/cart/remove/:id` | Remove cart item | Yes |

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  avatar: String (Cloudinary URL),
  role: String (default: 'user'),
  isVerified: Boolean (default: false),
  createdAt: Date
}
```

### Product Model
```javascript
{
  name: String (required),
  description: String,
  price: Number (required),
  category: String (required),
  stock: Number (required),
  images: [String] (Cloudinary URLs),
  createdAt: Date
}
```

### Cart Model
```javascript
{
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId (ref: Product),
    quantity: Number
  }],
  createdAt: Date
}
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure authentication with expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured CORS policies
- **Rate Limiting**: API rate limiting (can be added)
- **File Upload Security**: Multer with file type restrictions

## 🚀 Deployment

### Backend Deployment
```bash
# Build for production
npm run build

# Use PM2 for process management
npm install -g pm2
pm2 start ecosystem.config.js
```

### Frontend Deployment
```bash
# Build optimized bundle
npm run build

# Serve static files with nginx/apache
# or deploy to Vercel/Netlify/CDN
```

### Environment Variables for Production
- Use strong, randomly generated secrets
- Configure production database (MongoDB Atlas)
- Set up production email service
- Enable HTTPS with SSL certificates

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests (if implemented)
cd ../frontend
npm test
```

## 📊 Performance Optimizations

- **Lazy Loading**: React.lazy for component code splitting
- **Image Optimization**: Cloudinary transformations
- **Database Indexing**: Optimized MongoDB queries
- **Caching**: Redux persist for client-side caching
- **Bundle Optimization**: Vite's tree shaking and minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mukesh** - [GitHub Profile](https://github.com/yourusername)

---

## 📚 Table of Contents

| Section | Link |
|---------|------|
| Architecture Overview | [🏗️ Architecture Overview](#-architecture-overview) |
| Key Features | [🚀 Key Features](#-key-features) |
| Technology Stack | [🛠️ Technology Stack](#-technology-stack) |
| Prerequisites | [📋 Prerequisites](#-prerequisites) |
| Installation & Setup | [⚙️ Installation & Setup](#-installation--setup) |
| API Documentation | [🔗 API Documentation](#-api-documentation) |
| Database Schema | [🗄️ Database Schema](#-database-schema) |
| Security Features | [🔒 Security Features](#-security-features) |
| Deployment | [🚀 Deployment](#-deployment) |
| Testing | [🧪 Testing](#-testing) |
| Performance Optimizations | [📊 Performance Optimizations](#-performance-optimizations) |
| Contributing | [🤝 Contributing](#-contributing) |
| License | [📄 License](#-license) |

## 🗂️ Project Directory Structure

```
E-Commerce-App/
├── backend/
│   ├── controllers/          # Route handlers
│   ├── database/             # Database configuration
│   ├── emailVerify/          # Email verification logic
│   ├── middleware/           # Custom middleware
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API routes
│   ├── utils/                # Utility functions
│   ├── package.json
│   └── server.js             # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── redux/            # Redux store & slices
│   │   ├── lib/              # Helper utilities
│   │   ├── assets/           # Static assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/               # Public assets
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Quick Start Commands

| Command | Purpose | Location |
|---------|---------|----------|
| `npm install` | Install dependencies | backend/ or frontend/ |
| `npm start` | Start backend server | backend/ |
| `npm run dev` | Start frontend dev server | frontend/ |
| `npm test` | Run tests | backend/ or frontend/ |
| `npm run build` | Build for production | frontend/ |

## 🔑 Key Environment Variables

| Variable | Backend | Frontend | Required |
|----------|---------|----------|----------|
| `PORT` | ✓ | ✗ | Yes |
| `MONGODB_URI` | ✓ | ✗ | Yes |
| `JWT_SECRET` | ✓ | ✗ | Yes |
| `CLOUDINARY_*` | ✓ | ✗ | Yes |
| `EMAIL_*` | ✓ | ✗ | Yes |

## 📱 Services Checklist

- [ ] MongoDB is running/accessible
- [ ] Cloudinary account configured
- [ ] Gmail/Email service configured
- [ ] Environment variables set
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173

## 🎯 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| MongoDB connection fails | Check `MONGODB_URI` and ensure DB is running |
| Cloudinary upload fails | Verify `CLOUDINARY_CLOUD_NAME`, `API_KEY`, `API_SECRET` |
| Email verification not working | Check `EMAIL_USER`, `EMAIL_PASS`, and SMTP settings |
| CORS errors | Verify backend CORS configuration matches frontend URL |
| JWT token errors | Check `JWT_SECRET` is correctly set in backend |

---

*Built with ❤️ using React, Node.js, and MongoDB*