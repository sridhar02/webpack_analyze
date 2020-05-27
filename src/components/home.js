import React from "react";

import { Grid, makeStyles } from "@material-ui/core";

import Navbar from "./navbar";
const example = require("../example1.json");

const useHomeStyles = makeStyles((theme) => ({
  common: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding:"19px",
    border:"1px solid #e3e3e3"
  },
}));

export default function Home() {
  const classes = useHomeStyles();
  console.log(example.time);
  return (
    <div>
      <Grid container style={{ marginTop: "80px" }}>
        <Navbar />
        <Grid item md={12}>
          <h1>webpack analyze</h1>
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <h1 className={classes.common}>
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webpack
              </a>

              <div>
                <a
                  href="https://github.com/webpack/webpack/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {example.version}
                </a>
              </div>
            </h1>
          </Grid>
          <Grid item md={3}>
            <h1 className={classes.common}>
              {example.time} <br /> ms
            </h1>
          </Grid>
          <Grid item md={6}>
            <h1 className={classes.common}>
              {" "}
              hash <br />
              {example.hash}
            </h1>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <h1 className={classes.common}>
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {example.modules.length}
                <br /> Modules
              </a>
            </h1>
          </Grid>
          <Grid item md={3}>
            <h1 className={classes.common}>
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {example.chunks.length}
                <br /> Chunks
              </a>
            </h1>
          </Grid>
          <Grid item md={3}>
            <h1 className={classes.common}>
              <a href="#assets" target="_blank" rel="noopener noreferrer">
                {example.assets.length}
                <br />
                assets
              </a>
            </h1>
          </Grid>
          <Grid item md={3}>
            <h1 className={classes.common}>
              <a href="#warnings" target="_blank" rel="noopener noreferrer">
                {example.warnings.length} warnings
              </a>
              <br />
              <a href="#errors" target="_blank" rel="noopener noreferrer">
                {example.errors.length}
                errors
              </a>
            </h1>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
