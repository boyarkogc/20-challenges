import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RockPaperScissors from './pages/RockPaperScissors'
import Stopwatch from './pages/Stopwatch'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
