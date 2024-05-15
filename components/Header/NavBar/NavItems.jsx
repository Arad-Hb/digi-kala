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
          <RiDiscountPercentLine />
            <span>شگفت انگیزها</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiShoppingBasketLine />
            <span>سوپر مارکت</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <MdCardGiftcard />
            <span>کارت هدیه</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiFireLine />
            <span>پرفروش ترین ها</span>
          </Link>
        </li>
        <li>
          <Link href={'/contactUs'} className={`${styles.navItem}`}>
          <RiCoupon3Line />
            <span>تخفیف ها و پیشنهادها</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavItems