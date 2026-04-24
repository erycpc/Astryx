import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importing components for different routes
import Home from './components/Home'


// importing styles for different components
import './styles/Home.css'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;