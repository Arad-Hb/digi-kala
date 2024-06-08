import React from 'react'
import styles from './ShoppingCart.module.css'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartPayment from './ShoppingCartPayment'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'


const ShoppingCart = () => {
  const state=useSelector(state=>state.shoppingReducer)
  return (
  <div className={`${styles.outerContainer}`}>
    {state.totalCount===0?<EmptyCart/>:
    
    <div className={`${styles.innerContainer}`}>
        <div className={`${styles.shoppingItemsContainer}`}>
          <ShoppingCartItem data={state}/>
        </div>
        <div className={`${styles.paymentContainer}`}>
          <ShoppingCartPayment data={state}/>
        </div>
    </div>
    }
  </div>
    
  )
}

export default ShoppingCart