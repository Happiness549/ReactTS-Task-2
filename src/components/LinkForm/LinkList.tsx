import React from 'react'
import type { Link } from '../../types/Link'
import { LinkCard } from './LinkCard';

interface LinkItemProps{
    linkList:  Link[];
}

export const LinkList:React.FC<LinkItemProps> = ({linkList}: LinkItemProps) => {
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
