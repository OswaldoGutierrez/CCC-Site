import React, { Component } from "react";

export default class Review extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      rating: "",
      comment: "",
      apiUrl: "",
      apiAction: "post"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        <div className="text">
          <h2>Reviews</h2>
        </div>

        <div>
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
      </form>
    );
  }
}
