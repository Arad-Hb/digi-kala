import React, { useState } from 'react'
import styles from './LoginAndSignUp.module.css'
import SignUp from './SignUp'
import Login from './Login'
import Image from 'next/image'

const LoginAndSignUp = () => {
    const [selectSignUp,setSelectSignUp]=useState(false)
    const [loginActive,setLoginActive]=useState(true)
    const [signupActive,setSignupActive]=useState(false)
   const loginHandler=()=>{
    setSelectSignUp(false)
    setLoginActive(true)
    setSignupActive(false)
   }
   const signupHandler=()=>{
    setSelectSignUp(true)
    setSignupActive(true)
    setLoginActive(false)
   }

  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.contentContainer}`}>
            <div className={`${styles.contentHeader}`}>
                <Image src={'/images/logo.svg'} className={`${styles.logoImage}`} alt='digi kala' width={300} height={200}/>
            </div>
            <div className={`${styles.contentForm}`}>{selectSignUp?<SignUp/>:<Login/>}</div>
        </div>
        <div className={`${styles.buttonContainer}`}>
            <div className={`${styles.buttonHeader}`}>دیجی کالا</div>
            <div className={`${styles.buttonContent}`}>
                <span  className={loginActive ?`${styles.activeButton}` : `${styles.inactiveButton}`} onClick={loginHandler}>ورود</span>
                <span  className={signupActive ?`${styles.activeButton}` : `${styles.inactiveButton}`} onClick={signupHandler}>ثبت نام</span>
            </div>
        </div>
    </div>
  )
}

export default LoginAndSignUp