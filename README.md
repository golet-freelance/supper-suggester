# Turkish-Kurdish Menu App 🍽️

A beautiful React application for suggesting traditional Turkish and Kurdish dinner menus and desserts with a modern, animated UI.

## ✨ Features

- **Dinner Menu Suggestions**: Traditional Turkish and Kurdish dinner combinations
- **Dessert Suggestions**: Authentic Turkish and Kurdish sweets
- **5-Day Repeat Restriction**: Smart algorithm prevents menu repetition
- **User Profiles**: Personal profiles with avatar selection and photo upload
- **Responsive Design**: Works perfectly on desktop and mobile
- **Beautiful Animations**: Smooth transitions and hover effects
- **Local Storage**: All data persists locally in the browser

## 🚀 Deployment

### Using Docker Compose (Recommended)

1. **Build and run the application:**
   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and go to `http://localhost:3001`

### Manual Docker Commands

1. **Build the image:**
   ```bash
   docker build -t turkish-kurdish-menu-app .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3001:80 turkish-kurdish-menu-app
   ```

## 🏗️ Architecture

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Container**: Docker + Nginx
- **Port**: 3001 (internal deployment)

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingScreen.tsx       # Loading state component
│   ├── WelcomeScreen.tsx       # First-time user welcome
│   ├── MainApp.tsx            # Main application interface
│   ├── DinnerMenuSuggester.tsx # Dinner menu logic
│   ├── DessertSuggester.tsx   # Dessert suggestion logic
│   ├── ProfileSetup.tsx       # User profile creation
│   └── UserProfile.tsx        # Profile management
├── data/
│   ├── dinnerMenus.ts         # Dinner menu data
│   └── desserts.ts            # Dessert data
└── App.tsx                    # Main app orchestrator
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Configuration

- **Base Image**: Node.js 20 Alpine for building
- **Production Image**: Nginx Alpine for serving
- **Multi-stage Build**: Optimized for smaller final image
- **SPA Routing**: Nginx configured for client-side routing
- **Security Headers**: Basic security headers included

## 🌟 Key Features

### Smart Menu Suggestions
- 40+ traditional Turkish and Kurdish dinner combinations
- 40+ authentic desserts from both cultures
- 5-day restriction prevents menu repetition
- Beautiful card-based UI with animations

### User Experience
- Welcome screen for first-time users
- Profile system with name, avatar, and photo upload
- Responsive design for all devices
- Smooth animations and transitions
- Orange/amber color theme

### Technical Excellence
- TypeScript for type safety
- Component-based architecture
- Local storage for data persistence
- Optimized Docker containerization
- Clean, maintainable code structure
