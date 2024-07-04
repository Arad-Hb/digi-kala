import React from 'react'
import styles from './LegalApproval.module.css'
import Link from 'next/link'
import Image from 'next/image'

const LegalApproval = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <Image src={'/images/rezi.png'} width={75} height={75} alt='rezayatmandi' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <Image src={'/images/kasbokar.png'} width={75} height={75} alt='kasbo kar' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <Image src={'/images/enamad.png'} width={75} height={75} alt='enamad' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
    </div>
  )
}

export default LegalApproval