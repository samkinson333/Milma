# Milma React 3D

A modern, high-performance web application for **Milma** (Kerala Co-operative Milk Marketing Federation), designed to provide a premium digital experience for farmers, cooperative societies, distributors, and consumers.

## 🌟 Features

- **Interactive 3D Experience**: A stunning landing page featuring interactive 3D elements powered by React Three Fiber.
- **Internationalization (i18n)**: Full support for English and Malayalam languages, ensuring accessibility for all users across Kerala.
- **Smooth Aesthetics**: Premium design with glassmorphism, fluid animations (Framer Motion), and buttery-smooth scrolling (Lenis).
- **Admin Dashboard**: A comprehensive management suite for administrators to update news, products, services, and manage user feedback.
- **Responsive & Desktop-First**: Optimized for a seamless experience across all devices, from mobile phones to high-resolution desktops.
- **SEO Optimized**: Built with semantic HTML and modern web standards for better search engine visibility.

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [Drei](https://github.com/pmndrs/drei)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/)
- **Styling**: Vanilla CSS Modules (with a centralized CSS variable-based design system)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: [i18next](https://www.i18next.com/), `react-i18next`
- **Routing**: [React Router](https://reactrouter.com/)

## 📁 Project Structure

```text
src/
├── components/
│   ├── admin/       # Components specific to the Admin Dashboard
│   ├── common/      # Reusable UI components (Buttons, Cards, Selectors)
│   ├── layout/      # Layout components (Header, Footer, Layout Wrapper)
│   └── specific/    # Page-specific components (Hero3D, NewsSection, etc.)
├── context/         # React Context providers (Theme, Cart)
├── pages/
│   ├── admin/       # Administrative management pages
│   ├── about/       # Organization history and information
│   ├── career/      # Job opportunities and recruitment
│   ├── services/    # Specialized service portals
│   └── ...          # Public pages (Products, Contact, etc.)
├── styles/          # Global styles and color system
├── translations/    # JSON dictionaries for English and Malayalam
└── main.tsx         # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Milma
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application and builds for production.
- `npm run lint`: Runs ESLint to check for code quality and potential errors.
- `npm run preview`: Locally previews the production build.

## 🤝 Contributing

This project is a joint effort in modernizing Milma's digital presence. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

Proprietary - Kerala Co-operative Milk Marketing Federation (MILMA).
