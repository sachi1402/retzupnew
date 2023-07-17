import React from 'react'
import './PropertyImageCarasole.scss'
const PropertyImageCarasole = ({img1,img2,img3,img4}) => {
  return (
    <div className='Property-Image-cont' >
    <div className='Property-Image-cont-img'>
      <img className='Property-Image-main' src={'https://picsum.photos/500/302'} alt={'photo'}/>
      <div className='Property-Image-side'>
        <img src={'https://picsum.photos/500/404'} alt={'sid'}/>
        <img src={'https://picsum.photos/200/804'} className='last-t'alt={'sid'}/>
        <img src={'https://picsum.photos/600/704'} alt={'sid'}/>
        <img src={'https://picsum.photos/700/604'} className='last-img' alt={'sid'}/>
      </div>
    </div>
    <p>12 guests · 3 bedrooms ·3 bedrooms</p>
    </div>
  )
}

export default PropertyImageCarasole
