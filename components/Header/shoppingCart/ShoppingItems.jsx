import styles from './ShoppingItems.module.css'
import { useSelector } from 'react-redux'

const ShoppingItems = () => {
  const state=useSelector(state=>state.shoppingReducer)

  return (
    <div className={`${styles.shoppingItems}`}>{state.totalCount}</div>
  )
}

export default ShoppingItems