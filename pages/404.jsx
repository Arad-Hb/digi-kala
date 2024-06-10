import Image from 'next/image'
import React from 'react'

const notfound = () => {

  return (
    <div>
        <Image fill objectFit='contain' style={{backgroundColor: "white"}} src='/images/notFound.png' alt='not found' />
    </div>
  )
}

export default notfound