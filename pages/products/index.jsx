
import React from 'react'
import styles from './index.module.css'
import MegaMenu from '@/components/Header/NavBar/MegaMenu'

const index = () => {
  return (
    <div className={`${styles.outerContainer}`}><MegaMenu/></div>
  )
}

export default index