import React from 'react'
import './Home.css';
import { useLocation } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import Header from '../Header/Header';

const Home = () => {
    const location = useLocation();
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
  return (
    <>
    <Header username ={username}  userId={userId}/>
    </>
  )
}

export default Home