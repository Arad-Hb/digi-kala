import React from 'react'
import styles from './FooterResponsive.module.css'
import Link from 'next/link'
import { BiSolidHomeSmile } from "react-icons/bi"
import { TbCategory2 } from "react-icons/tb"
import { RiShoppingCartLine } from "react-icons/ri"
import { FaRegUser } from "react-icons/fa6"

const FooterResponsive = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.items}`}>
            <Link href={'/'} className={`${styles.itemsLink}`}>
                <span className={`${styles.itemsIcon}`}><BiSolidHomeSmile /></span>
                <span className={`${styles.itemsTitle}`}>خانه</span>
            </Link>
        </div>
        <div className={`${styles.items}`}>
            <Link href={'/products'} className={`${styles.itemsLink}`}>
                <span className={`${styles.itemsIcon}`}><TbCategory2 /></span>
                <span className={`${styles.itemsTitle}`}>دسته بندی</span>
            </Link>
        </div>
        <div className={`${styles.items}`}>
            <Link href={'/shoppingCart'} className={`${styles.itemsLink}`}>
                <span className={`${styles.itemsIcon}`}><RiShoppingCartLine /></span>
                <span className={`${styles.itemsTitle}`}>سبد خرید</span>
            </Link>
        </div>
        <div className={`${styles.items}`}>
            <Link href={'/users/LoginPage'} className={`${styles.itemsLink}`}>
                <span className={`${styles.itemsIcon}`}><FaRegUser /></span>
                <span className={`${styles.itemsTitle}`}>دیجی کالای من</span>
            </Link>
        </div>
    </div>
  )
}

export default FooterResponsive