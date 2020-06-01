import React from "react";
import { useParams } from "react-router-dom";

import Table from "@material-ui/core/Table";
import { Paper, Grid } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

import Navbar from "./navbar";
const example = require("../example1.json");

function ReasonsTable({ id }) {
  console.log(example.modules[id].reasons);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>type</TableCell>
            <TableCell>module</TableCell>
            <TableCell>user request</TableCell>
            <TableCell> location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {example.modules[id].reasons.map((reason, index) => (
            <TableRow key={index}>
              <TableCell>{reason.type}</TableCell>
              <TableCell>
                <pre>{reason.module.split("!").join("\n")}</pre>
              </TableCell>
              <TableCell>
                <pre>{reason.userRequest.split("!").join("\n")}</pre>
              </TableCell>
              <TableCell>{reason.loc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function DependenciesTable({ id }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>type</TableCell>
            <TableCell>module</TableCell>
            <TableCell>user request</TableCell>
            <TableCell> location</TableCell>
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

export default function Module() {
  let { id } = useParams();

  console.log(example.modules[id].reasons);

  return (
    <Grid container style={{ marginTop: "80px" }}>
      <Navbar />
      <Grid container>
        <Grid item md={6}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
      </Grid>

      <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={6}></Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <h4>reasons</h4>
          <ReasonsTable id={id} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <h4>dependencies</h4>
          <DependenciesTable id={id} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12}>
          <pre>{example.modules[id].source}</pre>
        </Grid>
      </Grid>
    </Grid>
  );
}
