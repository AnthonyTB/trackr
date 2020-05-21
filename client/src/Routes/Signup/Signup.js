import React from 'react';
import './Signup.css';
import { CreateAccountForm } from './Components/';
import { BrandingW } from '../../Assets/';

function Signup(props) {
  return (
    <div className='CreateAccount'>
      <img className='Branding-Logo' src={BrandingW} alt='Branding' />
      <p className='Heading'>
        Create an account to track all of your social media analytics.
      </p>
      <CreateAccountForm history={props.history} />
    </div>
  );
}

export default Signup;
