import React from 'react'
import styles from './ProductDetails.module.css'
import ProductPrice from './ProductPrice'
import ProductDescription from './ProductDescription'
import { RiStore3Fill } from "react-icons/ri"
import { TbListDetails } from "react-icons/tb"

const ProductDetails = ({data}) => {
  

  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.stockContainer}`}>
          <span className={`${styles.stockIcon}`}><RiStore3Fill /></span>
          <span className={`${styles.stockNumber}`}>{data.stock} عدد در انبار باقی مانده</span>
        </div>
        <div className={`${styles.priceContainer}`}><ProductPrice data={data}/></div>
        <div className={`${styles.descriptionContainer}`}>
          <div className={`${styles.descriptionTitle}`}>
            <span className={`${styles.descriptionIcon}`}><TbListDetails /></span>
            <span className={`${styles.descriptionText}`}>ویژگی های محصول:</span>
          </div>
          <span className={`${styles.descriptionComponent}`}><ProductDescription data={data}/></span>
        </div>
    </div>
  )
}

export default ProductDetails