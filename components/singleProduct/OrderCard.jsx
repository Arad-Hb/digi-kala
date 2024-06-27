import React from 'react'
import styles from './OrderCard.module.css'
import AddButton from '@/components/Features/AddButton'
import Counter from '@/components/Features/Counter'
import OutOfStockButton from '@/components/Features/OutOfStockButton'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { AiOutlineSafety } from "react-icons/ai"
import { BiTimer } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"
import { ImInfo } from "react-icons/im"

const OrderCard = ({data}) => {
  const state=useSelector(state=>state.shoppingReducer)
  return (
    <div className={`${styles.outerContainer}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.sellerTitle}`}>
          <span className={`${styles.title}`}>فروشنده:</span>
          <span className={`${styles.otherSellers}`}>3 فروشنده دیگر</span>
        </div>
        <div className={`${styles.sellerIntroduce}`}>
          <span className={`${styles.sellerLogo}`}><Image src='/images/footerlogo2.png' alt='digi kala' className={`${styles.sellerImage}`} width={20} height={20}/></span>
          <span className={`${styles.sellerName}`}>دیجی کالا</span>
        </div>
      </div>
      <div className={`${styles.seperator}`}></div>
      <div className={`${styles.mainContent}`}>
      {data.priceWithDiscount === 0 ? (
          <div className={`${styles.priceContainer}`}>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</div>
        ) : (
          <div className={`${styles.priceDetails}`}>
            <div className={`${styles.priceWithAndWithoutDiscount}`}>
              <div className={`${styles.priceBeforeOff}`}>
                  <label className={`${styles.priceWithoutDiscount}`}>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}تومان</label>
                  <label className={`${styles.offPrcent}`}>{Math.floor(((data.price - data.priceWithDiscount) / data.price) * 100)}%</label>
              </div>
              <div className={`${styles.priceWithDiscount}`}>{data.priceWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}تومان</div>
            </div>
          </div>
        )}
        <div className={`${styles.addButton}`}>{state.items.find(item=>item.id==data.id)?<Counter data={data}/>:data.stock!==0?<AddButton data={data}/>:<OutOfStockButton/>}</div>
      </div>
      <div className={`${styles.footer}`}>
        <div className={`${styles.guarantee}`}>
          <span className={`${styles.guaranteeIcon}`}><AiOutlineSafety /></span>
          <span className={`${styles.guaranteeText}`}>گارانتی ۱۸ ماهه داریا همراه پایتخت</span>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.deliveryContainer}`}>
          <div className={`${styles.delivery}`}>
            <span className={`${styles.deliveryIcon}`}><TbTruckDelivery /></span>
            <span className={`${styles.deliveryText}`}>ارسال دیجی‌کالا</span>
          </div>
          <div className={`${styles.fastDelivery}`}>
            <span className={`${styles.fastDeliveryIcon}`}><BiTimer /></span>
            <span className={`${styles.fastDeliveryText}`}>ارسال امروز (فعلا در شهر تهران و کرج)</span>
          </div>
        </div>
        <div className={`${styles.seperator}`}></div>
        <div className={`${styles.digiClub}`}>
            <div className={`${styles.digiClubTitle}`}>
                <span className={`${styles.clubIcon}`}>
                    <Image src={'/images/club-point.svg'}  className={`${styles.clubImage}`} alt='digi club' width={20} height={20}/>
                </span>
                <span className={`${styles.titleText}`}>دیجی‌کلاب</span>
                <span className={`${styles.infoIcon}`}><ImInfo /></span>
            </div>
            <div className={`${styles.digiClubPoint}`}>150 امتیاز</div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard