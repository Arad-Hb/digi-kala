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
                <Link href={`/products/category/${item.url}`}>
                  <div className={`${styles.iconsCard}`}>
                      <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                      <label className={`${styles.iconsLabel}`}>{item.label}</label>
                  </div>
                </Link>
                )
                
            })
        }
    </div>
  )
}

export default DigiIcons