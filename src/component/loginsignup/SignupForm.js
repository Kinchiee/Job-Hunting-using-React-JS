import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './SignupForm.css'

function SignupForm() {
    const [username, setUsername] = useState('')
    const [password, setPassowrd] = useState('')
    const [password1, setPassowrd1] = useState('')
    const [acount, setAccount] = useState([])

    const usernameChangeHandler = (event) => {
        event.preventDefault();
        setUsername(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        event.preventDefault();
        setPassowrd(event.target.value)
    }

    const password1ChangeHandler = (event) => {
        event.preventDefault();
        setPassowrd1(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();
        if (password !==  password1) {
            alert('Password does not matched')
        } 
        else {
        const newAccount = {
            username: username,
            password: password,
            password1: password1
        }
    
        const existingAccount = JSON.parse(localStorage.getItem('account')) || [];
        const updatedAccount = [...existingAccount, newAccount]
    
        localStorage.setItem('account', JSON.stringify(updatedAccount))
        setUsername('')
        setPassowrd('')
        setPassowrd1('')
        alert('Your account has been added')
        }
    }

    useEffect(() => {
      const savedAccounts = JSON.parse(localStorage.getItem('jobs')) || [];
      setAccount(savedAccounts)
    }, []);

    return (
        <div className='signup-div'>
            <div className='form-main'>
                <form onSubmit={submitHandler}>
                    <h4 className='title'>Sign Up</h4>
                    <input placeholder='Username' type='email' id='email' name='email' className='form-main-input username' value={username} onChange={usernameChangeHandler}/><br/>
                    <input type='password' id='password' name='password' placeholder='Password' className='form-main-input password' value={password} onChange={passwordChangeHandler}/><br/>
                    <input type='password' id='cpassword' name='cpassword' placeholder='Confirm Password' className='confirm cpassword' value={password1} onChange={password1ChangeHandler}/><br/>
                    <label className='checkbox-label'>
                        <input type="checkbox" className='signup-checkbox'/>
                        By continu  ing you agree to Lav.Job <a href='/'>Terms of Service and Privacy Policy.</a>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </label>
                    <br/>
                    <div className='button-icon'>
                        <button type='submit' className='signup-button'>Sign Up</button>
                        <p className='second-title'>Or sign-up using</p>
                        <div className='icon'>
                            <a href="#google" className='google-icon'>
                                <FontAwesomeIcon icon={faGoogle} style={{color: 'pink'}}/>
                            </a>
                            <a href="#facebook" className='facebook-icon'>
                                <FontAwesomeIcon icon={faFacebook} style={{color: 'pink'}}/>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm