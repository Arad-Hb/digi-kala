import React from 'react'
import styles from './NavBar.module.css'
import { Col } from 'react-bootstrap'
import Location from '../Location'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <>
        <Col xl={10}>
            <Navigation/>
        </Col>
        <Col xl={2}>
            <Location/>
        </Col>
    </>
  )
}

export default NavBar