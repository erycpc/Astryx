import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importing components for different routes
import Home from './components/Home'
import Navigation from './components/Navigation'


// importing styles for different components
import './styles/Home.css'
import './styles/Navigation.css'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;