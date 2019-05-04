import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDom.render(
  <Router basename="https://unres.github.io/personal_web/">
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>,
  document.querySelector("#root")
);
