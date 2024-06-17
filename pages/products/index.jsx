
import MegaMenu from '@/components/Header/NavBar/MegaMenu'
import React from 'react'
import styles from './index.module.css'

const index = () => {
  return (
    <div className={`${styles.outerContainer}`}><MegaMenu/></div>
  )
}

export default index