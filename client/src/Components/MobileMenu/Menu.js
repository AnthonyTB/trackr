import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import MenuIcon from '../SVG/menu';
import CloseMenuIcon from '../SVG/close-menu';

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
        <button className='menu-button' onClick={() => toggleMenu()}>
          {menuStatus ? <CloseMenuIcon /> : <MenuIcon />}
        </button>
        <div className={`slide-out ${menuStatus}`}>{loginStatus()}</div>
      </nav>
    </div>
  );
}

export default MobileMenu;
