import React, { Component } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      requestItems: [],
      reviewRecords: [],
      reviewItems: []
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.getRequestItems = this.getRequestItems.bind(this);
    this.getReviewItems = this.getReviewItems.bind(this);
    this.renderRequest = this.renderRequest.bind(this);
    this.renderReview = this.renderReview.bind(this);
  }

  handleDelete(id) {
    console.log("delete", id);
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/request/${id}`
      )
      .then(response => {
        this.setState({
          requestItems: this.state.requestItems.filter(item => {
            return item.id !== id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDelete error", error);
      });
  }

  componentDidMount() {
    this.setState({
      records: this.props.records,
      reviewItems: this.props.reviewItems
    });
    this.getRequestItems();
    this.getReviewItems();
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

  getReviewItems() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/reviews"
      )
      .then(res => {
        this.setState({
          reviewItems: res.data
        });
      })
      .catch(err => {
        console.log("err in getReviewItems", err);
      });
  }

  renderRequest() {
    console.log(this.state.requestItems);
    return this.state.requestItems.map(item => {
      return (
        <div className="items">
          <div className="name">{item.name}</div>
          <div className="company">{item.company}</div>
          <div className="email">{item.email}</div>
          <div className="message">{item.message}</div>
          <div className="del">
            <a className="del-icon" onClick={() => this.handleDelete(item.id)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      );
    });
  }

  renderReview() {
    console.log(this.state.reviewItems);
    return this.state.reviewItems.map(revItem => {
      return (
        <div className="review-items">
          <div className="name">{revItem.name}</div>
          <div className="rating">{revItem.rating}</div>
          <div className="comment">{revItem.comment}</div>
          <div className="del">
            <a className="del-icon">
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log("request", this.state.requestItems);
    console.log("Review", this.state.reviewItems);
    return (
      <div className="request">
        <h2>Requests</h2>
        {Cookie.get("LOGGEDIN") === "True" ? (
          <div>
            {this.state.requestItems.length > 0
              ? this.renderRequest()
              : "Loading..."}
          </div>
        ) : (
          "You Must Log In To View This"
        )}
      </div>
    );
  }
}
