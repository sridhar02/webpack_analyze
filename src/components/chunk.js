import React from "react";
import { useParams } from "react-router-dom";

import Table from "@material-ui/core/Table";
import { Paper, Grid, makeStyles } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

import Navbar from "./navbar";
const example = require("../example1.json");

const useChunkStyles = makeStyles((theme) => ({
  container: {
    padding: "10px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    margin: "10px",
    borderRadius: "8px",
  },
  pre: {
    border: "1px solid #ddd",
    backgroundColor: "#ddd",
    padding: "10px",
    borderRadius: "8px",
  },
}));

function ChunkTable({ id }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>chunks</TableCell>
            <TableCell>flags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {example.chunks[id].modules.map((chunk, index) => (
            <TableRow key={index}>
              <TableCell>{chunk.id}</TableCell>
              <TableCell>
                <pre>{chunk.name}</pre>
              </TableCell>
              <TableCell>{chunk.size} bytes</TableCell>
              <TableCell>
                {chunk.chunks.map((chunk, index) => (
                  <a
                    key={index}
                    href={`/chunk/${chunk}`}
                    style={{ margin: "10px" }}
                  >
                    {chunk}
                  </a>
                ))}
              </TableCell>
              <TableCell>{chunk.flags}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function OriginTable({ id }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>reasons</TableCell>
            <TableCell>name</TableCell>
            <TableCell>module</TableCell>
            <TableCell></TableCell>
            <TableCell>location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {example.chunks[id].origins.map((origin, index) => (
            <TableRow key={index}>
              <TableCell></TableCell>
              <TableCell>{origin.name}</TableCell>
              <TableCell>
                {typeof origin.moduleUid === "number" ? (
                  <a href="/">{origin.moduleId}</a>
                ) : (
                  <span>{origin.moduleId}</span>
                )}
              </TableCell>
              <TableCell>
                <pre>{origin.moduleName.split("!").join("\n")}</pre>
              </TableCell>
              <TableCell>{origin.loc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Chunk() {
  let { id } = useParams();
  const classes = useChunkStyles();
  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Navbar />
      <Grid container>
        <Grid item md={3} className={classes.container}>
          <h4>
            Chunk Id <br />
            <br />
            {example.chunks[id].id}
          </h4>
        </Grid>
        <Grid item md={4} className={classes.container}>
          <h4>
            Size <br /> <br /> {example.chunks[id].size}
          </h4>
        </Grid>
        <Grid item md={4} className={classes.container}>
          <h4>
            names <br /> <br />
            {example.chunks[id].names.map((name, index) => (
              <code key={index}> {name}</code>
            ))}
          </h4>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={5} className={classes.container}>
          <h4>parents</h4>
        </Grid>
        <Grid item md={6} className={classes.container}>
          <h4>
            files <br />{" "}
            {example.chunks[id].files.map((file, index) => (
              <a key={index} href="/assets">
                {file}
              </a>
            ))}{" "}
          </h4>
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item md={12}>
          <h4>origins</h4>
          <OriginTable id={id} />
        </Grid>
      </Grid>
      <Grid container className={classes.container}>
        <Grid item md={12}>
          <h4>Modules</h4>
          <ChunkTable id={id} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Chunk;
