import React, { FunctionComponent, useState } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./Create-Account-Form.css";
import User from "../../../../Helpers/User";
import { FetchMethod } from "../../../../enums";
import config from "../../../../config";

const CreateAccountForm: FunctionComponent<RouteComponentProps<any>> = (
  props
) => {
  const [errorStatus, setError] = useState(null);

  const formSubmit = (ev: any) => {
    ev.preventDefault();
    const { firstname, lastname, email, username, password } = ev.target;
    const newAccount = {
      firstname: firstname.value,
      lastname: lastname.value,
      avatar:
        "https://www.sackettwaconia.com/wp-content/uploads/default-profile.png",
      email: email.value,
      username: username.value.toLowerCase(),
      password: password.value,
    };
    User.fetchCall(`${config.API_ENDPOINT}/users`, FetchMethod.POST, {
      passedBody: { newAccount },
    })
      .then(() => props.history.push("/Login"))
      .catch((res: any) => setError(res));
  };

  return (
    <div className="CreateAccountForm">
      <form onSubmit={formSubmit}>
        <div className="form-container">
          <label>First Name</label>
          <input name="firstname" type="text" required />
          <label>Last Name</label>
          <input name="lastname" type="text" required />
          <label>Email</label>
          <input name="email" type="email" required />
          <label>Username</label>
          <input name="username" type="text" required />
          <label>Password</label>
          <input name="password" type="password" required />
        </div>
        <div className="btn-row">
          <button type="submit">create</button>
          <Link to="/Login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;
