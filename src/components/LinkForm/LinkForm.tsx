import React from 'react'
import { Input } from '../Inputs/Input'
import { Text } from '../Text/Text'
import styles from './Link.module.css'

export const LinkForm:React.FC = () => {
  return (
    <div className={styles['form-container']}>
        <Text variant='h2' className={styles['input-text']}>Add New Link</Text>
        <div className={styles['input-container']}>
        <Input
        
            label='Title'
            placeholder='Enter title'
            type='text'
            value=''
            onChange={() => {}}
        />
        
        <Input
            label='url'
            placeholder='Enter url'
            type='text'
            value=''
            onChange={() => {}}
        />

        </div>
    
    <div>
         <Input 
           
            label='Description'
            placeholder='Enter description'
            type='url'
            value=''
            onChange={() => {}}
            className={styles.description}
          />
    

    
        <Input 
           className={styles['tags-input']}
            label='Tags'
            placeholder='e.g programming'
            type='text'
            value=''
            onChange={() => {}}
        />

    </div>

     
  
    </div>
  )
}
