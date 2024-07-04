import React from 'react'
import styles from './FooterTitle.module.css'
import Link from 'next/link'
import { BiSupport } from "react-icons/bi";
import Image from 'next/image';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const FooterTitle = () => {

  const [showContactUs, setShowContactUs] = useState(false);
  const [showAppSource, setShowAppSource] = useState(false);
  

  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.mainContainer}`}>
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
            <Link href={'/'} className={`${styles.goUpButton}`}>بازگشت به صفحه اصلی</Link>
        </div>
      </div>
      <div className={`${styles.responsive}`}>
        <div className={`${styles.responsiveBackToHome}`}>
          <Link href={'/'} className={`${styles.responsiveBackToHomeLink}`}>بازگشت</Link>
        </div>
        <div className={`${styles.responsiveContactUs}`}>
          <div className={`${styles.responsiveContactUsContent}`}>
            <span className={`${styles.responsiveContactUsIcon}`}><BiSupport /></span>
            <span className={`${styles.responsiveContactUsText}`}>تماس با ما</span>
          </div>
         <div className={`${styles.responsiveContactUsButton}`}>
            <Button type='text' className={`${styles.contactUsButton}`} onClick={()=>setShowContactUs(true)}>تماس</Button>
            <Offcanvas placement={'bottom'} name={'bottom'} show={showContactUs} onHide={()=>setShowContactUs(false)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>تماس با ما</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className={`${styles.ContactUs}`}>
                  <span className={`${styles.ContactUsText}`}>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
                  <span className={`${styles.seperator}`}></span>
                  <span className={`${styles.ContactUsText}`}>۰۲۱-۹۱۰۰۰۱۰۰</span>
                  <span className={`${styles.seperator}`}></span>
                  <span className={`${styles.ContactUsText}`}>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div> 
        <div className={`${styles.responsiveSource}`}>
          <div className={`${styles.responsiveSourceContent}`}>
            <Image src={'/images/footerlogo2.png'} className={`${styles.sourceIcon}`} alt='logo' width={30} height={30}/>
            <span className={`${styles.sourceText}`}>اپلیکیشن دیجی‌کالا</span>
          </div>
          <div className={`${styles.responsiveSourceButton}`}>
            <Button type='text' className={`${styles.sourceButton}`} onClick={()=>setShowAppSource(true)}>دانلود</Button>
            <Offcanvas placement={'bottom'} name={'bottom'} show={showAppSource} onHide={()=>setShowAppSource(false)}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>دانلود اپلیکیشن دیجی کالا</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className={`${styles.appSourcesContainer}`}>
                  <Link href={'https://cafebazaar.ir/app/com.digikala?metrix_token=k3of5r&metrix_user_id=f05d4a6c-f6e0-4a4b-8572-34835cee8232&utm_source=cafebazaar&utm_campaign=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/bazzarButton.svg'} alt='bazar' className={`${styles.appSourcesImage}`}/></Link>
                  <Link href={'https://myket.ir/app/com.digikala?utm_source=search-ads-gift&utm_source=myket&utm_medium=cpc&utm_campaign=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/myketButton.svg'} alt='my ket' className={`${styles.appSourcesImage}`}/></Link>
                  <Link href={'https://sibapp.com/applications/digikala?metrix_token=4gluyi&metrix_user_id=f05d4a6c-f6e0-4a4b-8572-34835cee8232&utm_source=ios&utm_campaign=sibapp&utm_content=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/sibAppButton.svg'} alt='sib app' className={`${styles.appSourcesImage}`}/></Link>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default FooterTitle