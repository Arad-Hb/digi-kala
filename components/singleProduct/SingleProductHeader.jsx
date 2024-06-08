import React from 'react'
import styles from './SingleProductHeader.module.css'
import Image from 'next/image'

const SingleProductHeader = ({data}) => {
  return (
    <div>
      {
        data.incredibleOffers?<Image className={`${styles.incredibleOfferImage}`} alt={data.name} src='/images/IncredibleOffer.svg' width={200} height={15} /> : null
      }
    </div>
  )
}

export default SingleProductHeader