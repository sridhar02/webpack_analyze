import React from "react";

import { makeStyles } from "@material-ui/core";
import Navbar from "./navbar";
const example = require("../example1.json");

const useWarningsStyles = makeStyles({
  main: {
    border: "1px solid black",
    marginTop: "80px",
  },
});

export default function Warnings() {
  console.log(example.warnings);

  const classes = useWarningsStyles();
  const warnings = example.warnings.map((warning) => (
    <div key={warning} className={classes.main}>
      <h4>{warning}</h4>
    </div>
  ));

  return (
    <div>
      <Navbar />
      {warnings}
    </div>
  );
}
