# ☕ Bean Buzz Coffee Shop

A premium, modern, and responsive React-based website for Bean Buzz Coffee Shop. Designed with a focus on aesthetics, user experience, and a "luxury coffee" atmosphere using a sophisticated color palette and glassmorphism effects.

## ✨ Features

- **Modern UI/UX**: Custom design system with consistent typography, colors, and shadows.
- **Glassmorphism Navbar**: Trendy, sticky navigation with blur effects.
- **Interactive Menu**: Data-driven menu grid with hover animations.
- **Responsive Design**: Fully responsive layouts for mobile, tablet, and desktop.
- **Contact Form**: Functional UI for the contact form with state management.
- **Parallax Hero**: Engaging entry section with photorealistic imagery.

## 🛠️ Technologies Used

- **React 18+**: Core framework.
- **React Router Dom**: Client-side routing.
- **CSS3**, CSS Variables & Flexbox/Grid**: Advanced styling without external UI libraries.
- **Google Fonts**: 'Playfair Display' for headings and 'Outfit' for body text.

## 📂 Project Structure

```bash
coffee-shop/
├── public/                 # Static files
│   └── index.html
└── src/
    ├── assets/             # Static assets (images, icons)
    │   └── images/
    ├── components/         # Reusable UI components
    │   ├── Address.jsx     # Global Footer
    │   ├── Hero.jsx        # Landing Hero section
    │   ├── Menu.jsx        # Menu Grid
    │   └── Navbar.jsx      # Sticky Navigation
    ├── pages/              # Route components
    │   ├── About.jsx       # 'Our Story' page
    │   ├── Contact.jsx     # Contact form & info
    │   └── Home.jsx        # Main landing page
    ├── styles/             # CSS Stylesheets
    │   ├── About.css
    │   ├── Address.css
    │   ├── App.css
    │   ├── Contact.css
    │   ├── Hero.css
    │   ├── Menu.css
    │   └── Navbar.css
    ├── App.js              # Main application layout
    └── index.js            # Entry point
```

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shashank23codes/coffee-shop.git
    cd coffee-shop
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Building for Production

To build the app for production to the `build` folder:
```bash
npm run build
```

## 🌍 Deployment

This website is ready to be deployed on GitHub Pages.

1.  Update the `homepage` field in `package.json`.
2.  Run `npm run deploy`.

---
© 2025 Bean Buzz Coffee Shop. All rights reserved.
