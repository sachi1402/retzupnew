import React, { useState } from 'react'
import './HostFormStep3.css'
import Navbar from '../../../components/Navbar2/Navbar';

const HostFormStep3 = () => {
    const [stepcount, setstepcount] = useState(1);
    const [griditmstp2, setgriditmstp2] = useState(['WiFi','TV','Kitchen','Washing machine','Free parking on premises','Paid parking on premises','Air conditioning','Dedicated workspace','Pool','Hot tub','Patio']);
    const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const imageFile = event.dataTransfer.files[0];
    setSelectedImage(imageFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  
    return (
    <>
    <Navbar/>
    <div className="step3" >
      {(stepcount===1)&&<div className="step2-1">
        <h1><span>Step-3</span> Finish up and publish</h1>
        <p>Finally, you’ll choose if you'd like to start with an experienced guest, 
then you'll set your nightly price. Answer a few quick questions 
and publish when you're ready.</p>
<img src=''/>
      </div>}
      {(stepcount===2)&&<div className="step2-1">
        <h1>Choose who to welcome for your 
first reservation</h1>
        <p>After your first guest anyone can book your place. Learn more</p>
        <div className="step3-2-flex-cont">
            <div className="step3-2-card">
              <h2>Any Reztup guest</h2>
              <p>Get reservations faster when you
welcome anyone from the 
Reztup community.</p>
            </div>
        </div>
        </div>}
        {(stepcount===3)&&<div className="step2-1">
            <h1>Add some photos of your house</h1>
            <p>You'll need 5 photos to get started. You can add more or make changes later.</p>
            <div
      className="image-uploader"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selectedImage ? (
        <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" />
      ) : (
        <div className="upload-placeholder">Drag and drop an image here</div>
      )}
    </div>
            </div>}
            {(stepcount===4)&&  <div className="step2-1">
            <h1>Now, let’s give your house title</h1>
            <p>Short titles work best. Have fun with it - you can always change it later.</p>
            <textarea class="step2-4-input" 
                
            />
            
            </div>}
            
      {(stepcount===5)&&<div className="step2-1">
        <h1>Next, let's describe your house</h1>
        <p>Choose up to 2 highlights. We'll use these to get your description started.</p>
        <div className="step2-5-grid-cont">
            {griditmstp2.slice(3,9).map(e=><div className="step2-5-grid-item">{e}</div>)}
        </div>
        </div>}
        {(stepcount===6)&&<div className="step2-1">
            <h1>Create your description</h1>
            <p>Share what makes your place special.</p>
            <textarea class="step2-4-input"
            placeholder='Youll have a great time at this comfortable place to stay.' 
                
            />
            
            </div>}
        
      {(stepcount===7)&&<div className="step2-7-1">
        <h1>Things to know</h1>
        <p>Add your house rules.<button>Add</button></p>
        <div className="step2-5-grid-cont">
            {griditmstp2.slice(6,9).map(e=><div className="step2-5-grid-item">{e}</div>)}
        </div>
        </div>}
      {/* footerrr */}
      <div className="stated-step2-btn-cont">
        <p onClick={()=>setstepcount(e=>e-1)}>Back</p>
        {(stepcount>0)&&<span className="step_count">Step {stepcount}/<b>7</b></span>}
        <button onClick={()=>setstepcount(e=>e+1)}>Next</button>
      </div>
    </div>
    </>
  )
}

export default HostFormStep3
