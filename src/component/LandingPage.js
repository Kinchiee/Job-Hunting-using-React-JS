import React, { useState, useEffect } from 'react'
import './LandingPage.css'
import { Button } from 'react-bootstrap'


function LandingPage() {
  const [email, setEmail] = useState('')
  const [_, setNewEmail] = useState([])

  const emailChangeHandler = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const newEmail= {
      email:email
    }

    const existingEmail = JSON.parse(localStorage.getItem('landing-email')) || [];
    const updatedEmail = [...existingEmail, newEmail]

    localStorage.setItem('landing-email', JSON.stringify(updatedEmail))
    setEmail('')
    setNewEmail(updatedEmail)
    alert('Your email has been saved')
  } 

  useEffect(() => {
    const savedEmail = JSON.parse(localStorage.getItem('landing-email')) || [];
    setNewEmail(savedEmail)
  }, [])


  return (
    <div className='landing-div'>
      <div className='landing-left'>
        <h3>Find Your</h3>
        <h1>Dream Job</h1>
        <h6>You can and You will</h6>
        <Button href='/login' className='login-btn'>Login</Button>
      </div>
      <div className='landing-right'>
        <p>Subscribe to Our Mailing List</p>
        <form onSubmit={submitHandler}>
          <input type='email' placeholder='Email Address' value={email} onChange={emailChangeHandler}/>
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage
