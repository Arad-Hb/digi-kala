import Card from '@/components/MainPage/Products/Card'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[selectedCategory].module.css'

const selectedCategory = (props) => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.categoryTitle}`}>{props.selectedItemName}</div>
        <div className={`${styles.selectedCategory}`}>
        {
            props.selectedItemCategory.map(item=>{
                return<div className={`${styles.selectedCategoryItems}`}><Card product={item}/></div>
            })
        }
       </div>
    </div>
  )
}

export default selectedCategory

export async function getServerSideProps(context){

    const selectedItemUrl=context.params.selectedCategory
    const response=await GET(`products/${selectedItemUrl}`)
    const result=await response.json()
  
    
    return{
        props:{
            selectedItemCategory:result,
            selectedItemName:selectedItemUrl
        }
    }
}