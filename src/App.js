import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationComponet from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ReviewForm from "./pages/reviews-form";
import Request from "./pages/request";
import ServiceForm from "./pages/service-form";
import Icons from "./extra/icons";
import Auth from "./pages/auth";

import "./styles/main.scss";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      reviewRecords: []
    };

    Icons();
  }

  handleReviews = data => {
    this.setState({
      reviewRecords: data
    });
  };

  handleRecords = data => {
    this.setState({
      records: data
    });
  };

  render() {
    console.log("from app", this.state.records);
    console.log("from app", this.state.reviewRecords);
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <NavigationComponet />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/reviews-form"
                render={props => (
                  <ReviewForm {...props} handleReviews={this.handleReviews} />
                )}
              />
              <Route
                path="/service-form"
                render={props => (
                  <ServiceForm {...props} handleRecords={this.handleRecords} />
                )}
              />
              <Route
                path="/requests"
                render={props => (
                  <Request
                    {...props}
                    records={this.state.records}
                    reviewRecords={this.state.reviewRecords}
                  />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
