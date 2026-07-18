import React from 'react'
import styles from './Footer.module.css'
import { Text } from '../../Text/Text'

export const Footer = () => {
  return (
    <footer>
        <div className={styles['footer-container']}>
           <Text variant={'h4'}>Links Vault 2026 copyrite © all rights reserved</Text>

        </div>
    </footer>
  )
}
