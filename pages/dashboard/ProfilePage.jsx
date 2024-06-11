import React from 'react'
import styles from './ProfilePage.module.css'
import { useSelector } from 'react-redux'
import Profile from '@/components/Header/LoginSignUp/Profile'

const ProfilePage = () => {
  return (
    <div><Profile/></div>
  )
}

export default ProfilePage