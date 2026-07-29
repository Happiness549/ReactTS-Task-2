import React from 'react'
import styles from './Search.module.css'
import { Searchbar } from './Searchbar'
import type {LinkItem} from '../../types/Link'

interface SearchProps{
      search: string;
      onSearch : (newValue :string) => void;
      filteredResults : LinkItem[] 
}     


export const Search: React.FC<SearchProps> = ({search,onSearch,filteredResults} :SearchProps) => {


  return (
    <div className={styles['search-container']}>
      <div className={styles['searchbar-container']}>
        <Searchbar search={search} onSearch={onSearch} filteredResults={filteredResults}/>
      </div>
    </div>
  )
}
