import React, { Component } from "react";
import Login from "../auth/login";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page-wrapper">
        <div className="left-column"></div>

        <div className="right-column">
          <Login />
        </div>
      </div>
    );
  }
}
