import React, { useState } from 'react'
import styles from './Search.module.css'
import { Text } from '../Text/Text'
import searchIcon from '../../assets/searchIcon.png'
import type {LinkItem} from '../../types/Link'

    
   interface SearchComponentProps{
      search:string;
      onSearch : (newValue :string) => void;
      filteredResults : LinkItem[];
   }     


export const Searchbar: React.FC<SearchComponentProps> = ({search,onSearch,filteredResults} ) => {
  
  return (
    <div className={styles['search-bar']}>
        <Text variant='span' style={{color: 'rgb(20, 20, 20)', padding: 10}}>Search</Text>
        <input
          type="text"
          className={styles['search-input']}
          value={search}
          onChange={(newValue) => {
            onSearch(newValue.target.value)
          }}
        />
        <img src={searchIcon} alt='Search icon on search bar' className={styles['search-icon']}/>
        <div>
          {!filteredResults &&(
           <Text variant={'p'}>Please type something to begin searching.</Text>
          )};

          {filteredResults &&(
            <ul>
              {filteredResults.map((item)=>(
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>

          )}

        </div>
    </div>
  )
}
