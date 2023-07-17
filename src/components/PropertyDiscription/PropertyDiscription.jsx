import React, { useState } from 'react'
import './PropertyDiscription.css'
import share from './../../assets/share.png'
import mark from './../../assets/Mask group.png'
import { FaShareSquare } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';

const PropertyDiscription = () => {
    const [desctxt, setdesctxt] = useState("Everest Sherpa Resort welcomes you to your home away from home in comfort and luxury amidst the stunning natural beauty of the Khumbu Himalaya. Allow us to welcome and pamper you after a tiring trek with our friendly Sherpa hospitality with delicious home cooked local an intl. delicacies. At ESR we go one step further than just offering the best hospitality; we also make sure our resort complies with sustainable tourism practices.We offer 22 well apointed rooms");
    const [showFullDescription, setShowFullDescription] = useState(false);


    let desctxtshortent=(txt)=>{

      const words = txt.split(' ');
    const shortenedText = words.slice(0, 20).join(' ');

    return shortenedText;
  };

  const handleShowMore = () => {
    setShowFullDescription(e=>!e);
    }
  return (
    <div className="Property-discription">
    <div className='Property-discription-title'>
      <h1>Jannat 100% Pet Friendly Pool villa with  Lake View</h1>
      <div>
      <FaShareSquare color='black'/>| <BsBookmark color='black'/>
        {/* <img src={mark}/> */}
        
      </div>
    </div>
    <div className="Property-discription-loaction">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="pin 1">
<g id="Group">
<g id="Group_2">
<path id="Vector" d="M12 0C7.58889 0 4 3.58889 4 8.00002C4 9.32423 4.33108 10.6372 4.96047 11.8018L11.5625 23.7422C11.6504 23.9014 11.8179 24 12 24C12.1821 24 12.3496 23.9014 12.4375 23.7422L19.042 11.7978C19.669 10.6372 20 9.32419 20 7.99997C20 3.58889 16.4111 0 12 0ZM12 12C9.79445 12 8.00003 10.2056 8.00003 8.00002C8.00003 5.79445 9.79445 4.00003 12 4.00003C14.2056 4.00003 16 5.79445 16 8.00002C16 10.2056 14.2056 12 12 12Z" fill="#999999"/>
</g>
</g>
</g>
    </svg> Pimplad Nasik, Maharashtra, India
    </div>
    {/* <div className='Property-discription-disc'>{desctxtshortent("Everest Sherpa Resort welcomes you to your home away from home in comfort and luxury amidst the stunning natural beauty of the Khumbu Himalaya. Allow us to welcome and pamper you after a tiring trek with our friendly Sherpa hospitality with delicious home cooked local an intl. delicacies. At ESR we go one step further than just offering the best hospitality; we also make sure our resort complies with sustainable tourism practices.We offer 22 well apointed rooms")} */}
    {/* </div> */}
    {showFullDescription ? (
        <div>
          <p>{desctxt}</p>
          <u onClick={handleShowMore}>Show less</u>
        </div>
      ) : (
        <div>
          <p>{desctxtshortent(desctxt)+"  ..."}</p>
          <u onClick={handleShowMore}>Show more</u>
        </div>
      )}
{/* <hr/> */}
  </div>
  )
}

export default PropertyDiscription
