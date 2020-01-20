import config from '../config';

const Auth = {
  // api call that handles login request
  login(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  // api call that handles get current user data request
  getCurrentUser(token) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        return data.dbUser;
      });
  },
  // api call that handles get public account data request
  getPublicAccountData(username) {
    return fetch(`${config.API_ENDPOINT}/users/public/${username}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        return data.dbUser;
      });
  }
};

export default Auth;
