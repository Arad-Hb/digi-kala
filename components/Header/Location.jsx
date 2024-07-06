import React, { useState } from 'react'
import styles from './Location.module.css'
import Link from 'next/link'
import { GrLocation } from "react-icons/gr"
import Countries from './Countries'

const Location = () => {

  const [display,setDisplay]=useState("none")
  const locationContentStyles={
display:`${display}`
}

  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.locationButton}`}>
            <Link href={''} className={`${styles.locationLink}`} onClick={()=>{setDisplay("flex")}}>
                <GrLocation  className={`${styles.locationIcon}`}/>
                <span className={`${styles.locationText}`}>لطفا شهر خود را انتخاب کنید</span>
            </Link>
        </div>
        <div style={locationContentStyles} className={`${styles.locationContent}`} onMouseLeave={()=>{setDisplay("none")}} onClick={()=>{setDisplay("none")}}>
          <Countries/>
        </div>
    </div>
  )
}

export default Location