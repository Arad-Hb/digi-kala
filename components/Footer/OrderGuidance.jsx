import React from 'react'
import styles from './OrderGuidance.module.css'
import Link from 'next/link'

const OrderGuidance = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <span className={`${styles.title}`}>راهنمای خرید از دیجی‌کالا</span>
        <Link href={'https://about.digikala.com/newsroom/'} className={`${styles.link}`}>نحوه ثبت سفارش</Link>
        <Link href={'https://www.digikala.com/landings/seller-introduction/'} className={`${styles.link}`}>رویه ارسال سفارش</Link>
        <Link href={'https://careers.digikala.com/'} className={`${styles.link}`}>شیوه های پرداخت</Link>
    </div>
  )
}

export default OrderGuidance