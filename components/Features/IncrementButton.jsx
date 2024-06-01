import { increaseItem } from '@/redux/features/slices/shoppingCartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { HiPlusSm } from "react-icons/hi"
import styles from './IncrementButton.module.css'

const IncrementButton = ({data}) => {
    const dispatch=useDispatch()

  return (
    <button className={`${styles.counterButton}`} onClick={()=>dispatch(increaseItem(data.id))}><HiPlusSm /></button>
  )
}

export default IncrementButton