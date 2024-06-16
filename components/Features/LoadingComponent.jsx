import React from 'react'
import styles from './LoadingComponent.module.css'
import Image from 'next/image'





const LoadingComponent = () => {
  return (
    
<div className={`${styles.loading}`}>
<Image src="/images/logo.svg" fill alt='logo'/>
</div>
  
  )
}

export default LoadingComponent