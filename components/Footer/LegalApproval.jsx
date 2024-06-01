import React from 'react'
import styles from './LegalApproval.module.css'
import Link from 'next/link'

const LegalApproval = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <img src={'/images/rezi.png'} alt='rezayatmandi' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <img src={'/images/kasbokar.png'} alt='kasbo kar' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
        <div className={`${styles.legalLogo}`}>
            <Link href={''} className={`${styles.legalLink}`}>
                <img src={'/images/enamad.png'} alt='enamad' className={`${styles.LegalImage}`}/>
            </Link>
        </div>
    </div>
  )
}

export default LegalApproval