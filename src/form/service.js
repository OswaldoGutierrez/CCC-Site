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
      done: false,
      editMode: false,
      apiUrl: "https://ccc-site-api.herokuapp.com/requests",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.requestToEdit).length > 0) {
      const {
        id,
        name,
        company,
        email,
        message,
        done
      } = this.props.requestToEdit;

      this.props.clearRequestToEdit();

      this.setState({
        id: id,
        name: name || "",
        company: company || "",
        email: email || "",
        message: message || "",
        done: done || false,
        editMode: true,
        apiUrl: `https://ccc-site-api.herokuapp.com/request/${id}`,
        apiAction: "patch"
      });
    }
  }

  buildForm() {
    let formData = new formData();

    formData.append("request_item[name]", this.state.name);
    formData.append("request_item[company]", this.state.company);
    formData.append("request_item[email]", this.state.email);
    formData.append("request_item[message]", this.state.message);

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm()
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
          apiUrl: "https://ccc-site-api.herokuapp.com/requests",
          apiAction: "post"
        });
      })
      .catch(error => {
        console.log("request form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className="one">
        <form onSubmit={this.handleSubmit} className="request-form">
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
