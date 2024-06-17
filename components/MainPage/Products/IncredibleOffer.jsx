import Carusel from '@/components/carusel/Carusel'
import React, { useContext } from 'react'
import styles from './IncredibleOffer.module.css'
import Image from 'next/image'
import Link from 'next/link'


const IncredibleOffer = ({data}) => {
   
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.imageContainer}`}>
            <div className={`${styles.incOfferImages}`}>
                <Image src="/images/Amazings.svg" width={100} height={100} className={`${styles.amzingText}`} />
                <Image src="/images/Amazing.svg" width={80} height={60} className={`${styles.amazingPic}`} />
                <Image src="/images/amazing-word.svg" width={100} height={30} className={`${styles.amzingWord}`}/>
            </div>
            <Link href={'/products/category/incredibleOffers'} className={`${styles.incOfferLink}`}>مشاهده همه</Link>
        </div>
        <div className={`${styles.carouselContainer}`}>
        <Carusel data={data}/>
        </div>
    </div>
    
)
}

export default IncredibleOffer
