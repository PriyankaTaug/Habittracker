import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Habit from './Habit/Habit'
import Register from './Register/Register';
import Signup from './SignUp/Signup';
import Sigin from './SignIn/sigin';
import Home from './Home/Home';



function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Habit />} />
    <Route path="/register" element={<Register />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Sigin />} />
    <Route path="/home" element={<Home />} />

   
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
