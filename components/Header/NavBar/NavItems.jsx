import Link from 'next/link'
import React from 'react'
import styles from './NavItems.module.css'
import {RiCoupon3Line, RiDiscountPercentLine, RiFireLine, RiShoppingBasketLine } from "react-icons/ri"
import { MdCardGiftcard } from "react-icons/md"


const NavItems = () => {
  return (
    <div>
      <ul className={`${styles.navItems}`}>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
            <RiDiscountPercentLine  className={`${styles.navItemIcon}`}/>
            <span className={`${styles.navItemText}`}>شگفت انگیزها</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiShoppingBasketLine  className={`${styles.navItemIcon}`}/>
            <span className={`${styles.navItemText}`}>سوپر مارکت</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <MdCardGiftcard  className={`${styles.navItemIcon}`}/>
            <span className={`${styles.navItemText}`}>کارت هدیه</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiFireLine  className={`${styles.navItemIcon}`}/>
            <span className={`${styles.navItemText}`}>پرفروش ترین ها</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiCoupon3Line  className={`${styles.navItemIcon}`}/>
            <span className={`${styles.navItemText}`}>تخفیف ها و پیشنهادها</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavItems