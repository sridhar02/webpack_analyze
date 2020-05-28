import React from "react";

import { makeStyles } from "@material-ui/core";
import Navbar from "./navbar";
const example = require("../example1.json");

const useWarningsStyles = makeStyles({
  root: {
    marginTop: "80px",
  },
  main: {
    margin: "10px",
    backgroundColor: "#ddd",
    padding: "10px",
    marginBottom: "20px",
  },
  warning: {
    margin: "10px",
  },
});

export default function Warnings() {
  console.log(example.warnings);

  const classes = useWarningsStyles();
  const warnings = example.warnings.map((warning) => (
    <div key={warning} className={classes.main}>
      {warning.split("\n").map((module, index) => (
        <div key={index} className={classes.warning}>
          {module}
        </div>
      ))}
    </div>
  ));

  return (
    <div className={classes.root}>
      <Navbar />
      {warnings}
    </div>
  );
}
