import React from 'react'
import './Signin.css';
import {  useNavigate } from 'react-router-dom';

const Sigin = () => {
    const navigate = useNavigate();
  return (
    <div className='signin_head'>
        <h1 className='sigin_text'>
            Welcome Back !
        </h1>
        <p className='sigin_p'>Log in to continue building your habits 🌱</p>
        <input type='text' placeholder='Enter your Email' className='signup_input'></input>
        <input type='text' placeholder='Enter your Password' className='signup_input'></input>
        <button className='signup_button'>Sign In</button>
        <p>Don't have an account? <span className='click_check'  onClick={() => navigate('/signup')}>Sign Up</span></p>
    </div>
  )
}

export default Sigin