import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
    
    </Routes>

    <Footer />
     
    </>
  )
}

export default App
