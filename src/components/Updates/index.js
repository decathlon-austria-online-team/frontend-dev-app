import React from "react";
import "./index.css";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    //backgroundColor: theme.palette.common.black,
    backgroundColor: "#0082C3",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(update, date) {
  return { update, date };
}

const rows = [
  createData("content page - merchandasing zones", "28.12.2021"),
  createData("prestashop api live data - general", "10.12.2021"),
  createData("group modal codes under supermodal code - general", "18.11.2021"),
  createData(
    "products slider with variants (Austria) - sport page",
    "16.11.2021"
  ),
  createData("cross links - merchandasing zones", "27.10.2021"),
  createData("home page banner 3 - blue banner (text+icon X 3)", "02.09.2021"),
  createData("home page banner 2 - display 6 categories (3 X 2)", "31.08.2021"),
  createData("home page banner 1 - display 3 categories", "31.08.2021"),
  createData(
    "creation of product slider with CSV file (google sheet template available)",
    "25.08.2021"
  ),
  createData(
    "creation of sport page with CSV file (google sheet template available)",
    "19.08.2021"
  ),
];

const useStyles = makeStyles({
  /*  table: {
      minWidth: 700,
    },*/
});

const Updates = () => {
  const classes = useStyles();
  return (
    <div className="updates">
      <div className="updates__table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Update</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                {/*
                        <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.index}>
                  <StyledTableCell>{row.update}</StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  {/*
                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                        */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Updates;
