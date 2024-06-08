import React from 'react'
import styles from './ProductDetails.module.css'

const ProductDetails = ({data}) => {
  return (
    <div>
        <span>{data.price}</span>
        <span>{data.stock}</span>
        <span>{data.description}</span>
    </div>
  )
}

export default ProductDetails