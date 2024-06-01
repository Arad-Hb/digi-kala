import React from 'react'
import styles from './Footer.module.css'
import Partners from './Partners'
import Introduction from './Introduction'
import LegalApproval from './LegalApproval'

const Footer = () => {
  
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.introductionLegalContainer}`}>
        <div className={`${styles.introduction}`}><Introduction/></div>
        <div className={`${styles.legal}`}><LegalApproval/></div>
      </div>
      <div className={`${styles.copyWrite}`}>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</div>
      <div className={`${styles.partnerContainer}`}><Partners/></div>
      
    </div>
  )
}

export default Footer