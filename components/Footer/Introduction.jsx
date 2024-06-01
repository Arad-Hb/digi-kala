import React, { useState } from 'react'
import IntroductionTotalArticle from './IntroductionTotalArticle'
import IntroductionLittleArticle from './IntroductionLittleArticle'
import { IoIosArrowBack } from "react-icons/io";
import styles from './Introduction.module.css'

const Introduction = () => {

const [showTotalText,setShowTotalText]=useState(false)

return (
    <div className={`${styles.outerContainer}`}>
    {
      showTotalText?<div className={`${styles.articleContainer}`}><IntroductionTotalArticle/><span onClick={()=>{setShowTotalText(false)}} className={`${styles.articleButton}`}>بستن<IoIosArrowBack /></span></div>:
      <div className={`${styles.articleContainer}`}><IntroductionLittleArticle/><span onClick={()=>{setShowTotalText(true)}} className={`${styles.articleButton}`}>مشاهده ی بیشتر<IoIosArrowBack /></span></div>
    }
    </div>
  )
}

export default Introduction