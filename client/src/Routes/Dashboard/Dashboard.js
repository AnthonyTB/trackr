import React from 'react';
import './Dashboard.css';
import { Context } from '../../Components/Context/Context';
import Search from '../../Components/Search/Search';
import DashStats from '../../Components/DashStats/DashStats';
import DashPlatforms from '../../Components/DashPlatforms/DashPlatforms';

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
      <div className='mid-left'>
        <DashStats />
      </div>
      <div className='mid-right'>
        <DashPlatforms />
      </div>
    </div>
  );
}

export default Dashboard;
