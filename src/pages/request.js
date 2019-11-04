import React, { Component } from "react";
import axios from "axios";

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      requestItems: []
    };
    this.getRequestItems = this.getRequestItems.bind(this);
    this.renderRequest = this.renderRequest.bind(this);
  }

  componentDidMount() {
    this.setState({
      records: this.props.records
    });
    this.getRequestItems();
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
      })
      .catch(error => {
        console.log("error in getRequestItems", error);
      });
  }

  renderRequest() {
    console.log(this.state.requestItems);
    return this.state.requestItems.map(item => {
      return (
        <div className="items">
          <div>{item.name}</div>
          <div>{item.company}</div>
          <div>{item.email}</div>
          <div>{item.message}</div>
        </div>
      );
    });
  }

  render() {
    console.log("request", this.state.requestItems);
    return (
      <div className="request">
        <h2>Requests</h2>
        <div>
          {this.state.requestItems.length > 0
            ? this.renderRequest()
            : "Loading..."}
        </div>
      </div>
    );
  }
}
