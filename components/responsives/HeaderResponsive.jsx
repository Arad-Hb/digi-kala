import React from 'react'
import styles from './HeaderResponsive.module.css'
import SearchBox from '../Header/SearchBox'

const HeaderResponsive = () => {
  return (
    <div className={`${styles.outerContainer}`}><SearchBox/></div>
  )
}

export default HeaderResponsive