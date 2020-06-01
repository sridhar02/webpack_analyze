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
  pre: {
    border: "1px solid #ddd",
    backgroundColor: "#ddd",
    padding: "10px",
    borderRadius: "8px",
  },
});

function Asset({ asset }) {
  const classes = useModulesStyles();
  console.log(asset.chunkNames);
  const chunks = asset.chunks.map((chunk) => (
    <a href={`/chunk/${chunk}`} key={chunk} style={{ margin: "10px" }}>
      {chunk}
    </a>
  ));

  const flags = <Chip label="emitted" />;
  
  const names = asset.chunkNames.map((name, index) => (
    <Chip label={name} key={index} />
  ));

  return (
    <TableRow>
      <TableCell>
        <pre className={classes.pre}>
          <code>{asset.name}</code>
        </pre>
      </TableCell>
      <TableCell>{asset.size} bytes</TableCell>
      <TableCell>{chunks}</TableCell>
      <TableCell>{asset.chunkNames.length !== 0 ? names : null } </TableCell>
      <TableCell>{asset.emitted ? flags : null}</TableCell>
    </TableRow>
  );
}

function Assets() {
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

export default Assets;
