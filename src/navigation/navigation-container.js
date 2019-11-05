import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cookie from "js-cookie";

import Logo from "../images/logo.png";

export default class NavigationComponent extends Component {
  handleLogOut = () => {
    Cookie.remove("LOGGEDIN");
    window.location.reload();
  };

  render() {
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
            <NavLink to="/service-form" activeClassName="link-active">
              Make a request
            </NavLink>
          </div>

          <div className="link-wrapper">
            {Cookie.get("LOGGEDIN") === "True" ? (
              <NavLink to="/requests" activeClassName="link-active">
                Requests
              </NavLink>
            ) : null}
          </div>
        </div>

        {Cookie.get("LOGGEDIN") === "True" ? (
          <div className="right-side">
            <button onClick={this.handleLogOut}>Log Out</button>
          </div>
        ) : null}
      </div>
    );
  }
}
