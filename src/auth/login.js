import React, { Component } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    axios
      .get("https://ccc-site-api.herokuapp.com/users")
      .then(response => {
        console.log(response.data);
        if (
          response.data.username === this.state.username &&
          response.data.password === this.state.password
        ) {
          this.setState({
            loggedIn: true
          });
          Cookie.set("LOGGEDIN", "True", { expires: 1 });
          window.location.reload();
        } else {
          alert("Invalid");
        }
      })
      .catch(error => {
        console.log("handleSubmit error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <form
          onSubmit={event => this.handleSubmit(event)}
          className="auth-form-wrapper"
        >
          <div className="form-group">
            <FontAwesomeIcon icon="envelope" />
            <input
              type="email"
              name="username"
              placeholder="Your email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <FontAwesomeIcon icon="lock" />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
