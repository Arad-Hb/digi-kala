import React from 'react'
import styles from './LoginPage.module.css'
import Login from '../../components/Header/LoginSignUp/Login'
import SignUp from '@/components/Header/LoginSignUp/SignUp'

const LoginPage = () => {

  return (
    <div className={`${styles.loginContainer}`}><SignUp/></div>
  )
}

export default LoginPage