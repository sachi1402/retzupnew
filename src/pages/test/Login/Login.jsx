import React, { useState } from 'react';
import "../Login/Login.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { login } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import logo from "./../../Assets/Images/logo.png";
// import banner from "./../../Assets/Images/login.png";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope } from 'react-icons/fa';
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
    <section className="Login-contender">
      {/* <div className="Login-box"> */}
      <div className="Login-orange">
        <div className="Login-Right-cont container p-4">
          <div className="form-container">
            <form className='login-form'>
              {/* <img src={logo} alt=""  className="login-logo" /> */}
              <h1 className="login-logo" >reztup</h1>
              <h3 className="login-title" >Log in or sign up to Reztup</h3>
              <div className='input-cont  container  '>
              <div className='container d-flex justify-content-evenly'>
                <div className="EmailOrMobile container  col">
                  <div className={`emailCont ${selectedMethod === 'email' ? 'selected' : ''}`}>
                    <a id="email" onClick={() => handleMethodSelection('email')}>
                      <h6 className="emailtext">Email Address</h6>
                    </a>
                  </div>
                  <div className={` MobleCont ${selectedMethod === 'mobile' ? 'selected' : ''}` }>
                    <a href="#" id="mobile" onClick={() => handleMethodSelection('mobile')}>
                      <h6 className="pwdtext" >Mobile</h6>
                    </a>
                  </div> 
              </div>
                </div>

                {selectedMethod === 'email' && (
                  <>

                    <div className="login-form-input-cont ">
                      <input type="email" id="form2Example18" className="Login-email-input form-control form-control-lg" placeholder="Email Address" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login-form-input-cont">
                      <input type="password" id="form2Example28" className="Login-pwd-input  form-control form-control-lg" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="login-form-input-cont">
                      <button style={{ width: '100%', background: '#F1450E', color: '#fff' }} className="Login-btn" type="button"
                        onClick={loginHandler}>Log in</button>

                      <div className="login-form-fp">
                        <p className="login-forgotpass" onClick={() => console.log("navigate('/forgotpass')")}>Forgot your password?</p>
                      </div>
                    </div>
                    <div className="login-form-input-cont">
                      <button className="Login-register-btn" type="button" onClick={() => navigate('/register')}>Create an Account</button>
                      <div className='orline'>or</div>
                    </div>
                  </>

                )}

                {selectedMethod === 'mobile' && (
                  <>
                    <div className="login-form-input-cont">
                      <input
                        type="tel"
                        id="form2Example18"
                        className="Login-email-input  form-control form-control-lg"
                        placeholder="Phone Number"
                        value={mobile}
                        onChange={handleMobileChange}
                      />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="login-form-input-cont">
                      <button style={{ width: '100%', background: '#F1450E', color: '#fff' }} className="Login-btn" type="button"
                        onClick={loginHandler}>Log in</button>

                      <div className="login-form-fp">
                        <p className="login-forgotpass" onClick={() => console.log("navigate('/forgotpass')")}>Forgot your password?</p>
                      </div>
                    </div>
                    <div className="login-form-input-cont">
                      <button className="Login-register-btn " type="button" onClick={() => navigate('/register')}>Create an Account</button>
                      <div className='orline'>or</div>
                    </div>
                  </>
                )}


              </div>
            </form>
            <div className='input-cont'>


              <div className='icon-cont container  '>
                <div className='col-3 '>
                  <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='googlr'/>
                </div>
                <div className='col-3'>
                <img src='data:image/png;base64,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'alt='twitter logo'/>
                </div>
                <div className='col-3'>
                  <img src="/facebook icon.png" alt="" />
                </div>
                <div className='col-3'>
                  <FaEnvelope />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div style={{ background: '#FF5923' , 'width':'55vw'}} className="Login-Left-img-cont">
          {/* <img src={banner} alt="Banner image" className="w-100 vh-100" /> */}
          <img src="https://wallpaperaccess.com/full/2690549.jpg" alt="Banner image" className="w-90 vh-100  " style={{'border-radius':'50px'}} />
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;
