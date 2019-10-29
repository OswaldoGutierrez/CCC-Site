import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>CCC Site</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
