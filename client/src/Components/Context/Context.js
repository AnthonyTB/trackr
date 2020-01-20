import React from 'react';

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
