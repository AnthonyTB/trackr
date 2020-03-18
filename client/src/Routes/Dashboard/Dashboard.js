import React from 'react';
import './Dashboard.css';
import { Context } from '../../Components/Context/Context';

function Dashboard() {
  const { currentUser } = React.useContext(Context);

  return (
    <div className='Dashboard'>
      <h1>Welcome, {currentUser ? currentUser.firstname : ''}</h1>
    </div>
  );
}

export default Dashboard;
