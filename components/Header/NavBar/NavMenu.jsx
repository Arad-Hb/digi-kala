import React from 'react'
import styles from './NavMenu.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"


const NavMenu = () => {
  return (
    <div>
      <Link href={''} className={`${styles.menuLink}`}>
      <GiHamburgerMenu />
        <span className={`${styles.menuTitle}`}>دسته بندی کالاها</span>
      </Link>
    </div>
  )
}

export default NavMenu