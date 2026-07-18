import React from 'react'
import styles from './Search.module.css'
import { Searchbar } from './Searchbar'

export const Search = () => {
  return (
    <div className={styles['search-container']}>
        <div className={styles['searchbar-container']}>
            <Searchbar />
        </div>

    </div>
  )
}
