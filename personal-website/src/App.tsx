import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
