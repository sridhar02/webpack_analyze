import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, makeStyles, Chip } from "@material-ui/core";

import Navbar from "./navbar";
const example = require("../example1.json");

const useModulesStyles = makeStyles({
  root:{
    // maxWidth:"900  "
  },
  table: {
    marginTop: "60px",
  },
  chunk: {
    border: "1px solid #ddd",
    backgroundColor: "lightblue",
    margin: "10px",
    padding: "8px",
    borderRadius: "5px",
    textDecoration: "none",
  },
  pre: {
    border: "1px solid #ddd",
    backgroundColor: "#ddd",
    padding: "10px",
    borderRadius: "8px",
  },
});

function Module({ module }) {
  const classes = useModulesStyles();
  const Chunks = module.chunks.map((chunk) => (
    <a href={`/chunk/${chunk}`} key={chunk} className={classes.chunk}>
      {chunk}
    </a>
  ));

  let flags;
  if (module.built) {
    flags = <span>built</span>;
  }
  if (!!module.cacheable) {
    flags = <Chip label="built" variant="outlined" />;
  }

  return (
    <TableRow>
      <TableCell>
        <a href={`/module/${module.id}`} className={classes.chunk}>
          {module.id}
        </a>
      </TableCell>
      <TableCell>
        <div className={classes.pre}>{module.name}</div>
      </TableCell>
      <TableCell>{module.size}</TableCell>
      <TableCell>{Chunks}</TableCell>
      <TableCell>{flags}</TableCell>
    </TableRow>
  );
}

export default function Modules() {
  const classes = useModulesStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Chunks</TableCell>
              <TableCell>flags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {example.modules.map((module) => (
              <Module module={module} key={module.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
