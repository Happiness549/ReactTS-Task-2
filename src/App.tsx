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

const [editLinks, setEditLinks] = useState<LinkItem | null>(null);

const handleEdit = (link: LinkItem) => {
  setEditLinks(link);
}

const handleUpdate=(updatedLink: LinkItem)=>{
  setLinks(links.map((link)=>
  link.id === updatedLink.id? updatedLink : link));

}
const [searchQuery, setSearchQuery] = useState('');

const onSearch =(newvalue :string) =>{
  setSearchQuery(newvalue)
 
}

const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
     link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.tags.toLowerCase().includes(searchQuery.toLowerCase()) 
  );


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






  return (
    <>
    <Navbar />
    <Search search={searchQuery} onSearch={onSearch} />
    <LinkForm handleAdd={handleAdd}  handleUpdate={handleUpdate} editLink={editLinks}/>
    <LinkList linkList={filteredLinks} onDelete={handleDelete} handleEdit={handleEdit}/>
    <Footer />
     
    </>
  )
}


export default App
