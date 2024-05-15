import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src={'/images/logo.svg'} alt={'digi kala'} height={100} width={100}/>
    </div>
  )
}

export default Logo