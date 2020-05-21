import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  Boundary,
  Login,
  Signup,
  Profile,
  Dashboard,
  Landing,
} from './Routes/';
import { DesktopMenu, MobileMenu, Footer } from './Components/';
import Token from './Helpers/Token';
import User from './Helpers/User';
import { Context } from './Components/Context/Context';

function App() {
  const { currentUser, setUser, loginStatus, hasToken } = React.useContext(
    Context
  );

  React.useEffect(() => {
    const fetchData = async () => {
      if (hasToken && !currentUser) {
        if (Token.parseAuthToken()) {
          const response = await User.getCurrentUser(Token.getAuthToken());
          setUser(response.dbUser);
          loginStatus(true);
        }
      }
    };
    fetchData();
  }, [currentUser, hasToken, loginStatus, setUser]);

  return (
    <div className='App'>
      <div className='menu-container'>
        <DesktopMenu />
        <MobileMenu />
      </div>
      <div className='main-container'>
        <Switch>
          <Route
            exact
            path='/'
            render={(routeProps) => <Landing {...routeProps} />}
          />
          <Route
            exact
            path='/Dashboard'
            render={(routeProps) => <Dashboard {...routeProps} />}
          />
          <Route
            exact
            path='/Login'
            render={(routeProps) => <Login {...routeProps} />}
          />
          <Route
            exact
            path='/Signup'
            render={(routeProps) => <Signup {...routeProps} />}
          />
          <Route render={(routeProps) => <Boundary {...routeProps} />} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
