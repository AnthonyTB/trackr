import jwtDecode from 'jwt-decode';

const Token = {
  // saves the user's current api token to their browsers local storage
  saveAuthToken(token) {
    window.localStorage.setItem('authToken', token);
  },
  // gets the user's current api token from their browsers local storage
  getAuthToken() {
    return window.localStorage.getItem('authToken');
  },
  // clears the user's current api token from their browsers local storage
  clearAuthToken() {
    window.localStorage.removeItem('authToken');
  },
  // checks if the user has a api token stored in their browsrs local storage
  hasAuthToken() {
    return !!Token.getAuthToken();
  },
  // parses the user's web token
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  // creates the user's web token
  parseAuthToken() {
    const authToken = Token.getAuthToken();
    if (authToken) return Token.parseJwt(authToken);
    else return undefined;
  }
};

export default Token;
