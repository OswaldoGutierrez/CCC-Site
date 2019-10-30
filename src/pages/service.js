import React, { Component } from "react";

export default class Serivce extends Component {
  render() {
    return (
      <div className="one">
        <form className="request-form">
          <div className="inputs">
            <input type="text" placeholder="First Name, Last Name" />
            <input type="text" placeholder="Company" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Message" />
          </div>
          <button type="submit" className="btn">
            Request
          </button>
        </form>
      </div>
    );
  }
}
