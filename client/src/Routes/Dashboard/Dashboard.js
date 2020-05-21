import React from 'react';
import './Dashboard.css';
import { Context } from '../../Components/Context/Context';
import { Search, DashStats, DashPlatforms } from './Components/';

function Dashboard() {
  const { currentUser } = React.useContext(Context);
  const [message, messageUpdater] = React.useState(
    currentUser ? <h1>Welcome, {currentUser.firstname}</h1> : 'hi'
  );

  // React.useEffect(() => {
  //   if (message !== null) {
  //     setTimeout(() => messageUpdater(null), 5000);
  //   }
  // });

  return (
    <div className='Dashboard'>
      {currentUser ? message : ''}
      <div className='top-center'>
        <Search />
      </div>
      <div className='container'>
        <div className='container-item'>
          <DashStats />
        </div>
        <div className='container-item'>
          <DashPlatforms />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
