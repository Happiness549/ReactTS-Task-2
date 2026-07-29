import React, { useState, useEffect } from 'react'
import { Input } from '../Inputs/Input'
import { Text } from '../Text/Text'
import styles from './Link.module.css'
import Button from '../Button/Button'
import type { LinkItem } from '../../types/Link'


interface LinkFormProps{
  handleAdd: (link: LinkItem) => void;
  handleUpdate: (link: LinkItem) => void;
  editLink: LinkItem | null;
}

export const LinkForm: React.FC<LinkFormProps>= ({handleAdd, handleUpdate, editLink }) => {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');


  const [titleError, setTitleError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [tagsError, setTagsError] = useState(false);

     const handleSave = () => {
      const newLink: LinkItem = {
        id: editLink ? editLink.id :Date.now(),  
        title, 
        url, 
        description, 
        tags
      }
      if(validate()){
        if(editLink){
           handleUpdate(newLink);

        } else{
          handleAdd(newLink)
        }
        
          setTitle('');
          setUrl('');
          setDescription('');
          setTags('');
      } 
     
     }

     useEffect(() => {
      if(editLink){
        setTitle(editLink.title);
         setUrl(editLink.url);
          setDescription(editLink.description);
           setTags(editLink.tags);
      }
      
     }, [editLink]);

     const validate =():boolean =>{
        
      setTitleError(false);
      setUrlError(false);
      setDescriptionError(false);
      setTagsError(false);

      if(!title.trim()){
        setTitleError(true);
        return false;
      }
      if(!url.trim()){
        setUrlError(true);
        return false
      } 
      if(!description.trim()){
        setDescriptionError(true);
        return false
      }
      if(!tags.trim()){
        setTagsError(true);
        return false;
      } 
      try{
        new URL(url);
      } catch{
        setUrlError(true);
        return false
      }
      return true
     }
  
  return (
    <div className={styles['form-container']}>
        <Text variant='h2'>Add New Link </Text>
        <div className={styles['input-container']}>

         <Input
            label='Title'
            placeholder='Enter title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={titleError}
            errorMessage='Title is required'
        />
        
        <Input
            label='url'
            placeholder='Enter url'
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
             error={urlError}
            errorMessage='Url is required'
        />
        </div>
    
    <div className={styles['input-input']}>
         
         <Input  
            
            label='Description'
            placeholder='Enter description'
             type="text"  
            value={description}
            onChange={(e) => setDescription(e.target.value)}
             error={descriptionError}
            errorMessage='description is required'
           
          /> 
  
        <Input 
           
            label='Tags'
            placeholder='e.g programming'
            type='text'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
             error={tagsError}
            errorMessage='Tag is required'
        />

    </div>

     <Button text={'Add Link'} onClick={handleSave}/>
  
    </div>
  )
}
