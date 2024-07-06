import Link from 'next/link'
import React from 'react'
import styles from './NavOffers.module.css'

const NavOffers = () => {
  return (
    <div className={`${styles.navItems}`}>
        <div><Link href={'/contactUs'} className={`${styles.navItemLink}`}>در دیجی کالا بفروشید!</Link></div>
        <div><Link href={'/contactUs'} className={`${styles.navItemLink}`}>سوالی دارید؟</Link></div>
    </div>
  )
}

export default NavOffers