import React from 'react';
import Token from '../../Helpers/Token';
import User from '../../Helpers/User';

export const Context = React.createContext();

export function ContextProvider(props) {
  const Reducer = (prevState, { type, payload }) => {
    switch (type) {
      case 'isLoggedIn':
        return {
          ...prevState,
          isLoggedIn: payload.isLoggedIn
        };
      case 'currentUser':
        return {
          ...prevState,
          currentUser: payload.currentUser
        };
      default:
        return;
    }
  };

  const [state, dispatch] = React.useReducer(Reducer, {
    isLoggedIn: false,
    currentUser: null,
    hasToken: Token.hasAuthToken()
  });

  // sets the current loggedin users data in state
  const setUser = user =>
    dispatch({
      type: 'currentUser',
      payload: {
        currentUser: user
      }
    });

  // sets the loggedin status in state
  const loginStatus = boolean =>
    dispatch({
      type: 'isLoggedIn',
      payload: {
        isLoggedIn: boolean
      }
    });

  // when a user logs in this function is triggered and it saves the users api token
  // to the user's brower local storage and stores the users data in state
  const processLogin = authToken => {
    Token.saveAuthToken(authToken);
    User.getCurrentUser(Token.getAuthToken()).then(res => setUser(res.dbUser));
    loginStatus(true);
  };

  // when a user logs out this function is called and it clears the user's api token from
  // their browsers local storage also it clears the value of currentUser in state
  const processLogout = () => {
    Token.clearAuthToken();
    setUser(null);
    loginStatus(false);
  };

  const value = {
    dispatch,
    currentUser: state.currentUser,
    hasToken: state.hasToken,
    isLoggedIn: state.isLoggedIn,
    setUser: setUser,
    loginStatus: loginStatus,
    processLogin: processLogin,
    processLogout: processLogout
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
