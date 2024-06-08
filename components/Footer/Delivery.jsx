import React from 'react'
import styles from './Delivery.module.css'
import Link from 'next/link'
import Data from '../../files/footerData.json'

const Delivery = () => {
    const data=Data[1]
  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.delivery.map(item=>{
                return(
                    <Link href={''} className={`${styles.deliveryItem}`}>
                        <img src={`/images/${item.name}.svg`} className={`${styles.deliveryIcon}`} alt='express delivery'/>
                        <span className={`${styles.deliveryTitle}`}>{item.text}</span>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Delivery