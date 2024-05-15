import Image from 'next/image'
import React from 'react'
import styles from './DigiIcons.module.css'
import Link from 'next/link'

const DigiIcons = ({data}) => {
  return (
    <div className={`${styles.iconsContainer}`}>
        {
            data.map(item=>{
                return(
                <a href={`/products/category/${item.url}`} onClick={()=>console.log("icon clicked")}>
                  <div className={`${styles.iconsCard}`}>
                      <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                      <label className={`${styles.iconsLabel}`}>{item.label}</label>
                  </div>
                </a>
                )
                
            })
        }
    </div>
  )
}

export default DigiIcons