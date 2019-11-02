import React, { Component } from "react";
import axios from "axios";

import Service from "../form/service";

export default class ServiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestItems: [],
      requestToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.clearRequestToEdit = this.clearRequestToEdit.bind(this);
  }

  clearRequestToEdit() {
    this.setState({
      requestToEdit: {}
    });
  }

  handleEditFormSubmission() {
    this.getRequestItems();
  }

  handleNewFormSubmission(requestItem) {
    this.setState({
      requestItems: [requestItem].concat(this.state.requestItems)
    });
  }

  handleFormSubmissionError(error) {
    console.log("handldeFormSubmissionError error", error);
  }

  getRequestItems() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/requests"
      )
      .then(response => {
        this.setState({
          requestItems: response.data
        });
        return this.props.handleRecords(response.data);
      })
      .catch(error => {
        console.log("error in getRequestItems", error);
      });
  }

  componentDidMount() {
    this.getRequestItems();
  }

  render() {
    return (
      <div className="service-form-wrapper">
        <Service
          handleNewFormSubmission={this.handleNewFormSubmission}
          handleEditFormSubmission={this.handleEditFormSubmission}
          handleFormSubmissionError={(this, this.handleFormSubmissionError)}
          clearRequestToEdit={this.clearRequestToEdit}
          requestToEdit={this.state.requestToEdit}
        />
      </div>
    );
  }
}
