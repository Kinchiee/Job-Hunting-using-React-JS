import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Resume from './Resume'
import Login from './Login'
import Signup from './Signup'
import JobDashboard from './JobDashboard'
import AddJob from './AddJob'
import ContactUsRoute from './ContactUsRoute'
import Logout from '../LogoutFunction'


function Index() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Router>
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route exact path='/about-us' element= {<AboutUs/>} />
        <Route exact path='/resume' element= {<Resume/>} />
        <Route exact path='/login' element= {<Login/>} />
        <Route exact path='/signup' element= {<Signup/>} />
        <Route path="/dashboard" element={isAuthenticated === 'true' ? <JobDashboard /> : <Navigate to="/login" replace />} />       
        <Route exact path='/addjob' element= {<AddJob/>} />
        <Route exact path='/contact-us' element= {<ContactUsRoute/>} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  )
}

export default Index
