import React, { useEffect, useState } from 'react'
import styles from './Profile.module.css'
import AcountDetails from './AcountDetails'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { authentication } from '@/repository/Authentication'
import { useRouter } from 'next/router'

const Profile = () => {

const router=useRouter()
const data=authentication()

const deleteAcount=()=>{
  Cookies.remove('jwt')

  return(
      router.push("/")
  )
}
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.sideBar}`}>
        <div className={`${styles.personalInformations}`}>
          <div className={`${styles.information}`}>
            <span className={`${styles.name}`}>{data && data.name} {data && data.lastname}</span>
            <span className={`${styles.mobile}`}>{data && data.mobileNumber}</span>
          </div>
        </div>
        <div className={`${styles.details}`}><AcountDetails/></div>
        <div onClick={deleteAcount}>حذف حساب کاربری</div>
      </div>
      <div className={`${styles.mainContent}`}>
        <div  className={`${styles.varification}`}>
        با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و از امکان «خرید اعتباری» نیز استفاده کنید
        </div>
        <div  className={`${styles.orderDetails}`}>
          <div className={`${styles.detailsTitle}`}>سفارش های من</div>
          <div className={`${styles.detailsItems}`}>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/blueCloud.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>جاری</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/greenBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>تحویل شده</span>
              </span>
            </div>
            <div className={`${styles.item}`}>
              <span className={`${styles.itemImage}`}>
                <Image src={"/images/yellowBox.svg"} width={80} height={90} alt='status'/>
              </span>
              <span className={`${styles.itemCondition}`}>
                <span className={`${styles.ConditionNumber}`}>0 سفارش</span>
                <span className={`${styles.ConditionName}`}>مرجوع شده</span>
              </span>
            </div>
          </div>
        </div>
        <div  className={`${styles.organsOrder}`}>
        این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و گواهی ارزش‌افزوده) دارند.
        </div>
      </div>
    </div>
  )
}

export default Profile