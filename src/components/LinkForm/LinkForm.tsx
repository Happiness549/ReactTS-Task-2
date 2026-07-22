import React, { useState } from 'react'
import { Input } from '../Inputs/Input'
import { Text } from '../Text/Text'
import styles from './Link.module.css'
import Button from '../Button/Button'
import type { Link } from '../../types/Link'


interface LinkFormProps{
  onSave: (link: Link) => void;
}

export const LinkForm: React.FC<LinkFormProps>= ({onSave }) => {

  const [title, setTitle] = useState('');
   const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
     const [tags, setTags] = useState('');

  

     const handleSave = () => {
      const newLink: Link = {
        id: Date.now(),  
        title, 
        url, 
        description, 
        tags
      }
      onSave(newLink);

      setTitle('');
      setUrl('');
      setDescription('');
      setTags('');
     }
  
  return (
    <div className={styles['form-container']}>
        <Text variant='h2'>Add New Link</Text>
        <div className={styles['input-container']}>

         <Input
            label='Title'
            placeholder='Enter title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        
        <Input
            label='url'
            placeholder='Enter url'
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        </div>
    
    <div className={styles['input-input']}>
         
         <Input  
            
            label='Description'
            placeholder='Enter description'
             type="text"  
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           
          /> 
  
        <Input 
           
            label='Tags'
            placeholder='e.g programming'
            type='text'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
        />

    </div>

     <Button text={'Add Link'} onClick={handleSave}/>
  
    </div>
  )
}
