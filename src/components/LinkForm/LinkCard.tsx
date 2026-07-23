import React from 'react'
import type { LinkItem } from '../../types/Link'
import { Text } from '../Text/Text';
import styles from './Link.module.css'
import Button from '../Button/Button';

interface CardProps{
  listItem: LinkItem;
  onDelete: (id:number) => void;
  
}

export const LinkCard:React.FC<CardProps> = ({listItem, onDelete}) => {


  return (
    <div className={styles['card-container']} >
      <div className={styles['card']}>
        <Text variant={'h2'}>{listItem.title}</Text>
        <Text variant={'p'}>{listItem.description}</Text>
        <Text variant={'p'}>{listItem.url}</Text>
        <Text variant={'p'}>{listItem.tags}</Text>
      </div>
      <div className={styles['button-container']}>
        <Button text={'Delete'} onClick={() =>onDelete(listItem.id)}/>
        <Button text={'Edit Link'} />
      </div>
    </div>
  )
}




