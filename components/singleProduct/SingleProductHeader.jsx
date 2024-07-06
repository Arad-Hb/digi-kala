import React from 'react'
import styles from './SingleProductHeader.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SingleProductHeader = ({data}) => {
  const router=useRouter()
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.router}`}>{router.pathname}</div>
      <div className={`${styles.incOffer}`}>
      {
        data.incredibleOffers?<Image className={`${styles.incredibleOfferImage}`} alt={data.name} src='/images/IncredibleOffer.svg' width={200} height={50} /> : null
      }
      </div> 
    </div>
  )
}

export default SingleProductHeader