import { addItem } from '@/redux/features/slices/shoppingCartSlice'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './AddButton.module.css'

const AddButton = (props) => {
const router= useRouter()
const dispatch=useDispatch()
const addItemToBasketHandler=()=>{
  dispatch(addItem(props.data))
 router.push(`/shoppingCart`)
}
  return (
    <div className={`${styles.addButtonContainer}`}>
        <button onClick={addItemToBasketHandler} className={`${styles.addButton}`}>افزودن به سبد</button>
    </div>
  )
}

export default AddButton