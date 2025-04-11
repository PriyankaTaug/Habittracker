import React from 'react'
import './Signup.css';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className='signup_head'>
      <div className="signup_icon">🌿</div>
        <h1 className='signup_text'>Join the Journey to Better Habits!</h1>
        <hr class="cute-divider" />
        <p className='signup_p'>It only takes a moment to start a new habit</p>
        

        <input type='text' placeholder='Your Name' className='signup_input'></input>
        <input type='text' placeholder='Your Email' className='signup_input'></input>
        <input type='text' placeholder='Create a Password' className='signup_input'></input>
        <input type='text' placeholder='Repeat Password' className='signup_input'></input>
        <button className='signup_button'>Sign Up</button>
        <p>Already have an account?  <span className='click_check'   onClick={() => navigate('/signin')}>Sign In</span></p>
    </div>
  )
}

export default Signup