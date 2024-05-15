import React, { useState } from 'react'
import styles from './Header.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Login from './Login'
import HeaderNavBar from './HeaderNavBar'
import TopBanner from './TopBanner'
import SearchBox from './SearchBox'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar/NavBar'
import { FaRegUser } from "react-icons/fa6"
import { RiShoppingCartLine } from "react-icons/ri"



const Header = () => {
   
  const setProfile=()=>{
    alert("profile button clicked")
  }
  const setShoppingBasket=()=>{
    alert("shopping button clicked")
  }
  return (
    <Container>
      <Row>
        <TopBanner/>
      </Row>
      <Row>
        <Col>
        <div className={`${styles.searchLogo}`}>
          <div><Logo/></div>
          <div><SearchBox/></div> 
        </div>
        </Col>
        <Col>
          <div className={`${styles.profileShoppingContent}`}>
            <div>
              <Link href={'/profile/login'} onClick={setProfile} className={`${styles.profile}`}>
               <FaRegUser />
              </Link>
            </div>
            <div className={`${styles.sepLine}`}></div>
            <div className={`${styles.shoppingBasket}`}>
              <Link href={'/shoppingCart'} onClick={setShoppingBasket} className={`${styles.shoppingBasketButton}`}>
              <RiShoppingCartLine />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <NavBar/>
      </Row>

    </Container>
    
  )

}

export default Header