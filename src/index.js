import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDom.render(
  <Router basename="https://unres.github.io/personal_web/">
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Contact" component={Contact} />
        <Route component={() => <div>404 Not found 1</div>} />
      </Switch>
    </div>
  </Router>,
  document.querySelector("#root")
);
