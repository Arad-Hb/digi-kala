import Link from 'next/link'
import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <h3 className={`${styles.title}`}>با دیجی کالا</h3>
        <Link href={'https://about.digikala.com/newsroom/'} className={`${styles.link}`}>اتاق خبر دیجی کالا</Link>
        <Link href={'https://www.digikala.com/landings/seller-introduction/'} className={`${styles.link}`}>فروش در دیجی کالا</Link>
        <Link href={'https://careers.digikala.com/'} className={`${styles.link}`}>فرصت های شغلی</Link>
        <Link href={'https://digikalapublic.whistleblowernetwork.net/setup'} className={`${styles.link}`}>گزارش تخلف در دیجی کالا</Link>
        <Link href={'https://www.digikala.com/page/contact-us/'} className={`${styles.link}`}>تماس با دیجی کالا</Link>
        <Link href={'https://about.digikala.com/'} className={`${styles.link}`}>درباره دیجی کالا</Link>
    </div>
  )
}

export default AboutUs