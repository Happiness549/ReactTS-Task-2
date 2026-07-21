import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import type { Link } from './types/Link'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './components/Search/Search'
import { LinkForm } from './components/LinkForm/LinkForm'





function App() {
const [lists, setLists] = useState<Link[]>([]);

//Add function
//Delete function
//Update function

  return (
    <>
    <Navbar />
    <Search />
    <LinkForm />
    
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    <Footer />
     
    </>
  )
}

export default App
