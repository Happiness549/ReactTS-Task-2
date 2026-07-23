
import logo from '../../assets/logo.png'
import styles from './Nabar.module.css'
import { Text } from '../Text/Text'


export const Navbar = () => {
  return (
    <nav>
        <div className={styles['navbar-container']}>
            <img src={logo} alt="App Logo" className={styles['logo']} />
            <Text variant={'h2'} className={styles['navbar-text']}> Links Vault </Text>


        </div>
    </nav>
  )
}
