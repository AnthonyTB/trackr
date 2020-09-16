import React, { useState, useContext } from "react";
import "./Menu.css";
import { Context } from "../../Context/Context";
import { CloseMenu, OpenMenu } from "../../../Assets";

function DesktopMenu() {
  const { isLoggedIn, currentUser } = useContext(Context);

  const [menuStatus, toggleMenu] = useState(false);

  const loginStatus = () => {
    if (isLoggedIn && currentUser) {
      return <div className="loggedIn"></div>;
    } else {
      return <div className="loggedOut"></div>;
    }
  };

  return (
    <div className="Desktop-Menu">
      <nav
        className={`${
          menuStatus
            ? "open animate__animated animate__slideInLeft"
            : "closed animate__animated animate__slideOutLeft"
        }`}
      >
        {loginStatus()}
      </nav>
      <button
        className="menuToggler"
        onClick={() => toggleMenu(!menuStatus)}
        type="button"
      >
        {menuStatus ? <CloseMenu /> : <OpenMenu />}
      </button>
    </div>
  );
}

export default DesktopMenu;
