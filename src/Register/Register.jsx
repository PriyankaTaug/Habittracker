import React from 'react'
import '../index.css'
import './Register.css'
import bearLogo from '../assets/cutebear.png'

const Register = () => {
  return (
    <div className='div_reg'>
      <img
              src={bearLogo}
              alt="Habit logo"
              style={{
                height: '300px', // adjust size as needed
                width: 'auto',
              }}
              className="logo"
            />
      <button className='reg_button'>Sign up</button>
      <button className='reg_button'>Sign In</button>
    </div>
  )
}

export default Register