import Counter from '@/components/Features/Counter'
import React from 'react'
import styles from './ShoppingCartItem.module.css'
import { TbTruckDelivery,TbHomeCheck } from "react-icons/tb"
import { AiOutlineSafety } from "react-icons/ai"
import { BiSolidColor } from "react-icons/bi"
import { useRouter } from 'next/router'
import Image from 'next/image'


const ShoppingCartItem = ({data}) => {
   const router=useRouter()
   const clickHandler=(id)=>{
    router.push(`/products/singelProduct/${id}`)
   }
  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.items.map(item=>{
               
        return <div className={`${styles.shoppingItemContainer}`}>
                    <div className={`${styles.imageContainer}`} onClick={()=>clickHandler(item.id)}>
                        <Image src={item.indexImageUrl} alt={item.name} width={200} height={0} className={`${styles.indexImage}`}/>
                    </div>
                    <div className={`${styles.describtionContainer}`}>
                        <div className={`${styles.itemsNameContainer}`}>
                            <label className={`${styles.itemsName}`}>{item.name}</label>
                        </div>
                        <div className={`${styles.itemsDescribtions}`}>
                            <div className={`${styles.describtion}`}>
                                <span><BiSolidColor className={`${styles.color}`}/></span>
                                <span>آبی</span>
                            </div>
                            <div className={`${styles.describtion}`}>
                                <span><AiOutlineSafety /></span>
                                <span>گارانتی 18 ماهه</span>
                            </div>
                            <div className={`${styles.describtion}`}>
                                <span><TbHomeCheck /></span>
                                <span>دیجی کالا</span>
                            </div>
                            <div className={`${styles.describtion}`}>
                                <span><TbTruckDelivery /></span>
                                <span>ارسال امروز</span>
                            </div>
                        </div>
                        <div className={`${styles.counterContainer}`}>
                            <div className={`${styles.itemsCounter}`}><Counter data={item}/></div>
                            <div className={`${styles.itemsTotalPrice}`}>
                                <label>
                                    {item.priceWithDiscount === 0 ? (
                                    Math.floor(item.price*item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")):(
                                    Math.floor(item.priceWithDiscount*item.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))} تومان
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            })
        }
    </div>
  )
}

export default ShoppingCartItem