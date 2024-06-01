import React from 'react'
import styles from './Partners.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Partners = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <Link href={'https://www.digikala.com/mag/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digimag.svg'}  className={`${styles.partnerImage}`} alt='digi mag'/>
        </Link>
        <Link href={'https://www.mydigipay.com/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digipay.svg'}  className={`${styles.partnerImage}`} alt='digi pay'/>
        </Link>
        <Link href={'https://www.digistyle.com/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digistyle.svg'}  className={`${styles.partnerImage}`} alt='digi style'/>
        </Link>
        <Link href={'https://www.digikala.com/plus/landing/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digiplus.svg'}  className={`${styles.partnerImage}`} alt='digi plus'/>
        </Link>
        <Link href={'https://www.digikala.com/users/login/?backUrl=/digiclub/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digiclub.svg'}  className={`${styles.partnerImage}`} alt='digi club'/>
        </Link>
        <Link href={'https://digikalajet.com/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digijet.svg'}  className={`${styles.partnerImage}`} alt='digi jet'/>
        </Link>
        <Link href={'https://www.digikala.com/landings/magnet/?utm_source=Digikala_web&utm_medium=Footer'}  className={`${styles.partnerLink}`}>
            <img src={'/images/magnet.svg'}  className={`${styles.partnerImage}`} alt='magnet'/>
        </Link>
        <Link href={'https://www.digikala.com/mehr/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digiMehr.svg'}  className={`${styles.partnerImage}`} alt='digi mehr'/>
        </Link>
        <Link href={'https://diginext.ir/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/diginext.svg'}  className={`${styles.partnerImage}`} alt='digi next'/>
        </Link>
        <Link href={'https://digiexpress.ir/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digiexpress.svg'}  className={`${styles.partnerImage}`} alt='digi express'/>
        </Link>
        <Link href={'https://ganje.net/?utm_source=Digikala_web&utm_medium=Footer'}  className={`${styles.partnerLink}`}>
            <img src={'/images/ganjeh.svg'}  className={`${styles.partnerImage}`} alt='ganje'/>
        </Link>
        <Link href={'https://digify.shop/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digify.svg'}  className={`${styles.partnerImage}`} alt='digify'/>
        </Link>
        <Link href={'https://smartech.ir/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/smartech.svg'}  className={`${styles.partnerImage}`} alt='smartech'/>
        </Link>
        <Link href={'https://www.digikalabusiness.com/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digikala-business.svg'}  className={`${styles.partnerImage}`} alt='digikala business'/>
        </Link>
        <Link href={'https://www.digikala-service.com/'}  className={`${styles.partnerLink}`}>
            <img src={'/images/digikala-service.svg'}  className={`${styles.partnerImage}`} alt='digikala service'/>
        </Link>
    </div>
  )
}

export default Partners