import React, { useRef } from 'react'
import style from './Login.module.css'
import { Button, Container, Form } from 'react-bootstrap'


const Login = ({data}) => {
  const username=useRef()
  const password=useRef()
  const submitHandler=(e)=>{
    e.preventDefault()
    const result=data.filter(item=>{
      return item.username===username.current.value && item.password===password.current.value
    })
    console.log(result.length);
  }
  return (
    <div>
        <Form onSubmit={submitHandler}>
            <Form.Label>Enter User Name:</Form.Label>
            <Form.Control ref={username}></Form.Control>
            <Form.Label>Enter Password:</Form.Label>
            <Form.Control ref={password}></Form.Control>
            <Button type='submit'>Enter</Button>
        </Form>
    </div>
  )
}

export default Login

