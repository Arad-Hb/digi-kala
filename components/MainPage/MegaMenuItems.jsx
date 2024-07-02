import React from 'react'
import styles from './MegaMenuItems.module.css'
import Data from '../../files/menuData.json'
import Image from 'next/image'
import Link from 'next/link'

const MegaMenuItems = () => {
    const data=Data[0]
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>خرید بر اساس دسته بندی</div>
        <div className={`${styles.itemsContainer}`}>
        {
            data.sideNav.map(item=>{
                return<Link className={`${styles.itemLink}`} href={'#'}>
                        <Image className={`${styles.itemImage}`} src={item.imageUrl} width={100} height={100} alt={item.name}/>
                        <span className={`${styles.itemText}`}>{item.name}</span>
                    </Link>
                
            })
        }
        </div>
    </div>
  )
}

export default MegaMenuItems