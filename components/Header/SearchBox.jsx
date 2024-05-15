import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import styles from './SearchBox.module.css'
import { Button, Form } from 'react-bootstrap'
import { LuSearch } from "react-icons/lu"

const SearchBox = () => {
    const text=useRef()
    const router=useRouter()

    const submitHandler=()=>{
        router.push(`/products/searching/${text.current.value}`)
    }
  return (
    <div>
        <Form onSubmit={submitHandler} className={`${styles.searchBox}`}>
            <Form.Control ref={text} className={`${styles.searchBoxContent}`}>
            </Form.Control>
            <Button type='submit' className={`${styles.searchBoxButton}`}>
            <LuSearch />
            </Button>
        </Form>
    </div>
  )
}

export default SearchBox