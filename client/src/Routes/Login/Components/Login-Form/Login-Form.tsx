import React, { FunctionComponent, useState, useContext } from "react";
import { Link } from "@reach/router";
import "./Login-Form.css";
import User from "../../../../Helpers/User";
import { Context } from "../../../../Components/Context/Context";
import { FetchMethod } from "../../../../enums";
import config from "../../../../config";
import { RouteComponentProps } from "@reach/router";

const LoginForm: FunctionComponent<RouteComponentProps<any>> = (props) => {
  const [errorStatus, setError] = useState(null);
  const { processLogin } = useContext(Context);

  const login = (e: any) => {
    e.preventDefault();
    const { username, password } = e.target;

    User.fetchCall(`${config.API_ENDPOINT}/auth/login`, FetchMethod.POST, {
      passedBody: {
        username: username.value.toLowerCase(),
        password: password.value,
      },
    })
      .then((res) => processLogin(res.authToken))
      .then(() => props.history.push("/Dashboard"))
      .catch((res) => setError(res));
  };

  return (
    <form className="Login-Form" onSubmit={login}>
      <div className="login-form-container">
        <label>Username</label>
        <input type="text" name="username" required />
        <label>Password</label>
        <input type="password" name="password" required />
      </div>
      <div className="btn-row">
        <button type="submit">login</button>
        <Link to="/Signup">New user?</Link>
      </div>
    </form>
  );
};

export default LoginForm;
