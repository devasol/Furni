<div align="center">
  <h1>🪑 Furni Frontend - React Application</h1>
  
  ![React Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
  
  <p align="center">
    <strong>Modern React-based furniture e-commerce frontend application</strong><br>
    <em>Part of the Furni project - transforming spaces with premium furniture</em>
  </p>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/github/license/devasol/Furni?style=for-the-badge)](LICENSE)

</div>

---

## 📂 **Frontend Application Structure**

This directory contains the React-based frontend application for the Furni project, built with modern technologies and best practices.

```
frontend/
├── public/                    # Static assets
│   ├── furni.png             # Site favicon
│   └── vite.svg              # Vite logo
├── src/                       # Source code
│   ├── assets/               # Media files & resources
│   │   ├── homeAndSofa/      # Landing page images
│   │   ├── items/            # Product images
│   │   └── sofa/             # Sofa category images
│   ├── components/           # Reusable UI components
│   │   ├── AboutUs/         # About Us sections
│   │   ├── blog/            # Blog components
│   │   ├── contactUs/       # Contact form & info
│   │   ├── home/            # Homepage components
│   │   │   ├── chairItems/  # Furniture showcase
│   │   │   ├── footer/      # Site footer
│   │   │   ├── header/      # Navigation header
│   │   │   ├── products/    # Featured products
│   │   │   ├── weHelp/      # Services section
│   │   │   └── whyChooseUs/ # Value proposition
│   │   ├── login/           # Authentication UI
│   │   └── services/        # Service offerings
│   ├── pages/                # Page-level components
│   │   ├── AboutUs/         # About Us page
│   │   ├── blog/            # Blog landing page
│   │   ├── contactUs/       # Contact page
│   │   ├── homePage/        # Homepage
│   │   ├── login/           # Login page
│   │   └── services/        # Services page
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies & scripts
├── vite.config.js          # Vite build configuration
└── README.md               # This file
```

---

## 🚀 **Getting Started**

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser** to `http://localhost:5173`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts development server with hot reload |
| `npm run build` | Creates production-ready optimized build |
| `npm run preview` | Locally previews production build |
| `npm run lint` | Checks code for linting errors |

---

## ✨ **Frontend Features**

### 🏠 **Homepage Components**
- **Interactive hero section** with smooth animations
- **Furniture showcase** with hover effects
- **Responsive header** with navigation
- **Animated footer** with contact information

### 📱 **Mobile-First Design**
- **Responsive navigation** with hamburger menu
- **Touch-friendly** interactive elements
- **Optimized performance** for mobile devices
- **Smooth scroll** to top functionality

### 🛠️ **Technical Features**
- **React Router** for navigation
- **GSAP animations** for smooth transitions
- **CSS Modules** for component-scoped styling
- **Font Awesome** for rich iconography
- **Intersection Observer** for scroll animations

---

## 🎨 **Styling & Design**

### **CSS Architecture**
- **CSS Modules** for component-local styles
- **Responsive design** with mobile-first approach
- **Modern gradients** and transition effects
- **Accessible color contrast** ratios

### **Animation System**
- **GSAP-powered** smooth animations
- **Scroll-triggered** animations
- **Page transition** effects
- **Interactive hover** animations

---

## 🤝 **Contributing to Frontend**

### **Component Development**
1. Create new components in the `src/components/` directory
2. Follow the existing naming convention
3. Use CSS Modules for styling
4. Add appropriate prop types and comments

### **Page Creation**
1. Create new pages in the `src/pages/` directory
2. Connect to router in `App.jsx`
3. Follow existing component patterns
4. Ensure responsive design compliance

---

## 📄 **Frontend License**

This frontend application is part of the Furni project and is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Dawit S. (devasol)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### ⚡ **Part of the Furni Project**

For full project details, visit the main repository: [Furni on GitHub](https://github.com/devasol/Furni)

**Built with ❤️ using React & Vite**

</div>