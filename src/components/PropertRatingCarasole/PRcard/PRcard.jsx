import React from 'react'
import './PRcard.css'
// import star from './../../../assets/star.svg'
const PRcard = () => {
  return (
    <div className="PRcard">
      <div className="PRcard-row1">
        <img src='https://shorturl.at/fgGJN' alt='pfp'/>
        <div>
            <h5>Name</h5>
            <p>16-jan-2020</p>
        </div>
      </div>
      <div className="PRcard-row2">
        <p>Had a good stay.</p>
            <div>
            {/* <img src={star} alt={'star'}/> */}
            {/* <img src={star} alt={'star'}/> */}
            {/* <img src={star} alt={'star'}/> */}
            {/* <img src={star} alt={'star'}/> */}
            {/* <img src={star} alt={'star'}/> */}
            </div>
        
      </div>
      
    </div>
  )
}

export default PRcard
