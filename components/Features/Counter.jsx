import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Counter.module.css'
import RemoveButton from './RemoveButton'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

const Counter = ({data}) => {
    
    const state=useSelector(state=>state.shoppingReducer)
 
  return (
    <div className={`${styles.counterContainer}`}>
        <IncrementButton data={data}/>
        <label className={`${styles.counterLabel}`} >{state.items.filter(item=>item.id===data.id)[0].count}</label>
        {
          state.items.filter(item=>item.id===data.id)[0].count===1?<RemoveButton data={data}/>:<DecrementButton data={data}/>
        }
       
    </div>
  )
}


export default Counter
