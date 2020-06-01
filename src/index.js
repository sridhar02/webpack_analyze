import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Home from "./components/home";
import Chunks from "./components/chunks";
import Assets from "./components/assets";
import Modules from "./components/modules";

import Warnings from "./components/warnings";
import Errors from "./components/errors";
import Hints from "./components/hints";
import Module from "./components/Module";
import Chunk from "./components/chunk";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/Modules" component={Modules} exact />
        <Route path="/chunks" component={Chunks} exact />
        <Route path="/assets" component={Assets} exact />
        <Route path="/warnings" component={Warnings} exact />
        <Route path="/errors" component={Errors} exact />
        <Route path="/hints" component={Hints} exact />
        <Route path="/module/:id" component={Module} exact />
        <Route path="/chunk/:id" component={Chunk} exact />
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
