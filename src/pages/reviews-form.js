import React, { Component } from "react";
import axios from "axios";

import Review from "../form/reviews";

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewItems: [],
      reviewToEdit: {}
    };

    this.handleNewReviewSubmission = this.handleNewReviewSubmission.bind(this);
    this.handleEditReviewSubmission = this.handleEditReviewSubmission.bind(
      this
    );
    this.handleReviewSubmissionError = this.handleReviewSubmissionError.bind(
      this
    );
    this.clearReviewToEdit = this.clearReviewToEdit.bind(this);
  }

  clearReviewToEdit() {
    this.setState({
      reviewToEdit: {}
    });
  }

  handleEditReviewSubmission() {
    this.getReviewItems();
  }

  handleNewReviewSubmission(reviewItem) {
    this.setState({
      reviewItems: [reviewItem].concat(this.state.reviewItems)
    });
  }

  handleReviewSubmissionError(error) {
    console.log("handleReviewSubmissionError error", error);
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
        return this.props.handleReviews(res.data);
      })
      .catch(err => {
        console.log("err in getReviewItems", err);
      });
  }

  componentDidMount() {
    this.getReviewItems();
  }

  renderReview() {
    return this.state.reviewItems.map(revItem => {
      return (
        <div className="review-items">
          <div className="name">{revItem.name}</div>
          <div className="rating">{revItem.rating}</div>
          <div className="comment">{revItem.comment}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="review-form-wrapper">
        <Review
          handleNewReviewSubmission={this.handleNewReviewSubmission}
          handleEditReviewSubmission={this.handleEditReviewSubmission}
          handleReviewSubmissionError={this.handleReviewSubmissionError}
          clearReviewToEdit={this.clearReviewToEdit}
          reviewToEdit={this.state.reviewToEdit}
        />
      </div>
    );
  }
}
