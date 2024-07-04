import React from 'react'
import styles from './Partners.module.css'
import Link from 'next/link'
import Data from '../../files/footerData.json'


const Partners = () => {

 const data=Data[0]

  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.partners.map(item=>{
                return(
                    <Link href={`${item.link}`}  className={`${styles.partnerLink}`}>
                        <img src={`/images/${item.name}.svg`}  className={`${styles.partnerImage}`} alt={`${item.name}`}/>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Partners
