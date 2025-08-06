# Dekamond - Next.js Full-Stack Application

A modern full-stack web application built with Next.js 15, featuring authentication, user management, and a comprehensive UI component system.

## Features

- **Full-Stack Next.js**: Complete application using Next.js App Router
- **Authentication System**: Login with username/password validation
- **User Management**: Display and manage user data
- **Responsive UI**: Modern, accessible component library
- **State Management**: Context-based state management with performance optimization
- **Type Safety**: Full TypeScript implementation
- **Custom Theme System**: Centralized color management with SCSS

## ️ Architecture

### Frontend

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **SCSS Modules** for styling
- **Context API** for state management
- **Custom UI Components** with theme system

### Backend

- **Next.js API Routes** for backend functionality
- **JSON Database** (simulated database using JSON files)
- **Custom Request Handler** with Axios
- **Error Handling** with proper HTTP status codes

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   └── login/               # Login page and API
│   ├── (protected)/             # Protected routes
│   │   └── dashboard/           # Dashboard with user list
│   ├── api/v1/                  # API routes
│   │   ├── auth/login/          # Authentication API
│   │   └── users/               # Users API
│   └── layout.tsx               # Root layout
├── shared/
│   ├── components/
│   │   ├── UI/                  # Reusable UI components
│   │   │   ├── Button/          # Button component
│   │   │   ├── Input/           # Input with validation
│   │   │   ├── Container/       # Layout container
│   │   │   └── Text/            # Typography component
│   │   ├── Providers/           # Context providers
│   │   └── Common/              # Common components
│   ├── contexts/                # React Context for state
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # TypeScript type definitions
│   ├── utils/                   # Utility functions
│   │   ├── api/                 # API utilities
│   │   │   ├── auth/            # Authentication API
│   │   │   ├── users/           # Users API
│   │   │   └── database/        # JSON database files
│   │   └── toolkit/             # Request handling
│   └── theme/                   # Design system
│       ├── colors.ts            # Color definitions
│       └── _colors.scss         # SCSS color variables
```

### Color Theme

- **Centralized Color Management**: All colors defined in `colors.ts`
- **SCSS Integration**: Colors available via `colors()` function
- **CSS Custom Properties**: Theme variables for dynamic theming
- **Semantic Color Naming**: Colors named by purpose, not value

### Component Library

- **Button**: Primary/Secondary variants with hover states
- **Input**: Form inputs with validation and mobile number formatting
- **Container**: Responsive layout containers (sm, md, lg, xl)
- **Text**: Typography component with variants

## 🔐 Authentication

### Implementation Details

- **LocalStorage**: Token storage (as per requirements)
- **Context API**: Two-layer state management for performance
- **Client-Side**: Full client-side rendering due to localStorage requirement
- **Route Protection**: AuthGuard component for protected routes

### Login Flow

1. User submits credentials
2. API validates against JSON database
3. Access token generated and stored
4. User redirected to dashboard
5. Token persists across sessions

### Database

- **JSON File**: `users.json` containing user data
- **Credentials**:
  - Username: `smallbutterfly278`
  - Password: `laser`

## 🛠️ Technical Decisions

### State Management

- **Context API**: Used instead of external libraries
- **Two-Layer Architecture**: Separate state and actions contexts for performance
- **Custom Hooks**: `useApp`, `useAuth` for clean API

### API Handling

- **Custom Request Utility**: Built with Axios
- **Error Handling**: Proper error responses with status codes
- **Type Safety**: Full TypeScript interfaces for requests/responses

### Styling

- **SCSS Modules**: Component-scoped styling
- **Custom Theme**: Centralized color system
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dekamond

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/login` - User login

### Users

- `GET /api/v1/users` - Get all users

## 🔧 Development Notes

### Client-Side Rendering

Due to the requirement to use localStorage for token storage, the entire application runs on the client-side. In a production environment, consider:

- **Cookies**: For better security and SSR support
- **Middleware**: For route protection
- **Server-Side Sessions**: For enhanced security

### Potential Improvements

- **React Hook Form**: For better form handling and validation
- **React Query**: For efficient data fetching and caching
- **Zod**: For runtime type validation
- **Tailwind CSS**: For utility-first styling
- **Middleware**: For server-side authentication checks

### Performance Optimizations

- **Context Splitting**: State and actions in separate contexts
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React.memo for expensive components
- **Bundle Optimization**: Tree shaking and code splitting

## 🧪 Testing

The application includes comprehensive error handling and validation:

- **Form Validation**: Real-time input validation
- **API Error Handling**: Proper error responses
- **Type Safety**: TypeScript prevents runtime errors
- **Mobile Number Validation**: Custom validation for phone numbers

## 📱 Mobile Support

- **Responsive Design**: All components are mobile-friendly
- **Touch-Friendly**: Proper touch targets and interactions
- **Mobile Number Input**: Special formatting for phone numbers

## 🔒 Security Considerations

- **Input Validation**: Client and server-side validation
- **Error Messages**: Generic error messages to prevent information leakage
- **Token Management**: Secure token storage and handling
- **Route Protection**: Client-side route guards

## 📄 License

This project is built for educational and demonstration purposes.

---

**Note**: This application demonstrates modern Next.js development practices while maintaining simplicity and clarity. The architecture is designed to be scalable and maintainable for future enhancements.
