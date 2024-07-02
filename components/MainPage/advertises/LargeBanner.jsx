import React from 'react'
import Data from '../../../files/advertiseData.json'
import styles from './LargeBanner.module.css'
import Image from 'next/image'

const LargeBanner = () => {
    const data=Data[1]
  
    return (
        <div className={`${styles.outerContainer}`}>
            {data.largeBanners.map(item=>{
                return<div className={`${styles.advertiseItem}`}><Image src={item.imageUrl}  className={`${styles.advertiseItemImage}`} alt='advertise' width={330} height={250} /></div>
                
            })}
        </div>
      )
 
}

export default LargeBanner