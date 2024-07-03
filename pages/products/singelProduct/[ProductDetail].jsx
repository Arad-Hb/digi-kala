
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[ProductDetail].module.css'
import SingleProductHeader from '@/components/singleProduct/SingleProductHeader'
import SingleProductCard from '@/components/singleProduct/SingleProductCard'

const ProductDetail = (props) => {
  
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.header}`}><SingleProductHeader data={props.selectedItem}/></div>
        <div className={`${styles.mainContent}`}><SingleProductCard data={props.selectedItem}/></div>
    </div>
  )
}

export default ProductDetail

export async function getServerSideProps(context){

    const selectedItemId=context.params.ProductDetail
    const singleProductResponse=await GET(`products/${selectedItemId}`)
    const singleProductResult=await singleProductResponse.json()

    const productCategoryResponse=await GET(`products/search/${selectedItemId}`)
    const productCategoryResult=await productCategoryResponse.json()

    return{
        props:{
            selectedItem:singleProductResult,
            similarOffers:productCategoryResult
        }
    }
}