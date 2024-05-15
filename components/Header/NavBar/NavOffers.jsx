import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './NavOffers.module.css'

const NavOffers = () => {
  return (
    <Row>
        <Col><Link href={'/contactUs'} className={`${styles.navItems}`}>در دیجی کالا بفروشید!</Link></Col>
        <Col><Link href={'/contactUs'} className={`${styles.navItems}`}>سوالی دارید؟</Link></Col>
    </Row>
  )
}

export default NavOffers