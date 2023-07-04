import React, { useState } from 'react'
import './AccLoginSecuraty.css'
import AccDeactivate from '../AccDeactivate/AccDeactivate';

function AccLoginSecuraty() {
  const [row, setrow] = useState([{title: 'Login' , subtitle: 'password',update:'last updated 2 days ago',left:'Update'},{title: 'Social accounts' , subtitle: 'Facebook',update:'last updated 2 days ago',left:'Connect'},{title: null , subtitle: 'Instagram',update:'last updated 2 days ago',left:'Connect'},{title: null , subtitle: 'Linkedin',update:'last updated 2 days ago',left:'Connect'},{title: null , subtitle: 'password',update:'Not connected',left:'Connect'},{title: null , subtitle: 'Google ',update:'Not connected',left:'Connect'}]);
  return (
    <div className="AccLogin">
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
<g id="lock">
<path id="Vector" d="M26.25 16.25V11.25C26.25 5.03625 21.2138 0 15 0C8.78625 0 3.75 5.03625 3.75 11.25V16.25C1.67875 16.25 0 17.9288 0 20V23.75V25V27.5V28.75C0 34.9638 5.03625 40 11.25 40H18.75C24.9638 40 30 34.9638 30 28.75V27.5V25V23.75V20C30 17.9275 28.32 16.25 26.25 16.25ZM6.25 11.25C6.25 6.4175 10.1675 2.5 15 2.5C19.8325 2.5 23.75 6.4175 23.75 11.25V16.25H21.25V11.2525C21.25 7.8 18.4525 5.0025 15 5.0025C11.5475 5.0025 8.75 7.8 8.75 11.2525V16.25H6.25V11.25ZM20 11.25V11.2538V16.25H10V11.2525V11.25C10 8.48875 12.2387 6.25 15 6.25C17.7613 6.25 20 8.48875 20 11.25ZM27.5 23.75V25V27.5V28.75C27.5 33.5737 23.5737 37.5 18.75 37.5H11.25C6.42625 37.5 2.5 33.5737 2.5 28.75V27.5V25V23.75V20C2.5 19.31 3.06 18.75 3.75 18.75C4.58375 18.75 5.41625 18.75 6.25 18.75H23.75C24.5825 18.75 25.415 18.75 26.25 18.75C26.9387 18.75 27.5 19.31 27.5 20V23.75Z" fill="#F1450E"/>
<path id="Vector_2" d="M15 23.75C13.62 23.75 12.5 24.8687 12.5 26.25C12.5 27.0087 12.9162 28.45 13.3337 29.59C13.6737 30.5175 14.1013 31.2475 15 31.2475C15.9775 31.2475 16.3262 30.525 16.6675 29.6025C17.09 28.46 17.5 27.0113 17.5 26.25C17.5 24.8687 16.38 23.75 15 23.75Z" fill="#F1450E"/>
</g>
      </svg> &nbsp;Login & security</h1>

    <div className='Login-row'>
      {row.map(e=>
      <div className='Login-sec-card'>
        {e.title!==null &&<h3>{e.title}</h3>}
        <div>
          <div className='subtitlecom'>
           <h4> {e.subtitle}</h4>
            <p>{e.update}</p>
          </div>
          <h6>{e.left}</h6>
        </div> 
      </div>)}
    </div>
    <AccDeactivate/>
    </div>
  )
}

export default AccLoginSecuraty
