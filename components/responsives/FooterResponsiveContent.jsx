import React from 'react'
import styles from './FooterResponsiveContent.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion';
import AboutUs from '../Footer/AboutUs';
import Introduction from '../Footer/Introduction';
import CustomerServices from '../Footer/CustomerServices';
import OrderGuidance from '../Footer/OrderGuidance';
import Partners from '../Footer/Partners';
import FooterTitle from '../Footer/FooterTitle';

const FooterResponsiveContent = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.responsiveHeader}`}><FooterTitle/></div>
        <div className={`${styles.responsiveMain}`}>
        <Accordion className={`${styles.items}`}flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={`${styles.item}`}>با دیجی کالا</Accordion.Header>
        <Accordion.Body><AboutUs/></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className={`${styles.item}`}>خدمات مشتریان</Accordion.Header>
        <Accordion.Body><CustomerServices/></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className={`${styles.item}`}>راهنمای خرید از دیجی کالا</Accordion.Header>
        <Accordion.Body><OrderGuidance/></Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className={`${styles.item}`}>شرکای تجاری</Accordion.Header>
        <Accordion.Body><Partners/></Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        <div className={`${styles.responsiveFooter}`}>
            <div className={`${styles.introduction}`}><Introduction/></div>
        </div>
    </div>
  )
}

export default FooterResponsiveContent