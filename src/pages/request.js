import React, { Component } from "react";

export default class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  componentDidMount() {
    this.setState({
      records: this.props.records
    });
  }

  render() {
    console.log(this.props.records);
    return <div className="request">Requests</div>;
  }
}
