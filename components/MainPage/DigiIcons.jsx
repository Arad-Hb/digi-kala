import Image from 'next/image'
import React from 'react'
import styles from './DigiIcons.module.css'
import Link from 'next/link'
import { IoIosMore } from "react-icons/io";

const DigiIcons = ({data}) => {
  return (
    <div className={`${styles.iconsContainer}`}>
        {
            data.map(item=>{
                return(
                
                  <div className={`${styles.iconsCard}`}>
                    <a href={`/products/category/${item.url}`} className={`${styles.iconsLink}`} onClick={()=>console.log("icon clicked")}>
                      <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                      <label className={`${styles.iconsLabel}`}>{item.label}</label>
                    </a>  
                  </div>
                
                )
                
            })
        }
        <div className={`${styles.dottedIconCard}`}>
           <a href={'/products'} className={`${styles.dottedIconLink}`} onClick={()=>console.log("icon clicked")}>
            <IoIosMore  className={`${styles.dottedIcon}`}/>
            <label className={`${styles.dottedIconLabel}`}>بیشتر</label>
          </a>  
        </div>
    </div>
  )
}

export default DigiIcons