import React from 'react'
import styles from './Search.module.css'
import { Searchbar } from './Searchbar'


export const Search: React.FC = () => {
  const [value, setValue] = React.useState('')

  return (
    <div className={styles['search-container']}>
      <div className={styles['searchbar-container']}>
        <Searchbar value={value} onChange={setValue} />
      </div>
    </div>
  )
}
