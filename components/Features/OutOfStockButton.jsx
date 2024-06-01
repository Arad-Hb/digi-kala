import React from 'react'
import styles from './OutOfStockButton.module.css'

const OutOfStockButton = () => {
  return (
<div className={`${styles.outOfStockContainer}`}>
    <label className={`${styles.outOfStockLabel}`}>ناموجود</label>
</div>
  )
}

export default OutOfStockButton