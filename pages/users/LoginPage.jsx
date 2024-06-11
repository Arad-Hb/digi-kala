import React from 'react'
import styles from './LoginPage.module.css'
import LoginAndSignUp from '@/components/Header/LoginSignUp/LoginAndSignUp'


const LoginPage = () => {

  return (
    <div className={`${styles.loginContainer}`}><LoginAndSignUp/></div>
  )
}

export default LoginPage