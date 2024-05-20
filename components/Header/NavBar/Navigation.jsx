import React from 'react'
import styles from './Navigation.module.css'
import NavMenu from './NavMenu'
import NavItems from './NavItems'
import NavOffers from './NavOffers'

const Navigation = () => {
  return (
    <div className={`${styles.navigationContainer}`}>
        <div className={`${styles.navMenu}`}><NavMenu/></div>
        <div className={`${styles.navItems}`}><NavItems/></div>
        <div className={`${styles.navOffers}`}><NavOffers/></div>
    </div>
  )
}

export default Navigation