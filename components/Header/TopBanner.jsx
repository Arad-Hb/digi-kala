import React, { useEffect, useState } from 'react'
import SERVER from '../../config/myConfig.json'
import axios from 'axios'
import Image from 'next/image'
import styles from './TopBanner.module.css'
import { GET } from '@/repository/AxiosRepository'


const TopBanner = () => {
    const[TopBanner,setTopBanner]=useState({})
    useEffect(()=>{
        GET('topBanner')
        .then(response=>setTopBanner(response.data))
        .catch(error=>console.log(error))
            },[])
  return (
    <div className={`${styles.topBannerContainer}`} >
        <Image className={`${styles.topBannerImage}`} src={TopBanner.imageUrl} alt='top banner' fill/>
    </div>
  )
}

export default TopBanner