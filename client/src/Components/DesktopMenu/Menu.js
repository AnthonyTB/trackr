import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import HomeBtn from '../SVGs/homebtn';
import ChartBtn from '../SVGs/chartbtn';

function DesktopMenu() {
  const { isLoggedIn, processLogout, currentUser } = React.useContext(Context);

  console.log(currentUser);

  const loginStatus = () => {
    if (isLoggedIn && currentUser) {
      return (
        <div className='loggedIn'>
          <button className='avatar-btn'>
            <img
              className='avatar'
              src={currentUser.avatar}
              alt='user avatar'
            />
          </button>
          <button onClick={processLogout}>Logout</button>
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
          <HomeBtn />
        </Link>
        <Link to='/Data'>
          <ChartBtn />
        </Link>
        <hr className='menu-divider' />
        {loginStatus()}
      </nav>
    </div>
  );
}

export default DesktopMenu;
