import React from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './EmailBox.module.css'

const EmailBox = () => {
    const submitHandler=()=>{
        return alert('ایمیل شما با موفقیت ثبت شد')
    }
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید</div>
        <div className={`${styles.emailContainer}`}>
            <Form onSubmit={submitHandler} className={`${styles.emailForm}`}>
                <input type='text' placeholder='ایمیل شما'  className={`${styles.emailInput}`}></input>
                <button type='submit' className={`${styles.emailButton}`}>ثبت</button>
            </Form>
        </div>
    </div>
  )
}

export default EmailBox