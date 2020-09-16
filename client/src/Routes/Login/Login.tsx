import React, { FunctionComponent } from "react";
import "./Login.css";
import { BrandingW } from "../../Assets";
import { LoginForm } from "./Components";
import { RouteComponentProps } from "@reach/router";

const Login: FunctionComponent<RouteComponentProps<any>> = (props) => {
  return (
    <div className="Login">
      <img className="Branding-Logo" src={BrandingW} alt="Branding" />
      <LoginForm history={props.history} />
    </div>
  );
};

export default Login;
