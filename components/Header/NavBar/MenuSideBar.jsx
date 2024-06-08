import Link from 'next/link'
import React from 'react'
import styles from './MenuSideBar.module.css'
import Data from '../../../files/menuData.json'
import SideNavIcons from './SideNavIcons'
import { useDispatch } from 'react-redux'
import { addId } from '@/redux/features/slices/menuSlice'


const MenuSideBar = () => {
    const dispatch=useDispatch()
    const data=Data[0]

  return (
    <div className={`${styles.outerContainer}`}>
        {
            data.sideNav.map(item=>{
            
                return(
                    <div className={`${styles.categoryContainer}`}>
                        <Link href={""} className={`${styles.link}`} onMouseOver={()=>dispatch(addId(item.id))}>
                            <span className={`${styles.icon}`}><SideNavIcons icon={item.icon}/></span>
                            <span className={`${styles.text}`}>{item.name}</span>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default MenuSideBar