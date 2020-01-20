import config from '../config';

const User = {
  // api call the handles account creation
  createAccount(newAccount) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newAccount)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // api call that handles delete account request
  deleteAccount(username) {
    return fetch(`${config.API_ENDPOINT}/users/${username}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    });
  },
  // api call that handles account update request
  updateAccount(updatedData, id) {
    return fetch(`${config.API_ENDPOINT}/users/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.TOKEN_KEY}`
      },
      body: JSON.stringify(updatedData)
    }).then(res => {
      return !res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  }
};

export default User;
