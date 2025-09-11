import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Skills from './components/Skills'

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navigation */}
      <Navbar />

      <main className='flex-1'> 
        <Home />
        <Skills />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
