import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { customIncrement, decrement, increment, reset } from '@/redux/features/slices/CounterSlice'

const Counter = () => {
    const number=useSelector(state=>state.counterReducer)
    const dispatch=useDispatch()
    const customNumber=useRef()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <label>{number.num}</label>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <input type='number' ref={customNumber}></input>
        <button onClick={()=>dispatch(customIncrement(Number(customNumber.current.value)))}>++</button>
    </div>
  )
}

export default Counter