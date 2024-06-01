import OrderButton from '@/components/Features/OrderButton'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ShoppingCartPayment.module.css'

const ShoppingCartPayment = () => {
    const state=useSelector(state=>state.shoppingReducer)
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.payments}`}>
            <label className={`${styles.paymentsLabel}`}>
                <span>قیمت کالاها</span>
                <span>{state.totalCount}</span>
            </label>
            <label className={`${styles.paymentsLabel}`}>
                <span>جمع سبد خرید</span>
                <span>{state.totalAmount}</span>
            </label>
            <label className={`${styles.paymentsLabel}`}>
                <span>سود شما از خرید</span>
                <span>{}</span>
            </label>
        </div>
        <div className={`${styles.orderButton}`}>
            <OrderButton/>
        </div>
    </div>
  )
}

export default ShoppingCartPayment