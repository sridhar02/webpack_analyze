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

function Module({ module }) {
  const Chunks = module.chunks.map((chunk) => (
    <a href={`#chunk/${chunk}`} key={chunk}>
      {chunk}
    </a>
  ));

  let flags;
  if (module.built) {
    flags = <span>built</span>;
  }
  if (!!module.cacheable) {
    flags = <Chip label="built" />;
  }

  return (
    <TableRow>
      <TableCell>{module.id}</TableCell>
      <TableCell>
        <pre>
        {module.name}
        </pre>
        </TableCell>
      <TableCell>{module.size}</TableCell>
      <TableCell>{Chunks}</TableCell>
      <TableCell>{flags}</TableCell>
    </TableRow>
  );
}

const useModulesStyles = makeStyles({
  table: {
    marginTop: "60px",
  },
});

export default function Modules() {
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
