import React from 'react'
import styles from './AcountDetails.module.css'
import { IoIosArrowBack } from "react-icons/io"
import { GoComment } from "react-icons/go"
import { MdOutlineShoppingBag } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa"
import { BiBell } from "react-icons/bi"
import { RxExit } from "react-icons/rx"
import { PiStarFour } from "react-icons/pi"
import { AiOutlineUserDelete } from "react-icons/ai"
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { removeUserData } from '@/redux/features/slices/UsersSlice'

const AcountDetails = () => {

    const router=useRouter()
    const dispatch=useDispatch()

    const logOutHandler=()=>{
      Cookies.remove('jwt')
      return(
        router.push("/")
    )
    }

    const deleteAcountHandler=()=>{
      Cookies.remove('jwt')
      dispatch(removeUserData())
      return(
          router.push("/")
      )
    }
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.digiPlus}`}>
          <div className={`${styles.digiPlusName}`}>
            <span className={`${styles.digiPlusNameIcon}`}><PiStarFour /></span>
            <span className={`${styles.digiPlusNameText}`}>دیجی پلاس</span>
          </div>
          <div className={`${styles.subscription}`}>
            <span className={`${styles.subscriptionName}`}>خرید اشتراک</span>
            <span className={`${styles.subscriptionIcon}`}><IoIosArrowBack /></span>
          </div>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><MdOutlineShoppingBag /></span>
          <span className={`${styles.itemsText}`}>سفارش ها</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><FaRegHeart /></span>
          <span className={`${styles.itemsText}`}>لیست ها</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><GoComment /></span>
          <span className={`${styles.itemsText}`}>دیدگاه ها</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><BiBell /></span>
          <span className={`${styles.itemsText}`}>پیغام ها</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div onClick={logOutHandler} className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><RxExit /></span>
          <span className={`${styles.itemsText}`}>خروج از حساب کاربری</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div onClick={deleteAcountHandler} className={`${styles.items}`}>
          <span className={`${styles.itemsIcon}`}><AiOutlineUserDelete /></span>
          <span className={`${styles.itemsText}`}>حذف حساب کاربری</span>
        </div>
    </div>
  )
}

export default AcountDetails