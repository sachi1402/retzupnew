import React from "react";
import "./HomeFooter.scss";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


const HomeFooter = () => {
  return (
    <div className="HomeFooter-cont">
      <ul>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Company Details </li>
        <li>Support</li>
      </ul>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_766_6688)">
            <path
              d="M8.48886 15.5915C8.16886 15.5915 7.85775 15.5915 7.53775 15.5915C7.49331 15.5826 7.44886 15.5737 7.41331 15.5648C7.09331 15.5204 6.76442 15.4937 6.45331 15.4226C4.76442 15.0581 3.35109 14.2137 2.23997 12.8893C0.871086 11.2626 0.284419 9.36925 0.488863 7.24481C0.631086 5.74259 1.19109 4.40037 2.15997 3.23592C3.59109 1.50259 5.44886 0.560366 7.70664 0.444811C9.17331 0.373699 10.56 0.711477 11.8222 1.47592C13.8222 2.67592 15.0489 4.42703 15.4755 6.72925C15.5289 6.99592 15.5555 7.27148 15.5911 7.54703C15.5911 7.86703 15.5911 8.17814 15.5911 8.49814C15.5822 8.5337 15.5733 8.56037 15.5644 8.59592C15.4755 9.76037 15.1378 10.8626 14.5333 11.8581C13.3333 13.8315 11.5911 15.0493 9.31553 15.4848C9.03997 15.5293 8.76442 15.5559 8.48886 15.5915ZM14.0711 7.8937C13.9822 4.5337 11.2 1.86703 7.88442 1.95592C4.53331 2.04481 1.86664 4.82703 1.95553 8.14259C2.04442 11.4848 4.83553 14.1604 8.13331 14.0715C11.4933 13.9826 14.16 11.2004 14.0711 7.8937Z"
              fill="black"
            />
            <path
              d="M9.59817 9.61845C9.95372 9.97401 10.3004 10.3207 10.6382 10.6585C10.0071 11.4673 8.55817 12.054 7.08261 11.6896C5.45594 11.2896 4.30928 9.89401 4.22039 8.2229C4.1315 6.52512 5.11817 5.01401 6.6915 4.45401C8.2115 3.9029 9.82928 4.40068 10.6293 5.35179C10.2826 5.69845 9.93594 6.04512 9.58039 6.40068C9.12705 5.91179 8.5315 5.71623 7.86483 5.75179C7.26039 5.77845 6.73594 6.01845 6.31817 6.47179C5.52706 7.3429 5.55372 8.75623 6.36261 9.60957C7.10039 10.374 8.55817 10.6407 9.59817 9.61845Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_766_6688">
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V16H0V4Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        Reztup 2023. All Rights Reserved.
      </p>
      <div className="HomeFooter-icon-cont">
        <p>Social Media</p>
        <FaFacebook/>
        <FaLinkedin/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
    </div>
  );
};

export default HomeFooter;
