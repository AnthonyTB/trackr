import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { Menu, CloseMenu } from '../../../Assets/';

function MobileMenu() {
  const { isLoggedIn, Logout } = React.useContext(Context);
  const [menuStatus, toggle] = React.useState(false);

  const toggleMenu = () => toggle(!menuStatus);

  const loginStatus = () => {
    if (isLoggedIn) {
      return (
        <div className='loggedIn'>
          <button onClick={Logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='loggedOut'>
          <Link to='/Login'>Login</Link>
          <Link to='/Signup'>Signup</Link>
        </div>
      );
    }
  };

  return (
    <div className='Mobile-Menu'>
      <nav>
        <div className='menu-item'>
          <button className='menu-button' onClick={() => toggleMenu()}>
            {menuStatus ? <CloseMenu /> : <Menu />}
          </button>
          <div className={`slide-out ${menuStatus}`}>{loginStatus()}</div>
        </div>
        <div className='menu-item'>
          <button className='menu-button' onClick={() => toggleMenu()}>
            {menuStatus ? <CloseMenu /> : <Menu />}
          </button>
          <div className={`slide-out ${menuStatus}`}>{loginStatus()}</div>
        </div>
        <div className='menu-item'>
          <button className='menu-button' onClick={() => toggleMenu()}>
            {menuStatus ? <CloseMenu /> : <Menu />}
          </button>
          <div className={`slide-out ${menuStatus}`}>{loginStatus()}</div>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
