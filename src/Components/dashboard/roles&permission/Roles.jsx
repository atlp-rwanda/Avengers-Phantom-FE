import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import Box from "@mui/material/Box";
import { Outlet, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import OutlinedInput from "@mui/material/OutlinedInput";
import Modal from "../../modal/Modal.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Dashboard.css";
import DashboardLayout from "../../../Layouts/Dashboard.js";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import RoleList from "./RoleList";
import CreateRole from "./CreateRole.js";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),

  color: theme.palette.text.secondary,
}));

const Roles = () => {
  const [roleId, setRoleId] = React.useState("");
  const [isCreated, setIsCreated] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [isUpdated, setIsUpdated] = React.useState(false);
  const [roleName, setRoleName] = React.useState({
    role: "",
  });

  const [isCreate, setIsCreate] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  return (
    <DashboardLayout>
      <div className="dashboard__roles">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <CreateRole
                roleName={roleName}
                setRoleName={setRoleName}
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                roleId={roleId}
                setIsUpdated={setIsUpdated}
                setIsCreated={setIsCreated}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <RoleList
                setIsCreate={setIsCreate}
                setIsEdit={setIsEdit}
                setRoleName={setRoleName}
                roleName={roleName}
                roleId={roleId}
                setRoleId={setRoleId}
                isDeleted={isDeleted}
                setIsDeleted={setIsDeleted}
                isUpdated={isUpdated}
                isCreated={isCreated}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
