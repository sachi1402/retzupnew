import React from 'react'
import './PropertyRating.css'
// import star from './Star.svg'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

        
const PropertyRating = () => {
  return (
    <div className='propertyRating'>
      <div className='propertyRating-l'>
        <div>
        {/* <img src={star} alt={'star'}/>
        <img src={star} alt={'star'}/>
        <img src={star} alt={'star'}/>
        <img src={star} alt={'star'}/> */}
        <AiFillStar size={24} color="gold" />
        <AiFillStar size={24} color="gold" />
        <AiFillStar size={24} color="gold" />
        <AiOutlineStar size={24} color="gold" />
        


        </div>
        <p>Show all 47 Reviews</p>
      </div>
      <div className='propertyRating-r'>
        <h4>4.5</h4>
        <p>Review score</p>
      </div>
     
    </div>
  )
}

export default PropertyRating
