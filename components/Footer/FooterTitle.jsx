import React from 'react'
import styles from './FooterTitle.module.css'
import Link from 'next/link'

const FooterTitle = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.logoContainer}`}>
            <img src={'/images/digi.svg'} className={`${styles.logoImage}`} alt='logo'/> 
            <div className={`${styles.ContactUs}`}>
                <span className={`${styles.ContactUsText}`}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                <span className={`${styles.seperator}`}></span>
                <span className={`${styles.ContactUsText}`}>۰۲۱-۹۱۰۰۰۱۰۰</span>
                <span className={`${styles.seperator}`}></span>
                <span className={`${styles.ContactUsText}`}>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
            </div>
        </div>
        <div className={`${styles.goUp}`}>
            <Link href={''}className={`${styles.goUpButton}`}>بازگشت به بالا</Link>
        </div>
    </div>
  )
}

export default FooterTitle