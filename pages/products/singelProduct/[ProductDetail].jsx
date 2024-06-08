import AddButton from '@/components/Features/AddButton'
import Counter from '@/components/Features/Counter'
import OutOfStockButton from '@/components/Features/OutOfStockButton'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[ProductDetail].module.css'
import { useSelector } from 'react-redux'
import SingleProductHeader from '@/components/singleProduct/SingleProductHeader'
import SingleProductCard from '@/components/singleProduct/SingleProductCard'

const ProductDetail = ({selectedItem}) => {
  const state= useSelector(state=>state.shoppingReducer)
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.header}`}><SingleProductHeader data={selectedItem}/></div>
        <div className={`${styles.mainContent}`}><SingleProductCard data={selectedItem}/></div>
        <div className={`${styles.footer}`}></div>
        {
           state.items.find(item=>item.id==selectedItem.id)?<Counter data={selectedItem}/>:selectedItem.stock!==0?<AddButton data={selectedItem}/>:<OutOfStockButton/>
        }
    </div>
  )
}

export default ProductDetail

export async function getServerSideProps(context){

    const selectedItemId=context.params.ProductDetail
    const response=await GET(`products/${selectedItemId}`)
    const result=await response.json()
  
    
    return{
        props:{
            selectedItem:result
        }
    }
}