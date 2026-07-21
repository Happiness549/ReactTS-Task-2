import React from 'react'
import { Input } from '../Inputs/Input'
import { Text } from '../Text/Text'
import styles from './Link.module.css'
import Button from '../Button/Button'


export const LinkForm:React.FC = () => {
  
  return (
    <div className={styles['form-container']}>
        <Text variant='h2'>Add New Link</Text>
        <div className={styles['input-container']}>

         <Input
            className=''
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
    
    <div className={styles['input-input']}>

         <Input  
            
            label='Description'
            placeholder='Enter description'
             type="text"  
            value=''
            onChange={() => {}}
           
          /> 
  
        <Input 
           
            label='Tags'
            placeholder='e.g programming'
            type='text'
            value=''
            onChange={() => {}}
        />

    </div>

     <Button text={'Add Link'}/>
  
    </div>
  )
}
