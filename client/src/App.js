import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Boundary from './Routes/Boundary/Boundary';
import Landing from './Routes/Landing/Landing';
import Dashboard from './Routes/Dashboard/Dashboard';
import Login from './Routes/Login/Login';
import Signup from './Routes/Signup/Signup';
import DesktopMenu from './Components/DesktopMenu/Menu';
import MobileMenu from './Components/MobileMenu/Menu';
import Footer from './Components/Footer/Footer';
import Token from './Helpers/Token';
import User from './Helpers/User';
import { Context } from './Components/Context/Context';

function App() {
  const { isLoggedIn, setUser, loginStatus, hasToken } = React.useContext(
    Context
  );

  React.useEffect(() => {
    if (hasToken && !isLoggedIn) {
      if (Token.parseAuthToken()) {
        User.getCurrentUser(Token.getAuthToken()).then(res =>
          setUser(res.dbUser)
        );
        loginStatus(true);
      }
    }
  });

  return (
    <>
      <DesktopMenu />
      <MobileMenu />
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => <Landing {...routeProps} />}
        />
        <Route
          exact
          path='/Dashboard'
          render={routeProps => <Dashboard {...routeProps} />}
        />
        <Route
          exact
          path='/Login'
          render={routeProps => <Login {...routeProps} />}
        />
        <Route
          exact
          path='/Signup'
          render={routeProps => <Signup {...routeProps} />}
        />
        <Route render={routeProps => <Boundary {...routeProps} />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
