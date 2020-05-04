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

function Asset({ asset }) {
  console.log(asset);
  const chunks = asset.chunks.map((chunk) => (
    <a href={`#chunk/${chunk}`} key={chunk} style={{ margin: "10px" }}>
      {chunk}
    </a>
  ));

  let flags;
  if (module.emitted) {
    flags = <Chip label="emitted" />;
  } else {
    flags = <span></span>
  }
  //   //   if (!!module.cacheable) {
  //   //   }

  return (
    <TableRow>
      <TableCell>
        <pre>
          <code>{asset.name}</code>
        </pre>
      </TableCell>
      <TableCell>{asset.size} bytes</TableCell>
      <TableCell>{chunks}</TableCell>
      <TableCell></TableCell>
      <TableCell>{flags}</TableCell>
    </TableRow>
  );
}

const useModulesStyles = makeStyles({
  table: {
    marginTop: "60px",
  },
});

export default function Assets() {
  console.log(example.assets);
  const classes = useModulesStyles();
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Assets</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Chunks</TableCell>
              <TableCell>names</TableCell>
              <TableCell>flags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {example.assets.map((asset) => (
              <Asset asset={asset} key={asset.name} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
