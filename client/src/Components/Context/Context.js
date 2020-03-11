import { React, useEffect, useState } from 'react';
import config from './config.js';
import Token from './Helpers/Token';

const Context = React.createContext({
  currentUser: '',
  hasToken: '',
  isLoggedIn: false,
  saveAuthToken: () => {},
  getAuthToken: () => {},
  hasAuthToken: () => {},
  makeBasicAuthToken: () => {},
  onLogin: () => {},
  onLogout: () => {}
});

export default Context;

export function ContextProvider() {
  let isLoggedIn = useState(false);
  let currentUser = useState({});
  let hasToken = useState(Token.hasAuthToken());

  const jwtPayload = Token.parseAuthToken();
  if (jwtPayload) {
    this.state.user = {
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    };
  }

  // sets the current loggedin users data in state
  const setUser = user => {
    currentUser = useState(user);
  };

  // clears the current loggedin users data in state
  const clearUser = user => {
    this.setState({ user: {} });
  };

  // when a user logs in this function is triggered and it saves the users api token
  // to the user's brower local storage and stores the users data in state
  const processLogin = authToken => {
    Token.saveAuthToken(authToken);
    const jwtPayload = Token.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    });
    Token.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken();
    });
  };

  // when a user logs out this function is called and it clears the user's api token from
  // their browsers local storage also it clears the value of currentUser in state
  const processLogout = () => {
    Token.clearAuthToken();
    Token.clearCallbackBeforeExpiry();
    this.clearUser();
    this.clearQuizStatus();
  };

  // let state = {
  //   isLoggedIn: false,
  //   currentUser: {},
  //   hasToken: this.hasAuthToken()
  // };

  useEffect(() => {
    if (this.hasAuthToken()) {
      Auth.getCurrentUser(this.getAuthToken()).then(data =>
        this.setState(prevState => ({
          currentUser: data,
          isLoggedIn: true
        }))
      );
    }
  });

  // on login gets the users data and sets the loggedin status to true
  const onLogin = () => {
    Auth.getCurrentUser(this.getAuthToken()).then(data =>
      this.setState(prevState => ({
        currentUser: data,
        isLoggedIn: true
      }))
    );
  };

  // on logout clears the users auth token and sets the loggedin status to false
  const onLogout = () => {
    window.localStorage.removeItem(config.TOKEN_KEY);
    this.setState({
      currentUser: {},
      isLoggedIn: false
    });
  };

  const value = {
    currentUser: this.state.currentUser,
    hasToken: this.state.hasToken,
    isLoggedIn: this.state.isLoggedIn,
    saveAuthToken: this.saveAuthToken,
    getAuthToken: this.getAuthToken,
    hasAuthToken: this.hasAuthToken,
    makeBasicAuthToken: this.makeBasicAuthToken,
    onLogin: this.onLogin,
    onLogout: this.onLogout
  };

  return (
    <Context.Provider value={value}>{this.props.children}</Context.Provider>
  );
}
