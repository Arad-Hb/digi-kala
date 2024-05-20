import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styles from './SearchBox.module.css'
import { LuSearch } from "react-icons/lu"


const SearchBox = () => {
    const text=useRef()
    const router=useRouter()

    const submitHandler=()=>{
        router.push(`/products/searching/${text.current.value}`)
    }
  return (
    <div className={`${styles.searchBoxContainer}`}>
      <input type='text' ref={text} className={`${styles.searchBox}`} placeholder='جستوجو در'/>
      <button type='submit' onClick={submitHandler} className={`${styles.searchBoxButton}`}>
      <LuSearch />
      </button>
    </div>
  )
}

export default SearchBox