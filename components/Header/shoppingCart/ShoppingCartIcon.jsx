import React from 'react'
import styles from './ShoppingCartIcon.module.css'
import { RiShoppingCartLine } from 'react-icons/ri'
import Link from 'next/link'
import ShoppingCartBadge from './ShoppingCartBadge'

const ShoppingCartIcon = () => {
   
  return (
    <div className={`${styles.shoppingCartIconContainer}`}>
        <Link href={'/shoppingCart'} className={`${styles.shoppingCartLink}`}>
            <RiShoppingCartLine  className={`${styles.shoppingCartIcon}`}/>
        </Link>
        <div className={`${styles.shoppingCartBadge}`}>
            <ShoppingCartBadge/>
        </div>
    </div>
  )
}


export default ShoppingCartIcon