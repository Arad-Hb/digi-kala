import Image from 'next/image'
import React from 'react'
import styles from './DigiIcons.module.css'
import { IoIosMore } from "react-icons/io";
import Link from 'next/link';

const DigiIcons = ({data}) => {
  return (
    <div className={`${styles.iconsContainer}`}>
        {
            data.map(item=>{
                return(
                
                  <div className={`${styles.iconsCard}`}>
                    <Link href={`/products/category/${item.url}`} className={`${styles.iconsLink}`}>
                      <Image src={`/images/${item.iconName}`} alt={item.label} height={40} width={40}/>
                      <label className={`${styles.iconsLabel}`}>{item.label}</label>
                    </Link>  
                  </div>
                
                )
                
            })
        }
        <div className={`${styles.dottedIconCard}`}>
           <Link href={'/products'} className={`${styles.dottedIconLink}`}>
            <IoIosMore  className={`${styles.dottedIcon}`}/>
            <label className={`${styles.dottedIconLabel}`}>بیشتر</label>
          </Link>  
        </div>
    </div>
  )
}

export default DigiIcons