import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationComponet from "./navigation/navigation-container";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Request from "./pages/request";
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
      <div className="app">
        <BrowserRouter>
          <div>
            <NavigationComponet />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/service" component={Service} />
              <Route path="/requests" component={Request} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
