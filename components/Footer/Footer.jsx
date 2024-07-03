import React from 'react'
import styles from './Footer.module.css'
import Partners from './Partners'
import Introduction from './Introduction'
import LegalApproval from './LegalApproval'
import ApplicationSources from './ApplicationSources'
import AboutUs from './AboutUs'
import CustomerServices from './CustomerServices'
import OrderGuidance from './OrderGuidance'
import SocialMedia from './SocialMedia'
import EmailBox from './EmailBox'
import Delivery from './Delivery'
import FooterTitle from './FooterTitle'


const Footer = () => {
  
  return (
  <div className={`${styles.outerContainer}`}>
    <div className={`${styles.mainFooterContainer}`}>
      <div className={`${styles.footerTitle}`}><FooterTitle/></div>
      <div className={`${styles.deliveryContainer}`}><Delivery/></div>
      <div className={`${styles.aboutUsContainer}`}>
        <div className={`${styles.withDigikalaContainer}`}>
          <div className={`${styles.aboutUs}`}><AboutUs/></div>
          <div className={`${styles.customerServices}`}><CustomerServices/></div>
          <div className={`${styles.orderGuidance}`}><OrderGuidance/></div>
          <div className={`${styles.medaiContainer}`}>
            <div className={`${styles.socialMedia}`}><SocialMedia/></div>
            <div className={`${styles.email}`}><EmailBox/></div>
          </div>
        </div>
      </div>
      <div className={`${styles.appSourcesContainer}`}><ApplicationSources/></div>
      <div className={`${styles.introductionLegalContainer}`}>
        <div className={`${styles.introduction}`}><Introduction/></div>
        <div className={`${styles.legal}`}><LegalApproval/></div>
      </div>
      <div className={`${styles.copyWrite}`}>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</div>
      <div className={`${styles.partnerContainer}`}><Partners/></div> 
   </div>
 </div>
    
  )
}

export default Footer