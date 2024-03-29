import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Routes
import Index from './routes/Index'
import Services from './routes/Services'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import AboutMe from './routes/AboutMe'
import Teste from './routes/Teste'
// Components
import NavBar from './components/NavBar'
import Footer from './components/Index/Footer'

const App = () => {

  


  return (
    <div className='bg-neutral-950 font-roboto'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/teste' element={<Teste/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App