import React from 'react';
import { Link } from 'react-router-dom';
import './Create-Account-Form.css';

export default class CreateAccountForm extends React.Component {
  formSubmit = ev => {
    ev.preventDefault();
    const {
      firstname,
      lastname,
      dob,
      location,
      email,
      username,
      password
    } = ev.target;
    const newAccount = {
      firstname: firstname.value,
      lastname: lastname.value,
      dob: dob.value,
      location: location.value,
      email: email.value,
      username: username.value,
      password: password.value
    };
    console.log(newAccount);
  };

  render() {
    return (
      <div className='CreateAccountForm'>
        <form onSubmit={this.formSubmit}>
          <label>First Name</label>
          <input name='firstname' type='text' />
          <label>Last Name</label>
          <input name='lastname' type='text' />
          <label>Date of Birth</label>
          <input name='dob' type='date' />
          <label>Location</label>
          <input name='location' type='text' />
          <label>Email</label>
          <input name='email' type='email' />
          <label>Username</label>
          <input name='username' type='text' />
          <label>Password</label>
          <input name='password' type='password' />
          <div className='btn-row'>
            <button type='submit'>create</button>
            <Link to='/Login'>Already have an account?</Link>
          </div>
        </form>
      </div>
    );
  }
}
