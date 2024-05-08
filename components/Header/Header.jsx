import React, { useState } from 'react'
import styles from './Header.module.css'
import { Button, Container } from 'react-bootstrap'
import Login from './Login'
import HeaderNavBar from './HeaderNavBar'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'



const Header = () => {
   
  return (
    <>
      <div>
        <TopBanner/>
      </div>
    <div>
     <HeaderNavBar/>
     <SearchBox/>
    </div>
    <div className={`${styles.accordionContainer}`}>
        من هدر هستم
    </div>

    </>
    
  )

}

export default Header