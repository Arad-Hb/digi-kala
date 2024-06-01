import { removeItem } from '@/redux/features/slices/shoppingCartSlice'
import React from 'react'
import { GoTrash } from "react-icons/go"
import { useDispatch } from 'react-redux'
import styles from './RemoveButton.module.css'

const RemoveButton = ({data}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <button className={`${styles.counterButton}`} onClick={()=>dispatch(removeItem(data.id))}><GoTrash /></button>
    </div>
  )
}

export default RemoveButton