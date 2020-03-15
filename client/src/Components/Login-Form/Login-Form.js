import React from 'react';
import { Link } from 'react-router-dom';
import './Login-Form.css';

function LoginForm() {
  const login = e => {
    e.preventDefault();
    const { username, password } = e.target;
    // api call
  };

  return (
    <form onSubmit={login}>
      <div className='login-form-container'>
        <label>Username</label>
        <input type='text' name='username' required />
        <label>Password</label>
        <input type='password' name='password' required />
      </div>
      <div className='btn-row'>
        <button type='submit'>login</button>
        <Link to='/Signup'>New user?</Link>
      </div>
    </form>
  );
}

export default LoginForm;
