import React, { useState } from 'react'
import styles from './ProductDescription.module.css'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io"

const ProductDescription = ({data}) => {
    const [showTotalText,setShowTotalText]=useState(false)
  return (
    <div className={`${styles.outerContainer}`}>
        {!showTotalText?(
          <div className={`${styles.descriptionContainer}`}>
            <span className={`${styles.littleArticle}`}>{data.description.substring(0, 225)}{data.description.length > 225 ? "..." : null}</span>
            <span onClick={()=>{setShowTotalText(true)}} className={`${styles.articleButton}`}>مشاهده ی بیشتر <IoIosArrowBack /></span>
          </div>):(
            <div className={`${styles.descriptionContainer}`}>
              <span className={`${styles.totalArticle}`}>{data.description}</span>
              <span onClick={()=>{setShowTotalText(false)}} className={`${styles.articleButton}`}><IoIosArrowForward />بستن </span>
            </div>
          )
        }
    </div>
  )
}

export default ProductDescription