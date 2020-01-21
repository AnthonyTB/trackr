import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Boundary from './Routes/Boundary/Boundary';
import Landing from './Routes/Landing/Landing';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import CreateAccountPage from './Routes/Create-Account/Create-Account';
import Auth from './Helpers/Auth';
import config from './config.js';
import Context from './Components/Context/Context';
import DesktopMenu from './Components/DesktopMenu/Menu';
import MobileMenu from './Components/MobileMenu/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: {},
      hasToken: this.hasAuthToken()
    };
  }

  componentDidMount() {
    if (this.hasAuthToken()) {
      Auth.getCurrentUser(this.getAuthToken()).then(data =>
        this.setState(prevState => ({
          currentUser: data,
          isLoggedIn: true
        }))
      );
    }
  }

  // saves the users auth token to local storage
  saveAuthToken = token => {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  };

  // gets the users auth token
  getAuthToken = () => {
    return window.localStorage.getItem(config.TOKEN_KEY);
  };

  // checks if the user has an auth token
  hasAuthToken = () => {
    return !!this.getAuthToken();
  };

  // creates a auth token
  makeBasicAuthToken = (userName, password) => {
    return window.btoa(`${userName}:${password}`);
  };

  // on login gets the users data and sets the loggedin status to true
  onLogin = () => {
    Auth.getCurrentUser(this.getAuthToken()).then(data =>
      this.setState(prevState => ({
        currentUser: data,
        isLoggedIn: true
      }))
    );
  };

  // on logout clears the users auth token and sets the loggedin status to false
  onLogout = () => {
    window.localStorage.removeItem(config.TOKEN_KEY);
    this.setState({ currentUser: {}, isLoggedIn: false });
  };

  render() {
    return (
      <Context.Provider
        value={{
          currentUser: this.state.currentUser,
          hasToken: this.state.hasToken,
          isLoggedIn: this.state.isLoggedIn,
          saveAuthToken: this.saveAuthToken,
          getAuthToken: this.getAuthToken,
          hasAuthToken: this.hasAuthToken,
          makeBasicAuthToken: this.makeBasicAuthToken,
          onLogin: this.onLogin,
          onLogout: this.onLogout
        }}
      >
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
      </Context.Provider>
    );
  }
}

export default App;
