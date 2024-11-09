# URL Shortener Frontend

A modern URL shortening application built with React and Vite, featuring QR code generation and flexible backend support for both PostgreSQL and MongoDB databases.
Head over [here](https://github.com/Mohsin-Riaz/url-shortener-spring-boot) to see the SpringBoot backend.

## 🚀 Features

-   URL shortening with custom aliases
-   QR code generation for shortened URLs
-   Responsive and modern UI
-   Support for both PostgreSQL and MongoDB backends
-   Easy deployment configuration
-   Mobile-friendly design

## 🛠️ Technologies

-   **Frontend Framework:** React 18
-   **Build Tool:** Vite
-   **HTTP Client:** Axios
-   **QR Code Generation:** qrcode.react
-   **Icons:** React Icons
-   **Backend:** Spring Boot (separate repository)
-   **Database:** PostgreSQL/MongoDB (configurable)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v14 or higher)
-   npm or yarn
-   Git

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Mohsin-Riaz/url-shortener-frontend.git
cd url-shortener
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and configure your environment variables:

```env
VITE_BACKEND_URL=backend_url
```

## 🔧 Development

To start the development server:

```bash
npm run dev
```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📦 Deployment

This project is configured for GitHub Pages deployment. To deploy:

```bash
npm run deploy
```

This will build the project and deploy it to the specified GitHub Pages URL.

## 📁 Project Structure

```
src/
├── api/           # API integration
│   ├── mongo.js   # MongoDB API endpoints
│   └── postgres.js# PostgreSQL API endpoints
├── components/    # React components
│   ├── InputUrl.jsx
│   ├── Link.jsx
│   ├── Loading.jsx
│   └── ShortenedLinks.jsx
├── assets/        # Static assets
├── App.jsx        # Main application component
└── main.jsx      # Application entry point
```

## ⚙️ Configuration

The application can be configured to work with either PostgreSQL or MongoDB backends through environment variables. Check the corresponding API files in the `src/api` directory for specific implementation details.
