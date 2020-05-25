import React from "react";
import Navbar from "./navbar";
import { makeStyles } from "@material-ui/core";

const example = require("../example1.json");

const useErrorsStyles = makeStyles({
  main: {
    marginTop: "80px",
  },
  error: {
    margin: "10px",
    backgroundColor: "#ddd",
    padding: "10px",
    marginBottom: "20px",
  },
  style: {
    margin: "10px",
  },
});

export default function Errors() {
  const classes = useErrorsStyles();
  console.log(example.errors);
  return (
    <div className={classes.main}>
      <Navbar />
      {example.errors.length === 0 ? (
        <div>No errors Found</div>
      ) : (
        <div>
          {example.errors.map((error, index) => (
            <div key={index} className={classes.error}>
              {error.split("\n").map((module, index) => (
                <div key={index} className={classes.style}>
                  {module}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
