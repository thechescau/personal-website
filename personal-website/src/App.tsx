import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        {/* Navigation */}
        <Navbar />

        <main className='flex-1'> 
          <Routes>
            <Route 
              path="/"
              element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            {/* <Route path="/contact-form" element={<ContactForm />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
