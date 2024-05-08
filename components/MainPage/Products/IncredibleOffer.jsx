import Carusel from '@/components/carusel/Carusel'
import React from 'react'
import styles from './IncredibleOffer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const IncredibleOffer = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.imageContainer}`}>
            <Image src="/images/box.png" width={80} height={80} />
            <Image src="/images/amazingTypo.png" width={80} height={80} />
            <Link href={'/products/category/incredibleOffers'}>مشاهده همه</Link>
        </div>
        <div className={`${styles.carouselContainer}`}>
            <Carusel cardsCount={5} data={props.data} />
        </div>
    </div>
)
}

export default IncredibleOffer
