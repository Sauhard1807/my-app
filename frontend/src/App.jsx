import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import './App.css'
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Dashboard from './components/dashboard.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> 
        </Routes>
      </Router>
    </>
  )
}

export default App
