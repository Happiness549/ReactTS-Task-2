import React from 'react'
import type { Link } from '../../types/Link'
import { Text } from '../Text/Text';
import styles from './Link.module.css'
import Button from '../Button/Button';

interface CardProps{
  list: Link;
  onDelete: (id:number) => void;
  
}

export const LinkCard:React.FC<CardProps> = ({list, onDelete}) => {


  return (
    <div className={styles['card-container']} >
      <div className={styles['card']}>
        <Text variant={'h2'}>{list.title}</Text>
        <Text variant={'p'}>{list.description}</Text>
        <Text variant={'p'}>{list.url}</Text>
        <Text variant={'p'}>{list.tags}</Text>
      </div>
      <div className={styles['button-container']}>
        <Button text={'Delete'} onClick={() =>onDelete(list.id)}/>
        <Button text={'Add Link'} />
      </div>
    </div>
  )
}
