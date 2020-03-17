import React, { useContext } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import HomeBtn from '../SVGs/homebtn';
import ChartBtn from '../SVGs/chartbtn';

function DesktopMenu() {
  const { isLoggedIn, updateStatus, Logout } = React.useContext(Context);

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
    <div className='Desktop-Menu'>
      <nav>
        <Link to='/Home'>
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
