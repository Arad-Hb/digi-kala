import Card from '@/components/MainPage/Products/Card'
import { GET } from '@/repository/FetchRepository'
import React from 'react'
import styles from './[selectedDigiIcon].module.css'

const selectedDigiIcon = (props) => {
  return (
    <div className={`${styles.selectedCategory}`}>
        {
            props.selectedIconCategory.map(item=>{
                return<div><Card product={item}/></div>
            })
        }
       
    </div>
  )
}

export default selectedDigiIcon

export async function getServerSideProps(context){

    const digiIconUrl=context.params.selectedDigiIcon
    const response=await GET(`products/${digiIconUrl}`)
    const result=await response.json()
  
    
    return{
        props:{
            selectedIconCategory:result
        }
    }
}