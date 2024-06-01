import AddButton from '@/components/Features/AddButton'
import Counter from '@/components/Features/Counter'
import OutOfStockButton from '@/components/Features/OutOfStockButton'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetail = ({selectedItem}) => {
  const state= useSelector(state=>state.shoppingReducer)
  return (
    <div>
        <h1>{selectedItem.name}</h1>
        <h1>{selectedItem.price}</h1>
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