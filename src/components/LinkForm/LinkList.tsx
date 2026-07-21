import React from 'react'
import type { Link } from '../../types/Link'

interface LinkItemProps{
    linkList:  Link[];
}

export const LinkList:React.FC<LinkItemProps> = ({linkList}: LinkItemProps) => {
  return (
    <div>
        {linkList.map((list) =>(
            <li key={list.id}>
                {list.title}
                {list.url}
                {list.description}
                {list.tags}
            </li>
        ))}

    </div>
  )
}
