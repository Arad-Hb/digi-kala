import React, { useState } from 'react'
import styles from './ProductImage.module.css'
import Image from 'next/image'


const ProductImage = ({data}) => {
  const [imageToShow,setImageToShow]=useState(data.indexImageUrl)

  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.originalImageContainer}`}>
          <Image src={imageToShow} alt={data.name} className={`${styles.originalImage}`} width={300} height={0}/>
        </div>
        <div className={`${styles.ThumbnailsContainer}`}>
            {data.images?(data.images.map(item=>{
              return(
                <div onClick={()=>setImageToShow(item.original)} className={`${styles.Thumbnails}`}>
                  <Image src={item.thumbnail} alt='thumbnails' width={80} height={80} className={`${styles.ThumbnailImage}`}/>
                </div>
              )
            })
              ):null}
        </div>
    </div>

  )
}

export default ProductImage