import React from 'react'
import styles from './SingleProductCard.module.css'
import OrderCard from './OrderCard'
import ProductImage from './ProductImage'
import ProductDetails from './ProductDetails'

const SingleProductCard = ({data}) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.catalogueContainer}`}>
            <div className={`${styles.imageContainer}`}><ProductImage data={data}/></div>
            <div className={`${styles.detailsContainer}`}>
              <div className={`${styles.productName}`}>{data.name}</div>
              <div className={`${styles.productDetails}`}>
                <div className={`${styles.describtion}`}><ProductDetails data={data}/></div>
                <div className={`${styles.orderCard}`}><OrderCard data={data}/></div>
              </div>
            </div>
        </div> 
    </div>
  )
}

export default SingleProductCard