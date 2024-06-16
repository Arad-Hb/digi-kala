import React from 'react'
import styles from './ProfileButton.module.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { FaRegUser } from "react-icons/fa6"
import { IoIosArrowBack } from "react-icons/io"
import AcountDetails from './AcountDetails'


const ProfileButton = ({data}) => {

    
  return (
    <Dropdown className={`${styles.outerContainer}`}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic"   className={`${styles.userButton}`}>
        <div className={`${styles.userIcon}`}><FaRegUser /></div>
      </Dropdown.Toggle>
      <Dropdown.Menu className={`${styles.userContent}`}>
        <Dropdown.Item href="/dashboard/ProfilePage" className={`${styles.userName}`}>
          <span className={`${styles.nameText}`}>{data.name} {data.lastName}</span>
          <span className={`${styles.nameIcon}`}><IoIosArrowBack /></span>
        </Dropdown.Item>
        <AcountDetails/>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ProfileButton