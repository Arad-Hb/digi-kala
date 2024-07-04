import React from 'react'
import { BiDotsHorizontal } from "react-icons/bi"
import styles from './ApplicationSources.module.css'
import Link from 'next/link'

const ApplicationSources = () => {
  return (
    
        <div className={`${styles.outerContainer}`}>
            <div className={`${styles.appSourcesHeader}`}>
                <img src={'/images/footerlogo2.png'} alt='app sources logo' className={`${styles.appSourcesLogo}`}/>
                <span className={`${styles.appSourcesTitle}`}>دانلود اپلیکیشن دیجی کالا</span>
            </div>
            <div className={`${styles.appSourcesContainer}`}>
                <Link href={'https://cafebazaar.ir/app/com.digikala?metrix_token=k3of5r&metrix_user_id=f05d4a6c-f6e0-4a4b-8572-34835cee8232&utm_source=cafebazaar&utm_campaign=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/bazzarButton.svg'} alt='bazar' className={`${styles.appSourcesImage}`}/></Link>
                <Link href={'https://myket.ir/app/com.digikala?utm_source=search-ads-gift&utm_source=myket&utm_medium=cpc&utm_campaign=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/myketButton.svg'} alt='my ket' className={`${styles.appSourcesImage}`}/></Link>
                <Link href={'https://sibapp.com/applications/digikala?metrix_token=4gluyi&metrix_user_id=f05d4a6c-f6e0-4a4b-8572-34835cee8232&utm_source=ios&utm_campaign=sibapp&utm_content=home_page'} className={`${styles.appSourcesButton}`}><img src={'/images/sibAppButton.svg'} alt='sib app' className={`${styles.appSourcesImage}`}/></Link>
                <Link href={'https://www.digikala.com/landings/new-app/'} className={`${styles.otherAppSourcesButton}`}><BiDotsHorizontal  className={`${styles.otherAppSources}`}/></Link>
            </div>
        </div>
  )
}

export default ApplicationSources