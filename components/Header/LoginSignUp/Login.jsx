import React from 'react'
import styles from './Login.module.css'
import Image from 'next/image'
import UsersErrorMessage from './UsersErrorMessage'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { POST } from '../../../repository/AxiosRepository'
import { useDispatch } from 'react-redux'
import { setJwtToken } from '@/redux/features/slices/UsersSlice'
import { useRouter } from 'next/router'

const Login = () => {
  const dispatch=useDispatch()
  const router=useRouter()
  const validationSchema = Yup.object({
    username: Yup.string().required('شماره موبایل خود را وارد نمایید'),
    password: Yup.string().required("رمز عبور را وارد نمایید")
})

const formFields = {
    username: '',
    password: ''
}
const submitHandler = (values) => {

  POST("users/login", values)
            .then(response => {
              
                if (response.data.hasOwnProperty("token")) {
                    dispatch(setJwtToken(response.data.token))
                    //Cookies.set('jwt', response.data.token , { expires: 70, path: '/admin' })
                    router.push("/dashboard/UserDashboard")
                }
                else {
                    alert("username or password is not valid")
                }
            })
            .catch(error => {
                console.log(error)
            })      
  }
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.loginHeader}`}>
          <Image src={'/images/logo.svg'} className={`${styles.logoImage}`} alt='digi kala' width={150} height={100}/>
        </div>
        <div className={`${styles.loginContent}`}>
          <div className={`${styles.title}`}>
            <span className={`${styles.titleText}`}>ورود</span>
            <span className={`${styles.sepLine}`}></span>
            <span className={`${styles.titleText}`}>ثبت نام</span>
          </div>
          <div className={`${styles.formTitle}`}>
            <span className={`${styles.formTitleText}`}>سلام ! <br/> لطفا شماره موبایل و رمز عبور خود را وارد کنید:</span>
          </div>
          <div className={`${styles.formContainer}`}>
            <Formik onSubmit={submitHandler} initialValues={formFields} validationSchema={validationSchema} validateOnChange={false} validateOnBlur={false}>
                <Form className={`${styles.form}`}>
                  <Field className={`${styles.field}`} type="text" name="username" placeholder="شماره موبایل" />
                  <ErrorMessage name="username" component={UsersErrorMessage} />
                  <Field className={`${styles.field}`} type="password" name="password" placeholder="رمز عبور" />
                  <ErrorMessage name="password" component={UsersErrorMessage} />
                  <button type='submit' className={`${styles.loginButton}`}>ورود</button>
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

export default Login