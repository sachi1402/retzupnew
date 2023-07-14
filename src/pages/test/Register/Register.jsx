import React, { useState } from "react";
// import "./Login.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from "../../Assets/Images/logo.png";
// import banner from "../../Assets/Images/login.png";
// import './../Login/Login'
import './LoginR.scss'
import { useNavigate } from "react-router-dom";



// import {  AiFillApple, AiFillGoogle } from 'react-icons/ai';
// import { IoMdMail, IoIosCall } from 'react-icons/io';

import { BsApple } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from "react-icons/fc";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope ,FaPhone} from 'react-icons/fa';
// import { FaApple, FaEnvelope } from "react-icons/fa";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      first_name: firstName,
      last_name: lastName,
      dob,
      email,
      mobile_number: mobileNumber,
      password,
    };

    console.log(userData);

    fetch("https://api.reztup.com/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration successful", response);
          Navigate("/login");
          // Perform necessary actions after successful registration
        } else {
          console.log("Registration failed");
          // Handle registration failure
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
const [selectedMethod, setselectedMethod] = useState('email');
  return (
    <div className="Signup-main">
      <div className="Signup-l">
        <h1 className="Signup-logo-m">Retzup</h1>
        <div className="Signup-l-main-cont">
          <h1>Sign up to Reztup</h1>
          
        <p className='or-2-Signup'></p>
        <div className='Signup-form'>
         {(selectedMethod==="email" )?<>
        <input type="email"  placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="email"  placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email"  placeholder="Date of birth" value={dob} onChange={(e) => setDob(e.target.value)} />
        <input type="email"  placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="email"  placeholder="Phone No"  value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </>: <input type="number"  placeholder="Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} />
}
        <button  className="Signup-btn" onSubmit={handleSubmit}>Sign Up</button>
        </div>
        <p>or</p>
          <div className="Signup-icon-cont">
            <FaPhone className={(selectedMethod==="mobile")?"Signup-icon-select":"Signup-icon"}   onClick={()=>setSelectedMethod("mobile")}/>
            <BsApple className='Signup-icon'/>
            <FcGoogle className='Signup-icon'/>
            <FaFacebook className='Signup-icon'/>
            <FaEnvelope className={(selectedMethod==="email")?"Signup-icon-select":"Signup-icon"} onClick={()=>setSelectedMethod("email")}/>
            
          </div>
      <button className='Signup-signup'>Create Account</button>
      </div>
      </div>
      <div className="Signup-r">
      <h1>Log In ?</h1>
      <p>Alrady have an Account</p>
      <button onClick={() => navigate('/')}>Login to account</button>
      </div>

    </div>
  );
};

export default Register;
