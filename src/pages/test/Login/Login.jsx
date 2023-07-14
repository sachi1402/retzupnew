import React, { useState } from 'react';
import "../Login/Login.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { login } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import logo from "./../../Assets/Images/logo.png";
// // import banner from "./../../Assets/Images/login.png";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope ,FaPhone} from 'react-icons/fa';


// import {  AiFillApple, AiFillGoogle } from 'react-icons/ai';
// import { IoMdMail, IoIosCall } from 'react-icons/io';

import { BsApple } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [mobile, setMobile] = useState("");


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async () => {
    try {
      let loginData = {
        email,
        password
      };
      console.log(loginData.email);
      if (selectedMethod === "mobile") {
        loginData = {
          mobile
        };
      }

      const response = await axios.post("https://api.reztup.com/api/login", loginData);
      const { token } = response.data;
      dispatch(login(token));
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
      console.log("Error:", err);
    }
  };
  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };


  return (
    <div className="login-main">
      <div className="login-l">
        <h1 className="login-logo-m">Retzup</h1>
        <div className="login-l-main-cont">
          <h1>Log in to Reztup</h1>
          <p>or</p>
          <div className="login-icon-cont">
            <FaPhone className={(selectedMethod==="mobile")?"login-icon-select":"login-icon"}   onClick={()=>setSelectedMethod("mobile")}/>
            <BsApple className='login-icon'/>
            <FcGoogle className='login-icon'/>
            <FaFacebook className='login-icon'/>
            <FaEnvelope className={(selectedMethod==="email")?"login-icon-select":"login-icon"} onClick={()=>setSelectedMethod("email")}/>
            
          </div>
        <p className='or-2-login'>or</p>
        <div className='login-form'>
         {(selectedMethod==="email" )?<>
        <input type="email"  placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </>: <input type="number"  placeholder="Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} />
}
        <button  className="Login-btn" onClick={loginHandler}>Log in</button>
        </div>
      <button className='Login-signup' onClick={() => navigate('/register')}>Create Account</button>
      </div>
      </div>
      <div className="login-r">
      <h1>New Here ?</h1>
      <p>Sign up and discover Retzup</p>
      <button onClick={() => navigate('/register')}>Create account</button>
      </div>

    </div>
  );
};

export default Login;
