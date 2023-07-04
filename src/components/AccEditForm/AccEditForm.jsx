import React from 'react'
import './AccEditForm.css'
const AccEditForm = () => {
  return (
    <div className='Acc-edit-container'>
      <div className='Acc-edit-title'>
        <div className='Acc-edit-title-pfp'>
            <img src="https://shorturl.at/fgGJN" alt='pfp'/>
            <h1>Hi, I’m Mathan</h1>
        </div>
        <p> joined on 2023</p>
      </div>
      <div className='Acc-edit-form'>
        <form>
        <div className='Acc-edit-row'>
            <div className='Acc-edit-input-cont'>
                <label for="name">Legal name</label>
                <input type="text" id="name" name="name"  className='Acc-edit-InputCont' required />
            </div>
            <div className='Acc-edit-input-cont'>
                <label for="name">Email</label>
                <input type="text" id="name" name="name" className='Acc-edit-InputCont' required />
            </div>
        </div>
        <div className='Acc-edit-row'>
            <div className='Acc-edit-input-cont'>
                <label for="name">Phone</label>
                <input type="text" id="name" name="name" className='Acc-edit-InputCont' required />
            </div>
            <div className='Acc-edit-input-cont'>
                <label for="name">Government ID</label>
                <input type="text" id="name" name="name" className='Acc-edit-InputCont' required />
            </div>
        </div>
        <div className='Acc-edit-row'>
            <div className='Acc-edit-input-cont'>
                <label for="name">Address</label>
                <input type="text" id="name" name="name" className='Acc-edit-InputCont' required />
            </div>
            <div className='Acc-edit-input-cont'>
                <label for="name">Emergency contact </label>
                <input type="text" id="name" name="name"  className='Acc-edit-InputCont' required />
            </div>
            
            
        </div>
        <div className="Acc-edit-row">
          {/* <div className='Acc-edit-save'> */}
            <button className='Acc-edit-submit-button' >Save</button>
          {/* </div> */}
        </div>
        </form>
      </div>
    
    </div>
  )
}

export default AccEditForm
