import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import { ChartBTN, HomeBTN, Profile, Setting, Logout } from '../../../Assets/';

function DesktopMenu() {
  const { isLoggedIn, processLogout, currentUser } = React.useContext(Context);

  const [menuStatus, toggle] = React.useState(false);

  const toggleMenu = () => toggle(!menuStatus);

  const loginStatus = () => {
    if (isLoggedIn && currentUser) {
      return (
        <div className='loggedIn'>
          <button className='avatar-btn' type='button' onClick={toggleMenu}>
            <img
              className='avatar'
              src={currentUser.avatar}
              alt='user avatar'
            />
          </button>
          <div className={`account-menu ${menuStatus}`}>
            <div className='menu-item'>
              <Profile />
              <Link to={`/profile/${currentUser.username}`}>My Account</Link>
            </div>
            <div className='menu-item'>
              <Setting />
              <Link to='/settings'>Settings</Link>
            </div>
            <div className='menu-item'>
              <Logout />
              <button
                onClick={() => {
                  processLogout();
                  toggleMenu();
                }}
              >
                Logout
              </button>
            </div>
          </div>
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
    <div className='Desktop-Menu'>
      <nav>
        <Link to='/Dashboard'>
          <HomeBTN />
        </Link>
        <Link to='/Data'>
          <ChartBTN />
        </Link>
        <hr className='menu-divider' />
        {loginStatus()}
      </nav>
    </div>
  );
}

export default DesktopMenu;
