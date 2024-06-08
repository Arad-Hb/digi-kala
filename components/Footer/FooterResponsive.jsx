import React from 'react'
import styles from './FooterResponsive.module.css'

const FooterResponsive = () => {
  return (
    <div>
        <div className={`${styles.appSourcesResponsive}`}>
        <div className={`${styles.responsiveContainer}`}>
            <div className={`${styles.responsiveHeader}`}>
                <div className={`${styles.responsiveLogo}`}>
                    <img src={'images/footerlogo2.png'} alt='logo' className={`${styles.responsiveLogoImage}`}/>
                </div>
                <div className={`${styles.responsiveTitle}`}>
                    <span className={`${styles.titleThinText}`}>تجربه خرید بهتر در</span>
                    <span className={`${styles.titleBoldText}`}>اپلیکیشن دیجی کالا</span>
                </div>
            </div>
            <div className={`${styles.responsiveLink}`}>
                <a href='' className={`${styles.linkButton}`}>دانلود</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FooterResponsive