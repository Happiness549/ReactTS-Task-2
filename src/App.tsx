import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
    
    </Routes>
     
    </>
  )
}

export default App
