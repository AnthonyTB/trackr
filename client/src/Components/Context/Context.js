import { React, useEffect, useState } from 'react';
import Token from './Helpers/Token';
import User from './Helpers/User';

const Context = React.createContext({
  currentUser: {},
  hasToken: '',
  isLoggedIn: {},
  setUser: () => {},
  loginStatus: () => {},
  processLogin: () => {},
  processLogout: () => {}
});

export default Context;

export function ContextProvider() {
  let [isLoggedIn, updateStatus] = useState(false);
  let [currentUser, updateUser] = useState({});
  let hasToken = useState(Token.hasAuthToken());

  // sets the current loggedin users data in state
  const setUser = user => updateUser(user);

  const jwtPayload = Token.parseAuthToken();
  if (jwtPayload) {
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    });
  }

  // sets the loggedin status in state
  const loginStatus = boolean => updateStatus(boolean);

  // when a user logs in this function is triggered and it saves the users api token
  // to the user's brower local storage and stores the users data in state
  const processLogin = authToken => {
    Token.saveAuthToken(authToken);
    this.updateStatus(true);
  };

  // when a user logs out this function is called and it clears the user's api token from
  // their browsers local storage also it clears the value of currentUser in state
  const processLogout = () => {
    Token.clearAuthToken();
    this.setUser({});
    this.updateStatus(false);
  };

  useEffect(() => {
    if (Token.hasAuthToken()) {
      User.getCurrentUser(Token.getAuthToken()).then(data => {
        this.setUser(data);
        this.updateStatus(true);
      });
    }
  });

  const value = {
    currentUser: currentUser,
    hasToken: hasToken,
    isLoggedIn: isLoggedIn,
    setUser: setUser,
    loginStatus: loginStatus,
    processLogin: processLogin,
    processLogout: processLogout
  };

  return (
    <Context.Provider value={value}>{this.props.children}</Context.Provider>
  );
}
