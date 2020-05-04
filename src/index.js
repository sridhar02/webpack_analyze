import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "./components/home";
import Chunks from "./components/chunks";
import Assets from "./components/assets";
import Modules from "./components/modules";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/Modules" component={Modules} exact />
        <Route path="/chunks" component={Chunks} exact />
        <Route path="/assets" component={Assets} exact />
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
