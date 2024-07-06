import React from 'react'
import styles from './ProductPrice.module.css'
import { MdOutlinePriceChange } from "react-icons/md"
import { RiDiscountPercentLine } from "react-icons/ri"
import { TbBasketDiscount } from "react-icons/tb"
import { FcSalesPerformance } from "react-icons/fc"

const ProductPrice = ({data}) => {
  return (
    <div className={`${styles.outerContainer}`}>
        {data.priceWithDiscount === 0 ? (
              <div className={`${styles.price}`}>
                <span className={`${styles.priceIcon}`}><MdOutlinePriceChange /></span>
                <span className={`${styles.priceText}`}>قیمت کالا</span>
                <span className={`${styles.priceNumber}`}>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
              </div>
            ) : (
          <div className={`${styles.priceContainer}`}>
            <div className={`${styles.priceWithAndWithoutOffContainer}`}>
              <div className={`${styles.priceWithoutOff}`}>
                <span className={`${styles.priceWithoutOffIcon}`}><MdOutlinePriceChange /></span>
                <span className={`${styles.priceWithoutOffText}`}>قیمت بدون تخفیف کالا</span>
                <span className={`${styles.priceWithoutOffNumber}`}>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>
              </div>
              <div className={`${styles.priceWithOff}`}>
                <span className={`${styles.priceWithOffIcon}`}><TbBasketDiscount /></span>
                <span className={`${styles.priceWithOffText}`}>قیمت با تخفیف کالا</span>
                <span className={`${styles.priceWithOffNumber}`}>{data.priceWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</span>              
              </div>
            </div>
            <div className={`${styles.offPrcent}`}>
              <span className={`${styles.offPrcentIcon}`}><RiDiscountPercentLine /></span>
              <span className={`${styles.offPrcentText}`}>درصد تخفیف کالا</span>
              <span className={`${styles.offPrcentNumber}`}>{Math.floor(((data.price - data.priceWithDiscount) / data.price) * 100)}%</span>
            </div>
            <div className={`${styles.profit}`}>
              <span className={`${styles.profitIcon}`}><FcSalesPerformance /></span>
              <span className={`${styles.profitText}`}>سود شما از خرید</span>
              <span className={`${styles.profitNumber}`}>{Math.floor(data.price - data.priceWithDiscount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}تومان</span>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProductPrice