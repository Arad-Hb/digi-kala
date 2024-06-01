import React from 'react'
import styles from './OrderButton.module.css'

const OrderButton = () => {
    const OrderHandler=()=>{
        console.log('orderClicked')
    }
  return (
    <div className={`${styles.OrderContainer}`}>
        <button onClick={OrderHandler} className={`${styles.OrderButton}`}>تایید و تکمیل سفارش</button>
    </div>
  )
}

export default OrderButton