import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// Importing components for different routes
import Home from './components/Home'
import BehindTheScenes from './components/BehindTheScenes'
import OurWork from './components/OurWork'
import Contact from './components/Contact'
import Navigation from './components/Navigation'


// importing styles for different components
import './styles/Home.css'
import './styles/Navigation.css'

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
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;