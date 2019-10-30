import React, { Component } from "react";

export default class Serivce extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <div className="request-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" /> <br />
            <input type="text" placeholder="Company" />
            <input type="email" placeholder="Email" /> <br />
            <input type="text" placeholder="Message" />
          </div>
          <button type="submit">Request</button>
        </form>
      </div>
    );
  }
}
