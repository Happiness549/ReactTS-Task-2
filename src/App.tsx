import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router'
import type { Link } from './types/Link'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './components/Search/Search'
import { LinkForm } from './components/LinkForm/LinkForm'
import { LinkList } from './components/LinkForm/LinkList'




function App() {
const [links, setLinks] = useState<Link[]>([]);
const [editLinks, setEditLinks] = useState<Link | null>(null);
const [search, setSearch] = useState('');

const handleAdd =(newLink: Link) => {
  setLinks([...links, newLink]);
}

const handleDelete =(id:number) =>{
  setLinks(links.filter((link)=>
  link.id !== id));
};
 
const handleEdit= (link: Link) => {
  setEditLinks(link);
}

const handleSearch = (text: string) => {
  setSearch(text);
};

  return (
    <>
    <Navbar />
    <Search onSearch = {handleSearch}/>
    <LinkForm onSave={handleAdd} />
    <LinkList linkList={links} onDelete={handleDelete}/>

    <Routes>
      <Route index element={<Home />} />
    </Routes>
    <Footer />
     
    </>
  )
}

export default App
