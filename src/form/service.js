import React, { Component } from "react";
import axios from "axios";

export default class Serivce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      company: "",
      email: "",
      message: "",
      editMode: false,
      apiUrl:
        "https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/request",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.requestToEdit).length > 0) {
      const { id, name, company, email, message } = this.props.requestToEdit;

      this.props.clearRequestToEdit();

      this.setState({
        id: id,
        name: name || "",
        company: company || "",
        email: email || "",
        message: message || "",
        editMode: true,
        apiUrl: `https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/request/${id}`,
        apiAction: "patch"
      });
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: {
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        message: this.state.message
      }
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.request_item);
        }

        this.setState({
          name: "",
          company: "",
          email: "",
          message: "",
          editMode: false,
          apiUrl:
            "https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/request",
          apiAction: "post"
        });
      })
      .catch(error => {
        console.log("request form handleSubmit error", error);
      });
  }

  render() {
    return (
      <div className="one">
        <form onSubmit={this.handleSubmit} className="request-form">
          <div className="text">
            <h3>Request Form</h3>
          </div>

          <div className="inputs">
            <input
              type="text"
              name="name"
              placeholder="First Name, Last Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="company"
              placeholder="company"
              value={this.state.company}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="message"
              placeholder="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Request
          </button>
        </form>
      </div>
    );
  }
}
