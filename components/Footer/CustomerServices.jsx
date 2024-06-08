import Link from 'next/link'
import React from 'react'
import styles from './CustomerServices.module.css'

const CustomerServices = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <h3 className={`${styles.title}`}>خدمات مشتریان</h3>
        <Link href={'https://about.digikala.com/newsroom/'} className={`${styles.link}`}>پاسخ به پرسش های متداول</Link>
        <Link href={'https://www.digikala.com/landings/seller-introduction/'} className={`${styles.link}`}>رویه های بازگرداندن کالا</Link>
        <Link href={'https://careers.digikala.com/'} className={`${styles.link}`}>شرایط استفاده</Link>
        <Link href={'https://digikalapublic.whistleblowernetwork.net/setup'} className={`${styles.link}`}>حریم خصوصی</Link>
        <Link href={'https://www.digikala.com/page/contact-us/'} className={`${styles.link}`}>گزارش باگ</Link>
    </div>
  
  )
}

export default CustomerServices