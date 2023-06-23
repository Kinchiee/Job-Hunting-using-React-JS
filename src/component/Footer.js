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
                <li><button  ><BsFacebook /></button ></li>
                <li><button  ><BsTwitter /></button ></li>
                <li><button  ><BsInstagram /></button ></li>
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