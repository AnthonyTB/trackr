import React from 'react';
import { Link } from 'react-router-dom';
import './Create-Account-Form.css';
import Logo from '../../Assets/black-logo.png';

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
      <div className='form-container'>
        <div className='featured'>
          <svg
            class='nc-icon glyph'
            xmlns='http://www.w3.org/2000/svg'
            xlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            width='32px'
            height='32px'
            viewBox='0 0 32 32'
          >
            <g>
              <path
                fill='#ffffff'
                d='M1.293,15.293L11,5.586L12.414,7l-8,8H31v2H4.414l8,8L11,26.414l-9.707-9.707 C0.902,16.316,0.902,15.684,1.293,15.293z'
              ></path>{' '}
            </g>
          </svg>
          <img className='Branding-Logo' src={Logo} alt='Branding' />
          <p className='Heading'>
            Create an account to track all of your social media analytics.
          </p>
        </div>
        <form onSubmit={formSubmit}>
          <div className='form-bg'>
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
    </div>
  );
}

export default CreateAccountForm;
