import React from 'react';
import './Create-Account.css';
import CreateAccountForm from '../../Components/Create-Account-Form/Create-Account-Form';

export default class CreateAccount extends React.Component {
  render() {
    return (
      <div className='CreateAccount'>
        <CreateAccountForm />
      </div>
    );
  }
}
