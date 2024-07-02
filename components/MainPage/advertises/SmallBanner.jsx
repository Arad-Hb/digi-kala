import styles from './SmallBanner.module.css'
import React from 'react'
import Data from '../../../files/advertiseData.json'
import Image from 'next/image'

const SmallBanner = () => {
    const data=Data[0]
  return (
    <div className={`${styles.outerContainer}`}>
        {data.smallBanners.map(item=>{
            return<div className={`${styles.advertiseItem}`}><Image src={item.imageUrl}  className={`${styles.advertiseItemImage}`} alt='advertise' width={330} height={250} /></div>
            
        })}
    </div>
  )
}

export default SmallBanner