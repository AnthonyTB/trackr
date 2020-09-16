import React, { FunctionComponent } from "react";
import "./App.css";
import {
  Boundary,
  Login,
  Signup,
  Profile,
  Dashboard,
  Landing,
} from "./Routes/";
import { DesktopMenu, MobileMenu, Footer } from "./Components/";
import { Router } from "@reach/router";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <div className="menu-container">
        <DesktopMenu />
        <MobileMenu />
      </div>
      <div className="main-container">
        <Router>
          <Landing path="/" />
          <Dashboard path="/Dashboard" />
          <Login path="/Login" />
          <Signup path="/Signup" />
          <Profile path="/profile/:username" />
          <Boundary default />
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
