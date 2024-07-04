import Link from 'next/link'
import React from 'react'
import { LuInstagram } from "react-icons/lu"
import { BsTwitter } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { SiAparat } from "react-icons/si"
import styles from './SocialMedia.module.css'

const SocialMedia = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>همراه ما باشید!</div>
        <div className={`${styles.Links}`}>
            <Link href={'#'} className={`${styles.Link}`}><LuInstagram /></Link>
            <Link href={'#'} className={`${styles.Link}`}><BsTwitter /></Link>
            <Link href={'#'} className={`${styles.Link}`}><ImLinkedin /></Link>
            <Link href={'#'} className={`${styles.Link}`}><SiAparat /></Link>
        </div>
    </div>
  )
}

export default SocialMedia