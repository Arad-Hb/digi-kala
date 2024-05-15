import React from 'react'
import styles from './Navigation.module.css'
import { Col, Row } from 'react-bootstrap'
import NavMenu from './NavMenu'
import NavItems from './NavItems'
import NavOffers from './NavOffers'

const Navigation = () => {
  return (
    <Row>
        <Col xl={1}><NavMenu/></Col>
        <Col xl={8}><NavItems/></Col>
        <Col xl={3}><NavOffers/></Col>
    </Row>
  )
}

export default Navigation