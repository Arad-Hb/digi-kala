import React, { useContext } from 'react'
import style from './Footer.module.css'
import Counter from '../Counter'
import Carusel from '../carusel/Carusel'
import Context from '@/ContextAPI/Context'

const Footer = () => {
  const {incOfferProducts}=useContext(Context)
  return (
    <div>
      <Carusel  cardsCount={5} data={incOfferProducts}/>
    </div>
  )
}

export default Footer