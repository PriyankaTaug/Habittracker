import React from 'react'
import habitLogo from '../assets/habitlogo.png'
import {  useNavigate } from 'react-router-dom';
import './Habit.css'
import '../index.css'


const Habit = () => {
const navigate = useNavigate();

const handleNavigate = () =>
{
  navigate('/register')
}
  return (
    <div style={{
      height: '100vh',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}>
      <img
        src={habitLogo}
        alt="Habit logo"
        style={{
          height: '200px', // adjust size as needed
          width: 'auto',
          marginBottom: '20px'
        }}
        className="logo"
      />
      <button onClick={handleNavigate} style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#5AA897',
        color: '#fff'
      }}>
        Get Started
      </button>
    </div>
  )
}

export default Habit
