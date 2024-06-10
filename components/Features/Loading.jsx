import React from 'react'
import styles from './Loading.module.css'
import Image from 'next/image'





const Loading = () => {
  return (
    
<div className={`${styles.loading}`}>
<Image src="/images/logo.svg" width={400} height={300} alt='logo'/>
</div>
  
  )
}

export default Loading