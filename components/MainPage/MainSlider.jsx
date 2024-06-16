import React, { useContext } from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import ReactImageGallery from 'react-image-gallery'

const MainSlider = ({data}) => {
 
  return (
    <div>
      <ReactImageGallery 
     items={data}
     autoPlay={true}
     slideInterval={3000}
     lazyLoad={true}
     showFullscreenButton = {false}
     showPlayButton={false}
     showThumbnails={false}
     showBullets={true}
     isRTL={true}
     fullscreen={true}
     onClick={()=>{alert('clicked')}}
     />
    </div>
  )
}

export default MainSlider