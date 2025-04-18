import React from 'react'
import './Home.css';
import { useLocation } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import Header from '../Header/Header';
import Monthlyoverview from '../MonthOverview/Monthlyoverview';
import Calender from '../Calender/Calender';

const Home = () => {
    const location = useLocation();
    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userId');
  return (
    <>
    <Header username ={username}  userId={userId}/>
    <div className="layout-container">
      <div className="left">
        <div className="left-main">
          <div className="left-main-80">
            {/* Content for 80% section */}
            <Calender />
          </div>
          <div className="left-main-20">
            {/* Content for 20% section */}
            <p>20%</p>
          </div>
        </div>

        <div className="left-bottom">
          <div className="left-box"></div>
          <div className="left-box"></div>
        </div>
      </div>

      <div className="right">
        <div className="right-box tall"></div>
        <div className="right-box tall"></div>
        <div className="right-box short"></div>
      </div>
    </div>
    </>
  )
}

export default Home