import React from 'react'
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
  return (
    <div className='home-container'>
     <header className='home-header'>
            <h1>Habit Tracker</h1>
     </header>
     <section className='greeting'>
     <h2>Good Morning, Priyanka 👋</h2>
     <p>Here's how you're doing today</p>
     </section>
    </div>
  )
}

export default Home