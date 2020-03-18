import React from 'react';
import './Login.css';
import Logo from '../../Assets/black-logo.png';
import LoginForm from '../../Components/Login-Form/Login-Form';

function Login(props) {
  return (
    <div className='Login'>
      <img className='Branding-Logo' src={Logo} alt='Branding' />
      <LoginForm history={props.history} />
    </div>
  );
}

export default Login;
