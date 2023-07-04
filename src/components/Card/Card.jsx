import React from 'react';
import './Card.scss';
import { BsFillFlagFill } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { RiStarFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
function Card({ id,img, loc, orignalprice, rating, discountedprice, Noreview, title, comment }) {
  const Navigate  = useNavigate();

  const handleClick = (id) => {
    // Redirect to /propertydetails with additional query parameters
    console.log('soo',id)
    Navigate(`/Propertydetails?id=${id}`);
  };

  return (
    <div className="card" onClick={()=>handleClick(id)}>
      <img src={img} alt={title} className="card-img"/>
      <h1 className="card-title-txt">{title}</h1>
      <div className="card-row">
        <p className="card-loc" >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
<path id="Vector" d="M6.41667 0C2.87375 0 0 2.87375 0 6.41667C0 11.2292 6.41667 18.3333 6.41667 18.3333C6.41667 18.3333 12.8333 11.2292 12.8333 6.41667C12.8333 2.87375 9.95958 0 6.41667 0ZM6.41667 8.70833C5.15167 8.70833 4.125 7.68167 4.125 6.41667C4.125 5.15167 5.15167 4.125 6.41667 4.125C7.68167 4.125 8.70833 5.15167 8.70833 6.41667C8.70833 7.68167 7.68167 8.70833 6.41667 8.70833Z" fill="#505050"/>
</svg>
          {loc}</p>
        <p className='card-disc-prce'>{discountedprice}</p>
      </div>
      <div className="card-row">
        <div className="card-row-star-cont">
          <div className="card-row-star">
          {Array.from({ length: 4 }, (_, index) => (
            <svg  key={index}xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <g id="star 4" clip-path="url(#clip0_660_7605)">
            <g id="star">
            <path id="Vector" d="M11.6094 5.2618L9.22583 7.58526L9.78871 10.8669C9.8132 11.0104 9.75427 11.1554 9.63642 11.2411C9.56984 11.2897 9.49063 11.3142 9.41142 11.3142C9.35058 11.3142 9.28935 11.2997 9.23348 11.2702L6.2863 9.72084L3.3395 11.2698C3.21093 11.3379 3.05443 11.3268 2.93657 11.2407C2.81871 11.155 2.75978 11.01 2.78427 10.8665L3.34715 7.58488L0.963235 5.2618C0.859154 5.16001 0.821271 5.00772 0.866424 4.86958C0.911577 4.73144 1.03135 4.63004 1.17561 4.60899L4.46986 4.13068L5.94306 1.14523C6.07202 0.883881 6.50059 0.883881 6.62954 1.14523L8.10275 4.13068L11.397 4.60899C11.5413 4.63004 11.661 4.73106 11.7062 4.86958C11.7513 5.0081 11.7134 5.15963 11.6094 5.2618Z" fill="#F79D00"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_660_7605">
            <rect width="12.2449" height="12.2449" fill="white" transform="translate(0.162109)"/>
            </clipPath>
            </defs>
            </svg>
      ))}
          </div>
          <p className='card-rating-text'>{rating}</p>
        </div>
        <p className='card-rating-r-txt'>After discount</p>
      </div>
      <div className="card-row">
        <p className='card-review-txt'><span>Very Good</span> {Noreview}&nbsp;reviews</p>
        <h2 className="card-orgnal-price">₹{orignalprice}</h2>
      </div>
    </div>
  );
}

export default Card;
