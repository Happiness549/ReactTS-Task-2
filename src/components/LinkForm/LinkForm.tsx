import React from 'react'
import { Input } from '../Inputs/Input'
import { Text } from '../Text/Text'

export const LinkForm:React.FC = () => {
  return (
    <div>
        <Text variant='h2'>Add New Link</Text>
        <Input
            label='Title'
            placeholder='Enter title'
            type='text'
            value=''
            onChange={() => {}}
        />
        
        <Input
            label='Description'
            placeholder='Enter description'
            type='text'
            value=''
            onChange={() => {}}
        />

        <Input 
            label='Url'
            placeholder='Enter url'
            type='url'
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
  )
}
