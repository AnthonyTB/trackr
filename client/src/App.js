import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Boundary from './Routes/Boundary/Boundary';
import Landing from './Routes/Landing/Landing';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import CreateAccountPage from './Routes/Create-Account/Create-Account';
import Context from './Components/Context/Context';
import DesktopMenu from './Components/DesktopMenu/Menu';
import MobileMenu from './Components/MobileMenu/Menu';

class App extends React.Component {
  render() {
    return (
      <div>
        <DesktopMenu />
        <MobileMenu />
        <Switch>
          <Route
            exact
            path='/'
            render={routeProps => {
              return <Landing {...routeProps} />;
            }}
          />
          <Route
            exact
            path='/Home'
            render={routeProps => {
              return <Home {...routeProps} />;
            }}
          />
          <Route
            exact
            path='/Login'
            render={routeProps => {
              return <Login {...routeProps} />;
            }}
          />
          <Route
            exact
            path='/Create-Account'
            render={routeProps => {
              return <CreateAccountPage {...routeProps} />;
            }}
          />
          <Route
            render={routeProps => {
              return <Boundary {...routeProps} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
