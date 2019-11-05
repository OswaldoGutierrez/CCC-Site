import React, { Component } from "react";
import Login from "../auth/login";
import LoginImage from "../images/contact-image.jpg";

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${LoginImage})`
          }}
        />

        <div className="right-column">
          <Login />
        </div>
      </div>
    );
  }
}
