import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import RockPaperScissors from './pages/RockPaperScissors'
import Stopwatch from './pages/Stopwatch'
import Calculator from './pages/Calculator'
import QuoteGenerator from './pages/QuoteGenerator'

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotegenerator" element={<QuoteGenerator />} />
          </Route>
          {/* Add more routes as needed */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
