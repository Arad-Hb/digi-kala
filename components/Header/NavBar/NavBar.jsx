import React from 'react'
import styles from './NavBar.module.css'
import Location from '../Location'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <div className={`${styles.navBarContainer}`}>
        <div className={`${styles.navigation}`}><Navigation/></div>
        <div className={`${styles.location}`}><Location/></div>
    </div>
  )
}

export default NavBar