import Link from 'next/link'
import React from 'react'
import styles from './MenuSideBar.module.css'
import Data from '../../../files/menuData.json'
import SideNavIcons from './SideNavIcons'
import { useDispatch } from 'react-redux'
import { addId } from '@/redux/features/slices/menuSlice'
import { CiMobile3 } from "react-icons/ci"
import { LuPencilRuler } from "react-icons/lu"
import { LiaLaptopSolid,LiaNotesMedicalSolid } from "react-icons/lia"
import { RiSofaLine, RiShoppingBasketLine} from "react-icons/ri"
import { CgSmartHomeRefrigerator } from "react-icons/cg"
import { PiTShirtLight } from "react-icons/pi"
import { GiEmeraldNecklace } from "react-icons/gi"
import { TbHeartCheck,TbGiftCard ,TbBrandReactNative} from "react-icons/tb"
import { FaCampground } from "react-icons/fa"
import { MdOutlineSmartToy } from "react-icons/md"
import { BiWrench } from "react-icons/bi"
import { IoCarSportOutline } from "react-icons/io5"
import {
    MdOutlinePhone,
    MdOutlineFavorite,
    MdOutlineContactPhone,
  } from "react-icons/md"
import Image from 'next/image'




const MenuSideBar = () => {

    const dispatch=useDispatch()
    const menuData=Data[0].sideNav
    
  return (
    <div className={`${styles.outerContainer}`}>
        {
            menuData.map(item=>{
            
                return(
                    <div className={`${styles.categoryContainer}`}>
                        <Link href={""} className={`${styles.link}`} onMouseOver={()=>dispatch(addId(item.id))}>
                            <span className={`${styles.icon}`}><IoCarSportOutline/></span>
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