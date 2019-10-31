import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../images/logo.png";

const NavigationComponent = () => {
  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="link-wrapper">
          <NavLink exact to="/" activeClassName="link-active">
            Home
          </NavLink>
        </div>

        <div className="link-wrapper">
          <NavLink to="/contact" activeClassName="link-active">
            Contact
          </NavLink>
        </div>

        <div className="link-wrapper">
          <NavLink to="/service" activeClassName="link-active">
            Make a request
          </NavLink>
        </div>

        <div className="link-wrapper">
          <NavLink to="/requests" activeClassName="link-active">
            Requests
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavigationComponent;
