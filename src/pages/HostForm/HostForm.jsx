import React, { useState } from 'react'
import './HostForm.css'
import Navbar from '../../components/Navbar2/Navbar'
const HostForm = () => {
    const [stepcount, setstepcount] = useState(0);
  return (
    <>
    <Navbar/>
    <div className="started_retzup">
     {(stepcount===0)&& <h1>It’s easy to get started on Reztup</h1>}
      {(stepcount===0)&&<div className="step_cont">
        <div>
            <p className="step-step-count">1</p>
            <h2>tell us about your place</h2>
            <p>Share some basic info, such as where 
it is and how many guests can stay.</p>
        </div>
        <div>
            <p className='step-step-count'>1</p>
            <h2>tell us about your place</h2>
            <p>Share some basic info, such as where 
it is and how many guests can stay.</p>
        </div>
        <div>
            <p className="step-step-count">2</p>
            <h2>tell us about your place</h2>
            <p className="step-step-count-disc">Share some basic info, such as where 
it is and how many guests can stay.</p>
        </div>
      </div>}
      {(stepcount===1)&&<div className="step-1">
        <h1><span>Step-1</span>Tell us about your place</h1>
        <p>In this step, we'll ask you which type of property you have and if guests 
will book the entire place or just a room. Then let us know the location 
and how many guests can stay.</p>
<img src=''/>
      </div>}
      {(stepcount===2)&&<div className="step-1">
        <h1>Tell us about your place</h1>
        <div className="step-2-card-cont">
            <div className="step-2-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
<path id="Vector" d="M54.4961 24.3598C54.4944 24.3585 54.4931 24.3568 54.4918 24.3555L31.646 1.51047C30.6722 0.536248 29.3775 0 28.0003 0C26.6232 0 25.3285 0.536248 24.3543 1.51047L1.52035 24.344C1.51266 24.3516 1.50454 24.3598 1.49728 24.3675C-0.502435 26.3787 -0.499016 29.6419 1.50711 31.648C2.42364 32.565 3.63373 33.0957 4.92798 33.1517C4.98097 33.1568 5.03395 33.1594 5.08736 33.1594H5.99749V49.9715C5.99749 53.2988 8.70479 56.0057 12.0321 56.0057H20.9701C21.8764 56.0057 22.6109 55.2707 22.6109 54.3649V41.1839C22.6109 39.6657 23.8462 38.4308 25.3644 38.4308H30.6363C32.1544 38.4308 33.3893 39.6657 33.3893 41.1839V54.3649C33.3893 55.2707 34.1238 56.0057 35.0301 56.0057H43.9681C47.2958 56.0057 50.0027 53.2988 50.0027 49.9715V33.1594H50.8471C52.2238 33.1594 53.5185 32.6231 54.4931 31.6485C56.5014 29.6393 56.5022 26.3702 54.4961 24.3598ZM52.1725 29.3283C51.8183 29.6825 51.3474 29.8778 50.8471 29.8778H48.3619C47.4557 29.8778 46.7211 30.6123 46.7211 31.5186V49.9715C46.7211 51.4892 45.4863 52.7241 43.9681 52.7241H36.6709V41.1839C36.6709 37.8565 33.964 35.1492 30.6363 35.1492H25.3644C22.0366 35.1492 19.3293 37.8565 19.3293 41.1839V52.7241H12.0321C10.5144 52.7241 9.27907 51.4892 9.27907 49.9715V31.5186C9.27907 30.6123 8.54456 29.8778 7.63828 29.8778H5.19589C5.17026 29.8761 5.14505 29.8748 5.11898 29.8744C4.63016 29.8658 4.17168 29.6718 3.82814 29.3279C3.09748 28.5972 3.09748 27.408 3.82814 26.677C3.82857 26.677 3.82857 26.6765 3.829 26.6761L3.83028 26.6748L26.6753 3.83065C27.0291 3.47643 27.4995 3.28158 28.0003 3.28158C28.5007 3.28158 28.9711 3.47643 29.3253 3.83065L52.1652 26.6701C52.1687 26.6735 52.1725 26.677 52.1759 26.6804C52.9027 27.4123 52.9015 28.5989 52.1725 29.3283Z" fill="black"/>
</svg>
                <h3>An entire place</h3>
                <p>Guests have the whole
place to themselves</p>
            </div>
            <div className="step-2-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
<path id="Vector" d="M54.4961 24.3598C54.4944 24.3585 54.4931 24.3568 54.4918 24.3555L31.646 1.51047C30.6722 0.536248 29.3775 0 28.0003 0C26.6232 0 25.3285 0.536248 24.3543 1.51047L1.52035 24.344C1.51266 24.3516 1.50454 24.3598 1.49728 24.3675C-0.502435 26.3787 -0.499016 29.6419 1.50711 31.648C2.42364 32.565 3.63373 33.0957 4.92798 33.1517C4.98097 33.1568 5.03395 33.1594 5.08736 33.1594H5.99749V49.9715C5.99749 53.2988 8.70479 56.0057 12.0321 56.0057H20.9701C21.8764 56.0057 22.6109 55.2707 22.6109 54.3649V41.1839C22.6109 39.6657 23.8462 38.4308 25.3644 38.4308H30.6363C32.1544 38.4308 33.3893 39.6657 33.3893 41.1839V54.3649C33.3893 55.2707 34.1238 56.0057 35.0301 56.0057H43.9681C47.2958 56.0057 50.0027 53.2988 50.0027 49.9715V33.1594H50.8471C52.2238 33.1594 53.5185 32.6231 54.4931 31.6485C56.5014 29.6393 56.5022 26.3702 54.4961 24.3598ZM52.1725 29.3283C51.8183 29.6825 51.3474 29.8778 50.8471 29.8778H48.3619C47.4557 29.8778 46.7211 30.6123 46.7211 31.5186V49.9715C46.7211 51.4892 45.4863 52.7241 43.9681 52.7241H36.6709V41.1839C36.6709 37.8565 33.964 35.1492 30.6363 35.1492H25.3644C22.0366 35.1492 19.3293 37.8565 19.3293 41.1839V52.7241H12.0321C10.5144 52.7241 9.27907 51.4892 9.27907 49.9715V31.5186C9.27907 30.6123 8.54456 29.8778 7.63828 29.8778H5.19589C5.17026 29.8761 5.14505 29.8748 5.11898 29.8744C4.63016 29.8658 4.17168 29.6718 3.82814 29.3279C3.09748 28.5972 3.09748 27.408 3.82814 26.677C3.82857 26.677 3.82857 26.6765 3.829 26.6761L3.83028 26.6748L26.6753 3.83065C27.0291 3.47643 27.4995 3.28158 28.0003 3.28158C28.5007 3.28158 28.9711 3.47643 29.3253 3.83065L52.1652 26.6701C52.1687 26.6735 52.1725 26.677 52.1759 26.6804C52.9027 27.4123 52.9015 28.5989 52.1725 29.3283Z" fill="black"/>
</svg>
                <h3>An entire place</h3>
                <p>Guests have the whole
place to themselves</p>
            </div>
            <div className="step-2-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="57" viewBox="0 0 56 57" fill="none">
<path id="Vector" d="M54.4961 24.3598C54.4944 24.3585 54.4931 24.3568 54.4918 24.3555L31.646 1.51047C30.6722 0.536248 29.3775 0 28.0003 0C26.6232 0 25.3285 0.536248 24.3543 1.51047L1.52035 24.344C1.51266 24.3516 1.50454 24.3598 1.49728 24.3675C-0.502435 26.3787 -0.499016 29.6419 1.50711 31.648C2.42364 32.565 3.63373 33.0957 4.92798 33.1517C4.98097 33.1568 5.03395 33.1594 5.08736 33.1594H5.99749V49.9715C5.99749 53.2988 8.70479 56.0057 12.0321 56.0057H20.9701C21.8764 56.0057 22.6109 55.2707 22.6109 54.3649V41.1839C22.6109 39.6657 23.8462 38.4308 25.3644 38.4308H30.6363C32.1544 38.4308 33.3893 39.6657 33.3893 41.1839V54.3649C33.3893 55.2707 34.1238 56.0057 35.0301 56.0057H43.9681C47.2958 56.0057 50.0027 53.2988 50.0027 49.9715V33.1594H50.8471C52.2238 33.1594 53.5185 32.6231 54.4931 31.6485C56.5014 29.6393 56.5022 26.3702 54.4961 24.3598ZM52.1725 29.3283C51.8183 29.6825 51.3474 29.8778 50.8471 29.8778H48.3619C47.4557 29.8778 46.7211 30.6123 46.7211 31.5186V49.9715C46.7211 51.4892 45.4863 52.7241 43.9681 52.7241H36.6709V41.1839C36.6709 37.8565 33.964 35.1492 30.6363 35.1492H25.3644C22.0366 35.1492 19.3293 37.8565 19.3293 41.1839V52.7241H12.0321C10.5144 52.7241 9.27907 51.4892 9.27907 49.9715V31.5186C9.27907 30.6123 8.54456 29.8778 7.63828 29.8778H5.19589C5.17026 29.8761 5.14505 29.8748 5.11898 29.8744C4.63016 29.8658 4.17168 29.6718 3.82814 29.3279C3.09748 28.5972 3.09748 27.408 3.82814 26.677C3.82857 26.677 3.82857 26.6765 3.829 26.6761L3.83028 26.6748L26.6753 3.83065C27.0291 3.47643 27.4995 3.28158 28.0003 3.28158C28.5007 3.28158 28.9711 3.47643 29.3253 3.83065L52.1652 26.6701C52.1687 26.6735 52.1725 26.677 52.1759 26.6804C52.9027 27.4123 52.9015 28.5989 52.1725 29.3283Z" fill="black"/>
</svg>
                <h3>An entire place</h3>
                <p>Guests have the whole
place to themselves</p>
            </div>
        </div>
      </div>}
      {(stepcount===3)&&<div className="step-3">
        <h1>Where’s your place located?</h1>
        <p>Your adress is only shared with guests after they’ve made a reservation</p>
        <div className="step-3-search-cont">
            <svg></svg>
            <input className="step-3-search-input" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>

        </div>
        <iframe
      id="map"
      frameborder="0"

      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_LOCATION"
      allowfullscreen
    ></iframe>
      </div>}
      {(stepcount===4)&&<div className="step-3">
        <h1>Confirm your address</h1>
        <p>Your address in only shared with guests after they’ve made a reservation</p>
        <div className="step-4-form-cont">
            <form className="step-4-form">  
            <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <fieldset>
    <legend>Country/Region</legend>
    <input 
           type="text" 
           name="pseudo"     
           placeholder="Name"
           data-rule-required="true"
           data-msg-required="Le champ Pseudo est requis."
    />
    <span data-valmsg-for="pseudo" data-valmsg-replace="true"></span>
  </fieldset>
  <div className='step-4-form-map-cont'>
              <h1>Show your specific location</h1>
              <p>Make it clear to guests where your place is located. We'll only share your address 
after they've made a reservation. Learn more</p>

<iframe
      id="map"
      frameborder="0"

      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_LOCATION"
      allowfullscreen
    ></iframe>
  </div>
 </form>
            
        </div>
        </div>}

        {(stepcount===5)&&<div className="step-3">
        <h1>Is the pin in the right spot?</h1>
        <p>Your address is only shared with guests after they've made a reservation.</p>
        <div className="step-5-map-cont">
        <iframe
    id="map"
    width="600"
    height="450"
    frameborder="0" style={{border:0}}
    src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA">
  </iframe>
  
        </div>
        </div>}
        {(stepcount===6)&&<div className="step-3">
        <h1>Share some basics about your place</h1>
        <p>You'll add more details later, such as bed types.</p>
        <div className="step-6-form-cont">
          <form>
            <div className="step-6-input-cont">
              <p> Guests</p>
              <div>
              <h1>-</h1>
              <h2>5</h2>
              <h1>+</h1>
              </div>
            </div>
            <div className="step-6-input-cont">
              <p> Guests</p>
              <div>
              <h1>-</h1>
              <h2>5</h2>
              <h1>+</h1>
              </div>
            </div>
            <div className="step-6-input-cont">
              <p> Guests</p>
              <div>
              <h1>-</h1>
              <h2>5</h2>
              <h1>+</h1>
              </div>
            </div>
            <div className="step-6-input-cont">
              <p> Guests</p>
              <div>
              <h1>-</h1>
              <h2>5</h2>
              <h1>+</h1>
              </div>
            </div>
          </form>
        </div>
        </div>}
      <div className="stated-step-btn-cont">
        <p onClick={()=>setstepcount(e=>e-1)}>Back</p>
        {(stepcount>0)&&<span className="step_count">Step {stepcount}/<b>6</b></span>}
        <button onClick={()=>setstepcount(e=>e+1)}>Next</button>
      </div>
    </div>
    </>
  )
}

export default HostForm
