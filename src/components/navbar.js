import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

const useNavbarStyles = makeStyles({
  text: {
    color: "white",
    marginRight: "25px",
  },
});

export default function Navbar() {
  const classes = useNavbarStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>
            <Link href="/open" className={classes.text}>
              Open
            </Link>
          </Typography>
          <Typography>
            <Link href="/home" className={classes.text}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link href="/Modules" className={classes.text}>
              Modules
            </Link>
          </Typography>
          <Typography>
            <Link href="/chunks" className={classes.text}>
              Chunks
            </Link>
          </Typography>
          <Typography>
            <Link href="/assets" className={classes.text}>
              Assets
            </Link>
          </Typography>
          <Typography>
            <Link href="/warnings" className={classes.text}>
              Warnings
            </Link>
          </Typography>
          <Typography>
            <Link href="/errors" className={classes.text}>
              Errors
            </Link>
          </Typography>
          <Typography>
            <Link href="/hints" className={classes.text}>
              Hints
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
