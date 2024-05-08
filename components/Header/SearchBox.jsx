import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styles from './SearchBox.module.css'

const SearchBox = () => {
    const text=useRef()
    const router=useRouter()

    const clickHandler=()=>{
        router.push(`/products/searching/${text.current.value}`)
    }
  return (
    <div>
        <input type='text' ref={text} />
        <button type='text' onClick={clickHandler}>search</button>
    </div>
  )
}

export default SearchBox