import React from 'react'
import styles from './Login.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { POST } from '@/repository/AxiosRepository'
import { setJwtToken } from '@/redux/features/slices/UsersSlice'
import Image from 'next/image'
import UsersErrorMessage from '@/components/Header/LoginSignUp/UsersErrorMessage'

const SignUp = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const validationSchema = Yup.object({
        username: Yup.string().required('شماره موبایل خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })

    const formFields = {
        username: '',
        password: ''
    }

    const submitHandler = (values) => {

        POST("users/register", values)
        .then(response => {
            if (response.data.id === 0) {
                alert("user exists!!!")
            }
            else {
                POST("users/login", values)
                    .then(loginResponse => {
                       dispatch(setJwtToken(loginResponse.data.token))
                       //Cookies.set('jwt', response.data.token)
                        router.push("/LandingPage")
                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
            
    }
  return (
    <div>
    
        <div><Image src="/images/logo.svg" width={150} height={100} alt='logo'/></div>
        <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false}>
                <Form>
                    <div className={`${styles.fieldsContainer}`}>
                        
                        <Field className={`${styles.field}`} type="text" name="username" placeholder="شماره موبایل" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="password" name="password" placeholder="رمز عبور" />
                        <ErrorMessage name="password" component={UsersErrorMessage} />
                        <button type='submit' className={`${styles.loginButton}`}>ثبت نام</button>
                    </div>
                </Form>
            </Formik>
    </div>
  )
}

export default SignUp
