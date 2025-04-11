import React from 'react'
import '../index.css'
import './Register.css'
import bearLogo from '../assets/cutebear.png'
import {  useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

const handleNavigate = () =>
{
  navigate('/')
}
  return (
    <div className='div_reg'>
       <button className='back_button' onClick={handleNavigate}>← Back</button>
       <h1 className='reg_text'>Welcome to HabitBuddy!</h1>
      <img
              src={bearLogo}
              alt="Habit logo"
              style={{
                height: '300px', // adjust size as needed
                width: 'auto',
                marginTop: '20'
              }}
              className="logo"
            />
      <button className='reg_button'>Sign up</button>
      <button className='reg_button'>Sign In</button>
    </div>
  )
}

export default Register