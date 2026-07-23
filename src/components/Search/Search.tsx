import React from 'react'
import styles from './Search.module.css'
import { Searchbar as RawSearchbar } from './Searchbar'

const Searchbar = RawSearchbar as React.ComponentType<{ onSearch: (text: string) => void }>

interface SearchProps{
  onSearch: (text: string) => void;
}

export const Search: React.FC<SearchProps> = ({onSearch}) => {
  return (
    <div className={styles['search-container']}>
        <div className={styles['searchbar-container']}>
            <Searchbar onSearch={onSearch} />
        </div>

    </div>
  )
}
