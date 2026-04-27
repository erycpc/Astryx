# 🎬 Astryx

> A modern, cinematic film production company website built with React and Vite.

**[Live Demo →](https://astryx-dun.vercel.app/)**

---

## Overview

Astryx is a premium film production company website designed with a bold cinematic aesthetic. The site combines gold accents, film grain textures, and fluid animations to communicate a commitment to high-quality storytelling. Built as a single-page application with React Router, it delivers a seamless, immersive browsing experience.

## Features

- **Cinematic Design** — Film grain textures, gold accent palette, and dark, dramatic layouts that evoke the world of professional filmmaking.
- **Smooth Animations** — Carefully crafted transitions and motion effects throughout the site.
- **Responsive Layout** — Fully optimised for desktop, tablet, and mobile viewports.
- **Client-side Routing** — Fast, seamless page navigation powered by React Router with no full-page reloads.
- **Modern Build Tooling** — Vite for lightning-fast development and optimised production builds.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React |
| Routing | React Router |
| Build Tool | Vite |
| Styling | CSS (70.9%) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/erycpc/Astryx.git

# Navigate into the project directory
cd Astryx

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Build for Production

```bash
npm run build
```

The optimised output will be placed in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Astryx/
├── public/          # Static assets
├── src/             # Application source code
│   ├── components/  # Reusable UI components
│   ├── pages/       # Route-level page components
│   └── main.jsx     # Application entry point
├── index.html       # HTML shell
├── vite.config.js   # Vite configuration
└── package.json
```

## Deployment

The site is deployed on **Vercel**. Any push to the `main` branch triggers an automatic production deployment.

To deploy your own instance:

1. Fork this repository.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will auto-detect the Vite framework and configure build settings.
4. Click **Deploy**.

## License

This project is open source. Feel free to use it as inspiration or a starting point for your own projects.

---

*Made by [erycpc](https://github.com/erycpc)*
