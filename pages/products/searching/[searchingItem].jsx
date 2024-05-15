import Card from '@/components/MainPage/Products/Card'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[searchingItem].module.css'

const searchingItem = (props) => {
    const searchingResult=props.searchingResult
  return (
    <div>
        <h1>searching page</h1>
{
    searchingResult.map(item=>{
        return<div>
                <Card product={item}/>
             </div>
    })
}
    </div>
  )
}

export default searchingItem

export async function getServerSideProps(context){
    const searchingItem=context.params.searchingItem
    const response=await GET(`products/search/${searchingItem}`)
    const result=await response.json()
   console.log(result);
    return{
        props:{
            searchingResult:result
        }
    }
}