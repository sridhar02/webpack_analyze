import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "./components/home";
import Modules from "./components/modules";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/Home" component={Home} exact />
        <Route path="/Modules" component={Modules} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
