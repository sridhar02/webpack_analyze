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

function Chunk({ chunk }) {
  console.log(chunk);
  const parents = chunk.parents.map((parent) => (
    <a href={`#chunk/${chunk}`} key={parent} style={{ margin: "10px" }}>
      {parent}
    </a>
  ));

  let flags;
  if (chunk.rendered && chunk.initial && chunk.entry) {
    flags = (
      <div>
        <Chip label="rendered" />
        <Chip label="initial" />
        <Chip label="entry" />
      </div>
    );
  } else if (chunk.rendered) {
    flags = <Chip label="rendered" />;
  }
  //   if (!!module.cacheable) {
  //   }

  return (
    <TableRow>
      <TableCell>{chunk.id}</TableCell>
      <TableCell></TableCell>
      <TableCell>{chunk.modules ? chunk.modules.length : ""}</TableCell>
      <TableCell>{chunk.size}</TableCell>
      <TableCell>{parents}</TableCell>
      <TableCell>{flags}</TableCell>
    </TableRow>
  );
}

const useModulesStyles = makeStyles({
  table: {
    marginTop: "60px",
  },
});

export default function Chunks() {
  console.log(example.modules);
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
