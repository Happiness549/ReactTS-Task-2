import React from 'react'

export interface LinkCardProps{
 id: number;
 title: string;
 url: string; 
 description: string;
 tags: string
}

export const LinkCard: React.FC<LinkCardProps> = ({id, title, url, descriptyion, tags}) => {
  return (
    <div>
        
    </div>
  )
}
