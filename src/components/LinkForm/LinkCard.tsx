import React from 'react'
import type { Link } from '../../types/Link'
import { Text } from '../Text/Text';

interface CardProps{
  list: Link;
}

export const LinkCard:React.FC<CardProps> = ({list}) => {
  return (
    <div>
      <div>
        <Text variant={'h2'}>{list.title}</Text>
        <Text variant={'span'}>{list.description}</Text>
        <Text variant={'span'}>{list.url}</Text>
        <Text variant={'span'}>{list.tags}</Text>
      </div>
    </div>
  )
}
