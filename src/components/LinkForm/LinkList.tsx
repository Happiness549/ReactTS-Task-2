import React from 'react'
import type { Link } from '../../types/Link'
import { LinkCard } from './LinkCard';
import Button from '../Button/Button';

interface LinkItemProps{
    linkList:  Link[];
}

export const LinkList:React.FC<LinkItemProps> = ({linkList}) => {
  return (
    <div>
        {linkList.map((list) =>(
          <LinkCard key={list.id} 
          list={list}
          
           />
        ))}
     
    </div>
  )
}
