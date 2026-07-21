import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import type { Link } from './types/Link'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './components/Search/Search'
import { LinkForm } from './components/LinkForm/LinkForm'


<<<<<<< HEAD
=======



function App() {
const [lists, setLists] = useState<Link[]>([]);
>>>>>>> 546f428b8af6c329fc725591b6259db1019d0bed

//Add function
//Delete function
//Update function

<<<<<<< HEAD
function App() {
const [lists, setLists] = useState([]);
const [listValue, setListvalue] = useState('');
  

=======
>>>>>>> 546f428b8af6c329fc725591b6259db1019d0bed
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
