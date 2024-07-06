import React, { useState } from 'react'
import styles from './NavMenu.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import MegaMenu from './MegaMenu'


const NavMenu = () => {
  const [display,setDisplay]=useState("none")
  const menuContentContainerStyles={
display:`${display}`
}

  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.menuButtonContainer}`}>
          <Link href={''} className={`${styles.menuLink}`} onMouseOver={()=>{setDisplay("flex")}}>
            <GiHamburgerMenu className={`${styles.menuIcon}`} />
            <span className={`${styles.menuTitle}`}>دسته بندی کالاها</span>
          </Link>
        </div>
        <div style={menuContentContainerStyles}  className={`${styles.menuContentContainer}`} onMouseLeave={()=>{setDisplay("none")}} onClick={()=>{setDisplay("none")}}><MegaMenu/></div>
    </div>
    
  )
}

export default NavMenu