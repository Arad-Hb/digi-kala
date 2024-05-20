import Carusel from '@/components/carusel/Carusel'
import React, { useContext } from 'react'
import styles from './IncredibleOffer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Context from '@/ContextAPI/Context'

const IncredibleOffer = (props) => {
    const {incOfferProducts}=useContext(Context)
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.imageContainer}`}>
            <Image src="/images/box.png" width={120} height={120} className={`${styles.incOfferBoxPic}`} />
            <Image src="/images/amazingTypo.png" width={80} height={80} className={`${styles.incOfferTextPic}`} />
            <Link href={'/products/category/incredibleOffers'} className={`${styles.incOfferText}`}>مشاهده همه</Link>
        </div>
        <div className={`${styles.carouselContainer}`}>
        <Carusel cardsCount={5} data={incOfferProducts}/>
        </div>
    </div>
    
)
}

export default IncredibleOffer
