import React from 'react'
import type { LinkItem } from '../../types/Link'
import { LinkCard } from './LinkCard';
import styles from "./Link.module.css"


interface LinkItemProps{
    linkList:  LinkItem[];
    onDelete: (id: number) => void;
    handleEdit: (link: LinkItem) => void;
}

export const LinkList:React.FC<LinkItemProps> = ({linkList, onDelete, handleEdit}) => {
  return (
    <div className={styles['card-items']}>
        {linkList.map((listItem) =>(
          <LinkCard 
          key={listItem.id} 
          listItem={listItem}
          onDelete={onDelete}
          handleEdit={handleEdit}
        
           />
        ))}
     
    </div>
  )
}
