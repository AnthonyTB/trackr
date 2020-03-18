import React from 'react';
import './Signup.css';
import CreateAccountForm from '../../Components/Create-Account-Form/Create-Account-Form';
import Logo from '../../Assets/black-logo.png';

function Signup(props) {
  return (
    <div className='CreateAccount'>
      <img className='Branding-Logo' src={Logo} alt='Branding' />
      <p className='Heading'>
        Create an account to track all of your social media analytics.
      </p>
      <CreateAccountForm history={props.history} />
    </div>
  );
}

export default Signup;
