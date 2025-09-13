import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navigation */}
      <Navbar />

      <main className='flex-1'> 
        <Home />
        <Skills />
        <Projects />
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Contact/>} />
            {/* <Route path="/contact-form" element={<ContactForm/>} /> */}
          </Routes>
        </BrowserRouter>
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
