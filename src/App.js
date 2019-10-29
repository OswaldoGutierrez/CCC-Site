import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Icons from "./extra/icons";

import "./styles/main.scss";

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>CCC Site</h1>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/service">Service</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
        </Switch>
      </BrowserRouter>
    );
  }
}
