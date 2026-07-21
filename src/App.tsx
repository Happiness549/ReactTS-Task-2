import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './components/Search/Search'



//Add function
//Delete function
//Update function

function App() {
const [lists, setLists] = useState([]);
const [listValue, setListvalue] = useState('');
  

  return (
    <>
    <Navbar />
    <Search />
    <Routes>
      <Route index element={<Home />} />
    
    </Routes>


    <Footer />
     
    </>
  )
}

export default App
