import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Routes
import Index from './routes/Index'
import About from './routes/About'
import Services from './routes/Services'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
// Components
import NavBar from './components/NavBar'
import Footer from './components/Index/Footer'

const App = () => {
  return (
    <div className='bg-neutral-950'>

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App