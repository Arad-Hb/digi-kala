import React from 'react'
import styles from './ShoppingCartBadge.module.css'
import ShoppingItems from './ShoppingItems'


const ShoppingCartBadge = () => {

    
  return (
    <div className={`${styles.badgeContainer}`}><ShoppingItems/></div>
  )
}

export default ShoppingCartBadge