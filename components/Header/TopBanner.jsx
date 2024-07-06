import React from 'react'
import Image from 'next/image'
import styles from './TopBanner.module.css'
import { useSelector } from 'react-redux'



const TopBanner = () => {

  const state= useSelector(state=>state.staticImagesReducer)
 

  return (
    <div className={`${styles.topBannerContainer}`} >
        <Image className={`${styles.topBannerImage}`} src={state.topBanner.imageUrl} alt='top banner' fill />
    </div>
  )
}

export default TopBanner