import React from 'react'
import './Accounts.css'
// import '../../components/Nav/Navbar'
import AccCard from './../../components/AccCard/AccCard'

import 'typeface-roboto';
import AccDiscription from '../../components/AccDiscription/AccDiscription';
import AccEditForm from '../../components/AccEditForm/AccEditForm';
import AccLoginSecuraty from '../../components/AccLogin&Securaty/AccLoginSecuraty';
import Nav from '../../components/Navbar2/Navbar';
import AccPayout from '../../components/AccPayout/AccPayout';

const Accounts = () => {
  let data='pay'
  // let data='Edit'
  // let data='login'
  
  return (
    <>
    {/* <div style={{'height':'100px' ,'width':'100vw','background':'red' }}>   */}
    
    <Nav/>
    {/* </div> */}
    <div className="acc-container"> 
    <h2 id='acc-title'>Account</h2>
    <div className="acc-layout-container">
        <AccCard/>
        <div className="acc-left">
            <div className="acc-Main">
                {data==='Edit'&& <AccEditForm/> }
                { data ==='login'&&<AccLoginSecuraty/> }
                {data==='pay'&&<AccPayout/>}
            </div>
            {data==='Edit'&&<AccDiscription/>}
        </div>
        </div>
    </div>
    </>
  )
}

export default Accounts
