import React from 'react'
import styles from './ProductImage.module.css'
import Image from 'next/image'
import ProductThumbnails from './ProductThumbnails'

const ProductImage = ({data}) => {
  return (
    <div>
        <div style={{ width: '500px', height: 'auto' }}>
        <Image src={data.indexImageUrl} alt={data.name} className='' width={500} height={0} style={{  height: 'auto' }}/>
        </div>
        <div>
            {
            data.images?<ProductThumbnails data={data}/>:null
            }
        </div>
    </div>

  )
}

export default ProductImage