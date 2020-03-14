import React from 'react';
import { Link } from 'react-router-dom';
import './Create-Account-Form.css';

function CreateAccountForm() {
  const formSubmit = ev => {
    ev.preventDefault();
    const { firstname, lastname, email, username, password } = ev.target;
    const newAccount = {
      firstname: firstname.value,
      lastname: lastname.value,
      avatar:
        'https://www.sackettwaconia.com/wp-content/uploads/default-profile.png',
      email: email.value,
      username: username.value,
      password: password.value
    };
    console.log(newAccount);
  };

  return (
    <div className='CreateAccountForm'>
      <form onSubmit={formSubmit}>
        <div className='form-container'>
          <label>First Name</label>
          <input name='firstname' type='text' required />
          <label>Last Name</label>
          <input name='lastname' type='text' required />
          <label>Email</label>
          <input name='email' type='email' required />
          <label>Username</label>
          <input name='username' type='text' required />
          <label>Password</label>
          <input name='password' type='password' required />
        </div>
        <div className='btn-row'>
          <button type='submit'>create</button>
          <Link to='/Login'>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
