import React from 'react'
import styles from './MenuContent.module.css'
import Data from "../../../files/menuData.json"
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { IoIosArrowBack } from "react-icons/io"
import { RxDividerVertical } from "react-icons/rx"



const MenuContent = () => {
  const data=Data[1]
  const state=useSelector(state=>state.menuReducer)
  

  return (
  
    <div className={`${styles.outerContainer}`}>
      {
        data.mainNav.map(item=>{
          if(item.parentId===state.id){
            return<div className={`${styles.innerContainer}`}>
                    <div className={`${styles.headerContainer}`}>
                      <span className={`${styles.staticText}`}>همه محصولات</span>
                      <span className={`${styles.dynamicText}`}>{item.name}</span>
                      <span className={`${styles.headerIcon}`}><IoIosArrowBack /></span>
                    </div>
                  
              {
              item.titles.map(item=>{
                return(
                  <div className={`${styles.itemsContainer}`}>
                    <div className={`${styles.titleContainer}`}>
                      <span className={`${styles.outLine}`}><RxDividerVertical /></span>
                      <span className={`${styles.text}`}>{item.name}</span>
                      <span className={`${styles.titleIcon}`}><IoIosArrowBack /></span>
                    </div>
                    {
                        item.items.map(item=>{
                          return<div className={`${styles.itemContainer}`}>
                            <Link href={`/products/searching/سامسونگ`} className={`${styles.itemLink}`} >{item.name}</Link>
                          </div>
                        })
                    }
                  </div>
                )
              })
              }</div>
          }
        })
      }
    </div>
  )
}

export default MenuContent