import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LoadingSkeleton from "react-loading-skeleton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#012241",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Skeleton = () => {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ROLE TITLE</StyledTableCell>
              <StyledTableCell align="right">EDIT</StyledTableCell>
              <StyledTableCell align="right">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <LoadingSkeleton
                  width="100%"
                  height="20px"
                  baseColor="#01224152"
                  highlightColor="rgba(255, 255, 255, 0.161)"
                />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};
export default Skeleton;
