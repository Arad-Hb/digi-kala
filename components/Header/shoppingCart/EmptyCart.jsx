import React from 'react'
import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={`${styles.container}`}>
        <div><img src='/images/emptyCart.svg' alt='empty cart' className={`${styles.image}`}/></div>
        <div className={`${styles.text}`}>سبد خرید شما خالی است!</div>
    </div>
  )
}

export default EmptyCart