import React from 'react'
import styles from './HeaderResponsive.module.css'
import TopBanner from '../Header/TopBanner'
import SearchBox from '../Header/SearchBox'

const HeaderResponsive = () => {
  return (
    <div className={`${styles.outerContainer}`}><SearchBox/></div>
  )
}

export default HeaderResponsive