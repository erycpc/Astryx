import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// Importing components for different routes
import Home from './components/Home'
import BehindTheScenes from './components/BehindTheScenes'
import OurWork from './components/OurWork'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import About from './components/About'
import SplashScreen from './components/SplashScreen'


// importing styles for different components
import './styles/Home.css'
import './styles/Navigation.css'
import './styles/About.css'
import './styles/BehindTheScenes.css'
import './styles/Contact.css'
import './styles/OurWork.css'
import './styles/SplashScreen.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/behind-the-scenes", element: <BehindTheScenes /> },
      { path: "/our-work", element: <OurWork /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/about-us", element: <About />},
    ],
  },
]);

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;