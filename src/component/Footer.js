import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-content'>
                <p><i>"Success seems to be connected to action. Successful people keep moving. They make mistakes, but they never quit.”</i></p>
             <ul className='social'>
                <li><a ><BsFacebook /></a></li>
                <li><a ><BsTwitter /></a></li>
                <li><a ><BsInstagram /></a></li>
             </ul>
            </div>
            <div className='footer-copyright'>
                <p>
                    &#169; Copyright @{new Date().getFullYear()} Lav.job. All right reserved.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer