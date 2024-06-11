import Login from '@/components/Header/LoginSignUp/Login'
import React from 'react'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div className={`${styles.outerContainer}`}><Login/></div>
  )
}

export default LandingPage