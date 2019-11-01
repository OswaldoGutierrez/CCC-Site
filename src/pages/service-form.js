import React, { Component } from "react";
import axios from "axios";

import Service from "../form/service";

export default class ServiceForm extends Component {
  constructor() {
    super();

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

  render() {
    return (
      <div className="service-form-wrapper">
        <Service />
      </div>
    );
  }
}
