import React, { useContext, useEffect, useState } from 'react'
import SERVER from '../../config/myConfig.json'
import axios from 'axios'
import Image from 'next/image'
import styles from './TopBanner.module.css'
import { GET } from '@/repository/AxiosRepository'
import Context from '@/ContextAPI/Context'


const TopBanner = (props) => {
  const data=props.data
   
  return (
    <div className={`${styles.topBannerContainer}`} >
        <Image className={`${styles.topBannerImage}`} src={"https://dkstatics-public.digikala.com/digikala-adservice-banners/0549aba3199baca6511d402fac24cbcc9e448bae_1668975461.jpg?x-oss-process=image/quality,q_95"} alt='top banner' fill />
    </div>
  )
}

export default TopBanner