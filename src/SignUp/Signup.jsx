import React from 'react'
import { useState } from "react";
import './Signup.css';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  // This is a state in react.It stores the values from the form,We use this state to hold and update what the user types into the input boxes.
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    repeatPassword:''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async () => {
    setError(''); // clear previous error
    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://192.168.0.158:8002/UserRegisteration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Navigate to next page
        alert('Registration successful! 🎉');
        navigate('/register'); // Or wherever you want to send them
      } else {
        alert(data.message);
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='signup_head'>
      <div className="signup_icon">🌿</div>
        <h1 className='signup_text'>Join the Journey to Better Habits!</h1>
        <hr className="cute-divider" />
        <p className='signup_p'>It only takes a moment to start a new habit</p>
        

        <input type='text' placeholder='Your Name' name="name" value={formData.name} onChange={handleChange}  className='signup_input'></input>
        <input type='text' placeholder='Your Email' name="email" value={formData.email} onChange={handleChange} className='signup_input'></input>
        <input type='text' placeholder='Create a Password' name="password" value={formData.password} onChange={handleChange} className='signup_input'></input>
        <input type='text' placeholder='Repeat Password' name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} className='signup_input'></input>
        <button className='signup_button' onClick={handleSubmit}>Sign Up</button>
        <p>Already have an account?  <span className='click_check'   onClick={() => navigate('/signin')}>Sign In</span></p>
    </div>
  )
}

export default Signup