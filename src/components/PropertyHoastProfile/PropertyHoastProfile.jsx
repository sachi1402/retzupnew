import React, { useState } from 'react'
import './PropertyHoastProfile.css'
const PropertyHoastProfile = () => {
    const [show, setshow] = useState(true);
  return (
    <div className='property-hoast-comp'>
      <div className='property-hoast-title'>
        <h4>Thinks to know</h4>
        {/* <img alt='arr'/> */}
        {show?<svg onClick={()=>setshow(e=>!e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="down 5">
<g id="16">
<path id="Vector" d="M12.0041 16.0041C11.8725 16.0049 11.742 15.9796 11.6202 15.9299C11.4983 15.8801 11.3875 15.8068 11.2941 15.7141L5.29409 9.71409C5.10579 9.52579 5 9.27039 5 9.00409C5 8.73779 5.10579 8.4824 5.29409 8.29409C5.4824 8.10579 5.73779 8 6.00409 8C6.27039 8 6.52579 8.10579 6.71409 8.29409L12.0041 13.5941L17.2941 8.30409C17.4854 8.14027 17.7315 8.05466 17.9831 8.06438C18.2348 8.0741 18.4736 8.17843 18.6517 8.35653C18.8297 8.53462 18.9341 8.77336 18.9438 9.02504C18.9535 9.27671 18.8679 9.52279 18.7041 9.71409L12.7041 15.7141C12.5178 15.8988 12.2664 16.003 12.0041 16.0041Z" fill="black"/>
</g>
</g>
        </svg>:
        <svg  onClick={()=>setshow(e=>!e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="down 1">
<g id="16">
<path id="Vector" d="M11.9363 5.99591C12.0679 5.99515 12.1984 6.02037 12.3202 6.07014C12.4421 6.1199 12.5529 6.19323 12.6463 6.28591L18.6463 12.2859C18.8346 12.4742 18.9404 12.7296 18.9404 12.9959C18.9404 13.2622 18.8346 13.5176 18.6463 13.7059C18.458 13.8942 18.2026 14 17.9363 14C17.67 14 17.4146 13.8942 17.2263 13.7059L11.9363 8.40591L6.64634 13.6959C6.45504 13.8597 6.20896 13.9453 5.95728 13.9356C5.70561 13.9259 5.46687 13.8216 5.28877 13.6435C5.11068 13.4654 5.00635 13.2266 4.99663 12.975C4.98691 12.7233 5.07251 12.4772 5.23634 12.2859L11.2363 6.28591C11.4226 6.10116 11.674 5.99701 11.9363 5.99591Z" fill="black"/>
</g>
</g>
        </svg>}
      </div>
      {
        show&&<div className='property-hoast-disc'>
        <div className='property-hoast-dic-l'>
            <p>House rules </p>
            <p>Check-in after 2:00 pm</p>
            <p>Check-in after 2:00 pm</p>
            <p>Check-in after 2:00 pm</p>
            <p className='showmore'>Show More</p>
        </div>
        <div className='property-hoast-dic-r'>
        <p>House rules </p>
            <p>Check-in after 2:00 pm</p>
            <p>Carbon monoxide alarm not reported</p>
            <p>Smoke alarm not reported</p>
            <p className='showmore'>Show More</p>
        </div>
      </div>}
    </div>
  )
}

export default PropertyHoastProfile
