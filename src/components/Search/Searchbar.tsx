import React from 'react'
import styles from './Search.module.css'
import { Text } from '../Text/Text'
import searchIcon from '../../assets/searchIcon.png'

    
   interface SearchQueryProps{
      value: string;
      onChange: (value: string) => void;
      placeholder?: string;
   }     


export const Searchbar: React.FC<SearchQueryProps> = ({value, onChange, placeholder='Enter a link'}) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  
  return (
    <div className={styles['search-bar']}>
        <Text variant='span' style={{color: 'rgb(20, 20, 20)', padding: 10}}>Search</Text>
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          type="text"
          className={styles['search-input']}
        />
        <img src={searchIcon} alt='Search icon on search bar' className={styles['search-icon']}/>
    </div>
  )
}}
