import React from 'react';
import { Link } from 'react-router-dom';
import './Login-Form.css';
import User from '../../../../Helpers/User';
import { Context } from '../../../../Components/Context/Context';

function LoginForm(props) {
  const [errorStatus, setError] = React.useState(null);
  const { processLogin } = React.useContext(Context);

  const login = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    User.login({
      username: username.value.toLowerCase(),
      password: password.value,
    })
      .then((res) => processLogin(res.authToken))
      .then(() => props.history.push('/Dashboard'))
      .catch((res) => setError(res));
  };

  return (
    <form className='Login-Form' onSubmit={login}>
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
