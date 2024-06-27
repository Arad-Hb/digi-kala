import React from 'react'
import styles from './SignUp.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { POST } from '@/repository/AxiosRepository'
import UsersErrorMessage from '@/components/Header/LoginSignUp/UsersErrorMessage'
import Cookies from 'js-cookie'
import { setUserData } from '@/redux/features/slices/UsersSlice'


const SignUp = () => {

    const router = useRouter()

    const validationSchema = Yup.object({
        name: Yup.string().required('لطفا نام خود را وارد نمایید'),
        lastname: Yup.string().required('لطفا نام خانوادگی خود را وارد نمایید'),
        mobileNumber: Yup.string().required('شماره موبایل خود را وارد نمایید'),
        username: Yup.string().required(' لطفا نام کاربری خود را وارد نمایید'),
        password: Yup.string().required("رمز عبور را وارد نمایید")
    })

    const formFields = {
        name:'',
        lastname:'',
        mobileNumber:'',
        username: '',
        password: ''
    }
   
    const submitHandler = (values) => {
        const Username=values.username
        const Password=values.password
        const data={username:Username,password:Password}

        POST("users/register", values)
        .then(response => {
            if (response.data.id === 0) {
                alert("نام کاربری یا رمز عبور تکراریست!!!!!!")
            }
            else {
                POST("users/login", data)
                    .then(loginResponse => {
                        alert("ثبت نام با موفقیت انجام شد.")
                        Cookies.set('jwt', loginResponse.data.token)
                        setUserData(values)
                        // Cookies.set('user', JSON.stringify(values))
                        router.push("/dashboard/ProfilePage")

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
                        <Field className={`${styles.field}`} type="text" name="name" placeholder="نام" />
                        <ErrorMessage name="name" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="lastname" placeholder="نام خانوادگی" />
                        <ErrorMessage name="lastname" component={UsersErrorMessage} />
                        <Field className={`${styles.field}`} type="text" name="mobileNumber" placeholder="شماره موبایل" />
                        <ErrorMessage name="mobileNumber" component={UsersErrorMessage} />
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
