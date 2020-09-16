import React, { useState, useContext } from "react";
import "./Menu.css";
import { Link } from "@reach/router";
import { Context } from "../../Context/Context";

function MobileMenu() {
  const { isLoggedIn, processLogout } = useContext(Context);
  const [menuStatus, toggle] = useState(false);

  const loginStatus = () => {
    if (isLoggedIn) {
      return (
        <div className="loggedIn">
          <button onClick={processLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="loggedOut">
          <Link to="/Login">Login</Link>
          <Link to="/Signup">Signup</Link>
        </div>
      );
    }
  };

  return (
    <div className="Mobile-Menu">
      <nav></nav>
    </div>
  );
}

export default MobileMenu;
