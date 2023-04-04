import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const savedAccounts = JSON.parse(localStorage.getItem('account')) || [];
  
    // Find the account with matching username and password
    const matchedAccountIndex = savedAccounts.findIndex((account) => {
      return account.username === username && account.password === password;
    });
  
    if (matchedAccountIndex >= 0) {
      console.log('Login successful');
      // Redirect the user to the dashboard
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = '/dashboard';
    } else {
      alert('Invalid username or password');
      // Display an error message to the user
    }
  }

  return (
    <div className="loginform-div">
      <div className="form-main">
        <h4 className="title">Log In</h4>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="email"
            id="email"
            name="email"
            className="form-main-input username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="form-main-input password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <label className="checkbox-label">
            <input type="checkbox" className="login-checkbox" />
            By continuing you agree to Lav.Job{' '}
            <a href="/">Terms of Service and Privacy Policy.</a>
            <p>
              Don't have an account? <a href="/signup">Register</a>
            </p>
          </label>
          <br />
          <div className="button-icon">
            <button className="login-button">Login</button>
            <p className="second-title">Or continue using</p>
            <div className="icon">
              <a href="#google" className="google-icon">
                <FontAwesomeIcon icon={faGoogle} style={{ color: 'pink' }} />
              </a>
              <a href="#facebook" className="facebook-icon">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'pink' }} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;