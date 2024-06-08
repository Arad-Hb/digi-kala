import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ProductThumbnails = ({data}) => {
    const [Thumbnails,setThumbnails]=useState([])
    useEffect(()=>{
        setThumbnails(data.images)
    })
  return (
    <div>
        {
           Thumbnails.map(item=>{
            return<Image src={item.thumbnail} alt={item.id} width={50} height={50}/>
           }) 
        }
    </div>
  )
}

export default ProductThumbnails