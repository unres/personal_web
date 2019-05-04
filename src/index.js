import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDom.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>,
  document.querySelector("#root")
);
