import React from 'react'
import './ContactUs.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'; //npm install @emailjs/browser --save


const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7bz38ou', 'template_oc1gzx8', form.current, 'L7jf-XnUpWNrTrBly')
    alert('Message has been sent')
    e.target.reset()
  };


  return (
    <div className='containerr'>
      <div className='contactus-div'>
        <h3 className='title'>Contact Us</h3>
        <p className='paragraph'>Our team is happy to answer your questions. Fill out the form and we'll be in touch as soon as possible</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='First Name' className='firstnamee' name='user_name'/>
          <input type='text' placeholder='Last Name' className='lastnamee' name='from_last'/><br/>
          <input type='email' placeholder='Email' className='emaill' name='from_email'/>
          <input type='number' placeholder='Phone Number' className='phone-number' name='from_number'/><br/>
          <input type='text' placeholder='Address' className='address' name='from_address'/><br/>
          <textarea placeholder='Type Your Message Here' className='textarea-field' name='message'/>
          <div className='btn-div'>
              <button className='btn-sbmt' type='submit'>Submit</button>
              <a type='button' href='/'><button  type='button' className='btn-cancell'>Cancel</button></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
