import React from 'react'
import styles from './Location.module.css'
import { Row } from 'react-bootstrap'
import Link from 'next/link'
import { GrLocation } from "react-icons/gr"

const Location = () => {
  return (
    <Row>
        <div>
            <Link href={'#'} className={`${styles.locationLink}`}>
                <GrLocation  className={`${styles.locationIcon}`}/>
                <span className={`${styles.locationText}`}>لطفا شهر خود را انتخاب کنید</span>
            </Link>
        </div>
    </Row>
  )
}

export default Location