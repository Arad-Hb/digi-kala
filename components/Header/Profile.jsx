import React from 'react'
import styles from './Profile.module.css'
import Link from 'next/link'
import { CgEnter } from 'react-icons/cg'

const Profile = () => {

  return (
    <div className={`${styles.profileContainer}`}>
        <Link href={'/users/LoginPage'}  className={`${styles.profileLink}`}>
            <span className={`${styles.profileIcon}`}><CgEnter /></span>
            <span className={`${styles.profileText}`}>ورود</span>
            <span className={`${styles.profileSepLine}`}></span>
            <span className={`${styles.profileText}`}>ثبت نام</span>
        </Link>
    </div>
  )
}

export default Profile