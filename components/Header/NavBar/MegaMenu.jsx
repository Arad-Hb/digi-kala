import React from 'react'
import styles from './MegaMenu.module.css'
import MenuSideBar from './MenuSideBar'
import MenuContent from './MenuContent'

const MegaMenu = () => {
    
  return (
    <>
        <div className={`${styles.menuSideBar}`}><MenuSideBar /></div>
        <div className={`${styles.menuContent}`}><MenuContent /></div>
    </>
  )
}

export default MegaMenu