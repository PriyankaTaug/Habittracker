import React from 'react'
import './Header.css';

const Header = ({username,userId}) => {
  return (
    <div className='header'>
        <h1>Habit Tracker</h1>
        <div className="account-icon">{username?.charAt(0)}</div> 
    </div>
  )
}

export default Header