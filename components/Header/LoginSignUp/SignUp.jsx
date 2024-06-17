import React from 'react'
import styles from './SignUp.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { POST } from '@/repository/AxiosRepository'
import { setJwtToken ,setUserData} from '@/redux/features/slices/UsersSlice'
import Image from 'next/image'
import UsersErrorMessage from '@/components/Header/LoginSignUp/UsersErrorMessage'
import Link from 'next/link'
import Cookies from 'js-cookie'

const SignUp = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const validationSchema = Yup.object({
        username: Yup.string().required('شماره موبایل خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })

    const formFields = {
        firstName:'',
        lastName:'',
        age:'',
        mobile:'',
        username: '',
        password: ''
    }

    const submitHandler = (values) => {
        const Username=values.username
        const Password=values.password
        const data={username:Username,password:Password}

        POST("users/register", data)
        .then(response => {
            if (response.data.id === 0) {
                alert("نام کاربری یا رمز عبور تکراریست!!!!!!")
            }
            else {
                POST("users/login", data)
                    .then(loginResponse => {
                        alert("ثبت نام با موفقیت انجام شد.")
                    //    dispatch(setJwtToken(loginResponse.data.token))
                    //    dispatch(setUserData(values))
                        Cookies.set('jwt', loginResponse.data.token)
                        router.push("/LandingPage")

                    })
            }
        })
        .catch(error => {
            console.log(error)
        })
            
    }
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.loginContent}`}>
          <div className={`${styles.title}`}>
            <span className={`${styles.titleText}`}>ثبت نام</span>
          </div>
          <div className={`${styles.formContainer}`}>
          <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false}>
                <Form>
                    <div className={`${styles.fieldsContainer}`}>
                        <Field className={`${styles.field}`} type="text" name="firstName" placeholder="نام" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="lastName" placeholder="نام خانوادگی" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="age" placeholder="سن" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="mobile" placeholder="شماره موبایل" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="username" placeholder="نام کاربری" />
                        <ErrorMessage name="username" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="password" name="password" placeholder="رمز عبور" />
                        <ErrorMessage name="password" component={UsersErrorMessage} />
                        <button type='submit' className={`${styles.loginButton}`}>ثبت نام</button>
                    </div>
                </Form>
            </Formik>
          </div>
        </div>
        <div className={`${styles.loginFooter}`}>
          <span className={`${styles.footerText}`}>ورود شما به معنای پذیرش شرایط دیجی کالا و قوانین حریم خصوصی است</span>
        </div>
    </div>
  )
}

export default SignUp
