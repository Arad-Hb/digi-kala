import React, { useState } from 'react'
import styles from './NavMenu.module.css'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi"
import MenuSideBar from './MenuSideBar'
import MenuContent from './MenuContent'


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
        <div style={menuContentContainerStyles}  className={`${styles.menuContentContainer}`} onMouseLeave={()=>{setDisplay("none")}}>
          <div className={`${styles.menuSideBar}`}><MenuSideBar /></div>
          <div className={`${styles.menuContent}`} onClick={()=>{setDisplay("none")}}><MenuContent /></div>
        </div>
    </div>
    
  )
}

export default NavMenu