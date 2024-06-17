import React, { useState } from 'react'
import styles from './Header.module.css'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'
import Logo from './Logo'
import NavBar from './NavBar/NavBar'
import SignUpButton from './LoginSignUp/SignUpButton'
import ShoppingCartIcon from './shoppingCart/ShoppingCartIcon'
import ProfileButton from './LoginSignUp/ProfileButton'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'


const Header = () => {
const userState=useSelector(state=>state.userReducer)
const userLogedIn=Cookies.get()

  return (
  <div className={`${styles.outerContainer}`}>
    <div className={`${styles.headerContainer}`}>
      <div className={`${styles.topBannerRow}`}><TopBanner/></div>
      <div className={`${styles.searchLogoProfileRow}`}>
        <div className={`${styles.searchLogoContainer}`}>
            <div className={`${styles.logoContainer}`}><Logo/></div>
            <div className={`${styles.searchContainer}`}><SearchBox/></div> 
        </div>
        <div className={`${styles.profileShoppingContainer}`}>
          <div className={`${styles.profileContainer}`}>
            {
              userLogedIn.jwt?<ProfileButton data={userLogedIn}/>:<SignUpButton/>
            }
            </div>
          <div className={`${styles.sepLine}`}></div>
          <div className={`${styles.shoppingBasketContainer}`}><ShoppingCartIcon/></div>
        </div>
      </div>
      <div className={`${styles.navBarRow}`}><NavBar/></div>
    </div>
    <div className={`${styles.responsiveContainer}`}>

    </div>
  </div>
    
    
  )

}

export default Header