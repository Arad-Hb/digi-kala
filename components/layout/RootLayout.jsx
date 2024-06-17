import React from 'react'
import styles from './RootLayout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FooterResponsive from '../responsives/FooterResponsive'
import HeaderResponsive from '../responsives/HeaderResponsive'

const RootLayout = ({children}) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.headerContainer}`}>
          <div className={`${styles.header}`}><Header/></div>
          <div className={`${styles.headerResponsive}`}><HeaderResponsive/></div>
        </div>
        <div className={`${styles.mainContainer}`}>{children}</div>
        <div className={`${styles.footerContainer}`}>
          <div className={`${styles.footer}`}><Footer/></div>
          <div className={`${styles.footerResponsive}`}><FooterResponsive/></div>
        </div>
    </div>
  )
}

export default RootLayout