import React from 'react'
import type { Link } from '../../types/Link'
import { LinkCard } from './LinkCard';


interface LinkItemProps{
    linkList:  Link[];
    onDelete: (id: number) => void;
}

export const LinkList:React.FC<LinkItemProps> = ({linkList, onDelete}) => {
  return (
    <div>
        {linkList.map((list) =>(
          <LinkCard key={list.id} 
          list={list}
          onDelete={onDelete}
           />
        ))}
     
    </div>
  )
}
