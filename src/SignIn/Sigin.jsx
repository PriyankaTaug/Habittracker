import React from 'react'
import './Signin.css';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Sigin = () => {
    const navigate = useNavigate();
    
    const [formData,setFormData] = useState({
      email:'',
      password:'',
    });

    const handleChange = (e) =>
    {
      setFormData({ ...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit = async () => {
      
      try {
        const response = await fetch('http://192.168.0.158:8005/LoginUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });
  
        const data = await response.json();
        // alert(data);
        if (response.ok) {
          // Navigate to next page
           localStorage.setItem('userId', data.user_id);
           localStorage.setItem('username', data.username);
          alert('Login successful! 🎉');
          navigate('/home'); // Or wherever you want to send them
        } else {
          alert(data.message);
          setError(data.message || 'Signin failed');
        }
      } catch (err) {
        alert('Something went wrong. Please try again.');
      }
    };

  return (
    <div className='signin_head'>
        <h1 className='sigin_text'>
            Welcome Back !
        </h1>
        <p className='sigin_p'>Log in to continue building your habits 🌱</p>
        <input type='text' placeholder='Enter your Email' className='signup_input' name="email" value={formData.email} onChange={handleChange}></input>
        <input type='text' placeholder='Enter your Password' className='signup_input' name="password" value = {formData.password} onChange={handleChange}></input>
        <button className='signup_button' onClick={handleSubmit}>Sign In</button>
        <p>Don't have an account? <span className='click_check'  onClick={() => navigate('/signup')}>Sign Up</span></p>
    </div>
  )
}

export default Sigin