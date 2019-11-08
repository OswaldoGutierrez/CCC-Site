import React, { Component } from "react";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      rating: "",
      comment: "",
      editMode: false,
      apiUrl: "https://ccc-site-api.herokuapp.com/review",
      apiAction: "post",
      reviewItems: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (Object.keys(this.props.reviewToEdit).length > 0) {
      const { id, name, rating, comment } = this.props.reviewToEdit;

      this.props.clearReviewToEdit();

      this.setState({
        id: id,
        name: name || "",
        rating: rating || "",
        comment: comment || "",
        editMode: true,
        apiUrl: `https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/review/${id}`,
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
    console.log("Click");
    event.preventDefault();
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: {
        name: this.state.name,
        rating: this.state.rating,
        comment: this.state.comment
      }
    })
      .then(res => {
        if (this.state.editMode) {
          this.props.handleEditReviewSubmission();
        } else {
          this.props.handleNewReviewSubmission(res.data.review_item);
        }

        this.setState({
          name: "",
          rating: "",
          comment: "",
          editMode: false,
          apiUrl:
            "https://cors-anywhere.herokuapp.com/https://ccc-site-api.herokuapp.com/review",
          apiAction: "post"
        });
      })
      .catch(error => {
        console.log("Review form handleSubmit error", error);
      });
  }

  getReviewItems() {
    axios
      .get("https://ccc-site-api.herokuapp.com/reviews")
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
      <div className="one">
        <form onSubmit={this.handleSubmit} className="review-form">
          <div className="text">
            <h2>Reviews</h2>
          </div>

          <div className="inputs">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              name="rating"
              type="text"
              placeholder="Rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />

            <input
              name="comment"
              type="text"
              placeholder="Comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
          <div className="rev-itm">
            {this.state.reviewItems.length > 0
              ? this.renderReview()
              : "Loading..."}
          </div>
        </form>
      </div>
    );
  }
}
