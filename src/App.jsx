import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Habit from './Habit/Habit'
import Register from './Register/Register';


function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Habit />} />
    <Route path="/register" element={<Register />} />

   
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
