import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importing components for different routes
import Home from './components/Home'


// importing styles for different components
import './styles/Home.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;