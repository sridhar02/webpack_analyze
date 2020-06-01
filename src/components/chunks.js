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
});

function Chunk({ chunk }) {
  const classes = useModulesStyles();
  const parents = chunk.parents.map((parent) => (
    <a href={`/chunk/${parent}`} key={parent} className={classes.chunk}>
      {parent}
    </a>
  ));

  let flags;
  if (chunk.rendered && chunk.initial && chunk.entry) {
    flags = (
      <div>
        <Chip variant="outlined" label="rendered" />
        <Chip variant="outlined" label="initial" />
        <Chip variant="outlined" label="entry" />
      </div>
    );
  } else if (chunk.rendered) {
    flags = <Chip label="rendered" variant="outlined" />;
  }

  return (
    <TableRow>
      <TableCell>
        <a className={classes.chunk} href={`/chunk/${chunk.id}`}>
          {chunk.id}
        </a>
      </TableCell>
      <TableCell></TableCell>
      <TableCell>{chunk.modules ? chunk.modules.length : ""}</TableCell>
      <TableCell>{chunk.size}</TableCell>
      <TableCell>{parents}</TableCell>
      <TableCell>{flags}</TableCell>
    </TableRow>
  );
}

export default function Chunks() {
  const classes = useModulesStyles();
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Modules</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>parents</TableCell>
              <TableCell>flags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {example.chunks.map((chunk) => (
              <Chunk chunk={chunk} key={chunk.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
