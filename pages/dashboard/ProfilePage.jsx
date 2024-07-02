import React from 'react'
import styles from './ProfilePage.module.css'
import Profile from '@/components/Header/LoginSignUp/Profile'

const ProfilePage = () => {
  return (
    <div className={`${styles.outerContainer}`}><Profile/></div>
  )
}

export default ProfilePage