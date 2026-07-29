import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router'
import type { LinkItem } from './types/Link'
import { Navbar } from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
import { Search } from './components/Search/Search'
import { LinkForm } from './components/LinkForm/LinkForm'
import { LinkList } from './components/LinkForm/LinkList'





function App() {
const [links, setLinks] = useState<LinkItem[]>(() => {
  try {
    const saved = localStorage.getItem("links");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});

const [editLinks, setEditLinks] = useState<LinkItem []| null>(null);
const [searchQuery, setSearchQuery] = useState('');

const onSearch =(newvalue :string) =>{
  setSearchQuery(newvalue)
  const updatedLinks = links.filter((linkItem) => (linkItem.title === searchQuery || 
    linkItem.description === searchQuery || 
    linkItem.tags === searchQuery || 
    linkItem.url === searchQuery))
    setLinks(updatedLinks)
}


const handleAdd = (newLink: LinkItem) => {
  setLinks((prevLinks) => {
    
    const currentLinks = Array.isArray(prevLinks) ? prevLinks : [];
    const updatedLinks = [...currentLinks, newLink];
    
    
    localStorage.setItem("links", JSON.stringify(updatedLinks));
   
    return updatedLinks;
  });
};

const handleDelete =(id:number) =>{
  const storageLinks : LinkItem[]  =JSON.parse(localStorage.getItem("links")!)
  const updatedList = storageLinks.filter((link)=>
  link.id !== id) 
  setLinks(updatedList);

  localStorage.setItem("links", JSON.stringify(updatedList));

};
 
const handleEdit= (index:number, link: LinkItem) => {
  setEditLinks((prevLinks) => {
    const next = Array.isArray(prevLinks) ? [...prevLinks] : [];
    next[index] = link;
    return next
  });

}



  return (
    <>
    <Navbar />
    <Search search={searchQuery} onSearch={onSearch} filteredResults={links}/>
    <LinkForm handleAdd={handleAdd}  />
    <LinkList linkList={links} onDelete={handleDelete}/>
    <Footer />
     
    </>
  )
}


export default App
