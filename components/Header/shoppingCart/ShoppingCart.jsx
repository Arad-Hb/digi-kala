import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartPayment from './ShoppingCartPayment'


const ShoppingCart = () => {
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.shoppingItemsContainer}`}>
        <ShoppingCartItem/>
      </div>
      <div className={`${styles.paymentContainer}`}>
        <ShoppingCartPayment/>
      </div>
    </div>
  )
}

export default ShoppingCart