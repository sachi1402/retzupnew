import React from 'react'
import './Hoast.css'
import Navbar from '../../components/Navbar2/Navbar'
const Hoast = () => {

    const usedrisc=[{title:'Guest identity verification' ,dsic:'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.'},
    {title:'Guest identity verification' ,dsic:'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.'},
    {title:'Guest identity verification' ,dsic:'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.'},
    {title:'Guest identity verification' ,dsic:'Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.'}]
  return (
    <>
      <Navbar/>
    <div className='Host'>
      <div className='host-hero'>
      <iframe
      id="map"
      frameborder="0"
      src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_ADDRESS"
      allowfullscreen
    ></iframe>
    <div className='host-hero-l'>
        <h2>Reztit up.</h2>
        <div className='host-hero-l-r-2'>
            <p>You could earn</p>
            <div className='host-hero-l-r-2-search-cont'>
                <p>Coimbatore</p>
            </div>
           
        </div>

        <div className='host-hero-l-r-range'>
        <div className="range-slider">
        <input type="range" min={0} max={9}/> </div>
        <p>4500</p>
        </div>
        <div className='host-hero-l-r-3'>
                <h2>₹4,500</h2>
                <p><span>1 night</span> at an estimate ₹ 4,500</p>
            </div>
            <button className='btn-host-hero'>Reztup Setup</button>
    </div>
      </div>

      <div className='host-body'>
        <h2>Reztup it easily with Reztup Setup</h2>
        <div className='host-body-main'>
            <div className='host-body-img-container'>
                <img  className='img-host-bg' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJlL4hoGu17ebgG3hgf0GYtDTIfM6qQAt4WFkw-EBHIvAfS4lj'/>
                <img  className='img-host-bg' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS2PPWpfL-WmIMMM7y3Rsxj3sZ-dB85Tey7XE8_XS0QVBdRFmG7'/>
                <img  className='img-host-main'src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQldS_mZoA1JNrYIZqGoqAyg3TeAyx9zajBcnCUrAEI0ziznnlM' />
                <img className='img-host-bg' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxOC6031z3kG_GU6-3Eb34Lr7WnS-PSvmv0EZFypzI6LT-bb-D'/>
                <img  className='img-host-bg' src='https://images.unsplash.com/photo-1513628508637-a28930f9456f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwaW4lMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                />
            </div>
            <div className='host-body-main-disc-cont'>
                <h4>One-to-one guidance from a Superhost</h4>
                <p>We’ll match you with a Superhost in your area, who’ll guide 
you from your first question to your first guest – by 
phone, video call or chat.</p>
                <h4>An experienced guest for your first booking</h4>
                <p>For your first booking, you can choose to welcome an experienced 
guest who has at least three stays and a good track record 
on Reztup</p>
                <h4>Specialized support from Reztup </h4>
                <p>New Hosts get one-tap access to specially trained Community 
Support agents who can help with everything from account 
issues to billing support.</p>
<span>Ready to get started?</span>
<button>Reztup Setup</button>
            </div>
        </div>
      </div>

     <div className="host-user-disc">
        <div className="host-user-img-cont">
            <p>
            Reztup it with 
            top‑to‑bottom 
            protection
            </p>
            <img/>
        </div>
        <div className="host-user-table">
            <div className="host-user-table-index-r">
                <p>reztup</p>
                <p>Competitors</p>
            </div>
            {usedrisc.map(e=>
            <div className="host-user-table-row">
                <div className="host-user-table-row-col1">
                <h3>{e.title}</h3>
                <p>{e.dsic}</p>
                </div>
                    <svg></svg>
                    <svg></svg>
            </div>)}
            <p>Comparison is based on public information and free offerings by top competitors as of 22/10. 
Find details and exclusions here.</p>
                <button>Learn more</button>
        </div>


     </div>

     <div className="host-info-cont">
        <div className="host-info-l">
            <h3>Reztup it with the help of a 
Superhost near you.</h3>
                <button>
                Chat with a Superhost
                </button>
        </div>
        <div className="host-info-svg-cont">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPpXXlQYzc0Hg_lkCt2UDHThXkGl9CfgiiZvM9z0gtuuRfznT'/>
        </div>
     </div>
    </div>
    </>
  )
}

export default Hoast
