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
import { connect } from "react-redux";
import Skeleton from "./Skeleton";
import { ToastContainer, toast, Slide } from "react-toastify";
import {
  getAllRoles,
  getRole as getRoleAction,
  deleteRole as deleteRoleAction,
} from "./../../../redux/Action/RoleActions";

/**
 * Table cell styles
 */

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#012241",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

/**
 * Table row styles
 */
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const RoleList = ({
  getAllRoles,
  fetchRoles,
  getRoleAction,
  deleteRoleAction,
  getRole,
  deleteRole,
  setIsCreate,
  setIsEdit,
  setRoleName,
  roleName,
  roleId,
  setRoleId,
  isDeleted,
  setIsDeleted,
  isUpdated,
  isCreated,
}) => {
  /**
   * Toastfy function
   * @param {*} toastMsg
   * @returns "Taost message"
   */

  const notify = (toastMsg) => toast(toastMsg);

  /**
   * Delete Role function
   * @param {*} uuid
   */

  const handelDeleteRole = (uuid) => {
    deleteRoleAction(uuid);
  };

  /**
   * Fetch all roles
   */

  React.useEffect(() => {
    const fetchData = async () => {
      await getAllRoles();
    };
    fetchData();
  }, [isCreated, isDeleted, isUpdated]);

  /**
   * Fetch a single role
   */

  React.useEffect(() => {
    if (roleId) {
      const fetchRole = () => {
        getRoleAction(roleId);
      };

      fetchRole();
    }
  }, [roleId]);

  /**
   * Update roleName after
   * Fetching a single role
   */

  React.useEffect(() => {
    if (getRole?.success) {
      setRoleName({
        ...roleName,
        role: getRole?.message?.data?.role?.roleName,
      });
    }
  }, [getRole?.success]);

  /**
   * Show a success message
   * After deleting a role
   */

  React.useEffect(() => {
    if (deleteRole?.success) {
      notify("Deleted successfully 👍🏾");
      setIsDeleted(true);
    }
  }, [deleteRole.success]);

  return (
    <React.Fragment>
    <ToastContainer autoClose={500} limit={2} transition={Slide}/>
      {fetchRoles.success ? (
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
              {fetchRoles.success &&
                fetchRoles?.message?.data?.roles?.rows.map((role) => (
                  <StyledTableRow key={role.uuid}>
                    <StyledTableCell component="th" scope="row">
                      {role.roleName}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        aria-label="edit"
                        style={{ color: "#012241" }}
                        onClick={() => {
                          setRoleId(role.uuid);
                          setIsCreate(false);
                          setIsEdit(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        aria-label="delete"
                        style={{ color: "red" }}
                        onClick={() => handelDeleteRole(role.uuid)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Skeleton />
      )}
    </React.Fragment>
  );
};

/**
 * @param {*} "reducers"
 * @returns "states"
 */

const mapStateToProps = ({
  fetchAllRolesReducer,
  getRoleReducer,
  deleteRoleReducer,
}) => {
  const { fetchRoles } = fetchAllRolesReducer;
  const { getRole } = getRoleReducer;
  const { deleteRole } = deleteRoleReducer;

  return { fetchRoles, getRole, deleteRole };
};

export default connect(mapStateToProps, {
  getAllRoles,
  getRoleAction,
  deleteRoleAction,
})(RoleList);
