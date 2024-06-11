import OrderButton from '@/components/Features/OrderButton'
import React from 'react'
import styles from './ShoppingCartPayment.module.css'
import { ImInfo } from "react-icons/im"

const ShoppingCartPayment = ({data}) => {
    const totalPrices=data.totalPrices
    const totalAmount=data.totalAmount
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.payments}`}>
            <label className={`${styles.paymentsLabel}`}>
                <span>قیمت کل کالاها</span>
                <span>{totalPrices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  تومان</span>
            </label>
            <label className={`${styles.paymentsLabel}`}>
                <span>مبلغ قابل پرداخت</span>
                <span>{totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  تومان</span>
            </label>
        </div>
        <div className={`${styles.orderButton}`}>
            <OrderButton/>
        </div>
        <div className={`${styles.digiClub}`}>
            <div className={`${styles.digiClubTitle}`}>
                <span className={`${styles.clubIcon}`}>
                    <img src={'/images/club-point.svg'}  className={`${styles.clubImage}`} alt='digi club'/>
                </span>
                <span className={`${styles.titleText}`}>دیجی‌کلاب</span>
                <span className={`${styles.infoIcon}`}><ImInfo /></span>
            </div>
            <div className={`${styles.digiClubPoint}`}>150 امتیاز</div>
        </div>
    </div>
  )
}

export default ShoppingCartPayment