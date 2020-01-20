import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

export default class Menu extends React.Component {
  static contextType = Context;

  loginStatus = () => {
    if (this.context.isLoggedIn) {
      return (
        <div className='loggedIn'>
          <button onClick={this.context.Logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='loggedOut'>
          <Link to='/Login'>Login</Link>
          <Link to='/Create-Account'>Register</Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className='Menu'>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link to='/Improve'>Improve</Link>
          <p>|</p>
          {this.loginStatus()}
        </nav>
      </div>
    );
  }
}
