import React from 'react';
import './Create-Account.css';
import CreateAccountForm from '../../Components/Create-Account-Form/Create-Account-Form';
import Logo from '../../Assets/white-logo.png';

export default class CreateAccount extends React.Component {
  render() {
    return (
      <div className='CreateAccount'>
        <img className='Branding-Logo' src={Logo} alt='Branding' />
        <p className='Heading'>
          Create an account to track all of your social media analytics.
        </p>
        <CreateAccountForm />
      </div>
    );
  }
}
