import React from "react";
import Grid from "@material-ui/core/Grid";
// import { Typography } from "@material-ui/core";

export default function Home({ classes }) {
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <h1>Webpack analyze</h1>
        </Grid>
        <Grid container>
          <Grid item md={3}>
            <h1>
              <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Webpack
              </a>

              <div>
                <a
                  href="https://github.com/webpack/webpack/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  version
                </a>
              </div>
            </h1>
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
