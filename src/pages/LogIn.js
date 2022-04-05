import React from 'react';
import '../styles/login.scss';
import netflix from '../assets/netflix-logo.png'
import facebook from '../assets/facebook.png'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='body'>
      <div className="header">
        <img src={netflix} className="netflix-logo"></img>
      </div>
      <div className='form-container'>
        <div className='form-stuff'>
        <h1>Sign In</h1>
        <input type="text" placeholder='Email or phone number'/>
        <input type="password"   placeholder='Password'/>
        <Link to="HomePage/"><button>Sign In</button></Link>
        </div>
        <div className='form-stuff-bottom'>
          <div className='form-stuff-prebottom'>
          <input type="checkbox" />
          <p>Remember me</p>
          </div>
          <p>Need help?</p>
        </div>
        <div className='form-stuff-middle'>
          <img src={facebook} alt="" />
          <p>Login with Facebook</p>
        </div>
        <div className='form-stuff-footer'>
          <h2>New to Netflix? <span>Sign up now.</span></h2>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-description'>
      <div className='footer-first'>
        <p>Questions? Contact us.</p>
      </div>
      <div className='footer-first-text'>
        <p>FAQ</p>
        <p>Help Center</p>
        <p>Terms of use</p>
        <p>Privacy</p>
      </div>
      <div className='footer-second-text'>
        <p>Cookie Preferences</p>
        <p className='p2'>Corporate Information</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default LogIn;