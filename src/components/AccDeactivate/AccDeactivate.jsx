import React, { useState } from 'react'
import './AccDeactivate.css'
const AccDeactivate = () => {
    const [showDeactivate, setshowDeactivate] = useState(true);
    const [contnueDeactivate, setcontnueDeactivate] = useState(true);
  return (
    <div className="AccDeactivate">
      <h4>Account</h4>
      <div className='deactivste-btn-cont'>
        <p>Deactivate your account</p>
        {showDeactivate&&<span onClick={()=>setshowDeactivate(e=>!e)}>Deactivate</span>}
      </div>
      {!showDeactivate&&<div className="Acc-deactivate-options">
        <div className="Acc-deactivate-options-row">
            <p>I have safety or privacy concerns.</p>
            <input type="radio" className="Acc-deactivate-options-radio" id="radio-btn" name="radio-btn" />
            <label for="radio-btn"></label>
        </div>
        <div className="Acc-deactivate-options-row">
            <p>I can’t host anymore</p>
            <input type="radio" className="Acc-deactivate-options-radio" id="radio-btn" name="radio-btn" />
            <label for="radio-btn"></label>
        </div>
        <div className="Acc-deactivate-options-row">
            <p>I can’t comply with Reztup’s Terms of Service / Community Commitment.</p>
            <input type="radio" className="Acc-deactivate-options-radio" id="radio-btn" name="radio-btn" />
            <label for="radio-btn"></label>
        </div>
        <div className="Acc-deactivate-options-row">
            <p>Other</p>
            <button  type="" className='Acc-deactivate-continue' onClick={()=>setcontnueDeactivate(e=>!e)} >Continue</button>
        </div>
      </div>}
      {!contnueDeactivate&&<div className='Acc-deactivate-deleteAcc'>
        <h6>Deactivate your account</h6>
        <div className='Acc-deactivate-last-row'>
            <div>
            <p>The profile and listings associated with this account will disappear.</p>
            <p>You won’t be able to access the account info or past reservations.</p>
            </div>
            <button>Delete account</button>
        </div>
      </div>}
    </div>
  )
}

export default AccDeactivate
