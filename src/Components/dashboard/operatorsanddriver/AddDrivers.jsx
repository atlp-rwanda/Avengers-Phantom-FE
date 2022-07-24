import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "./Button.jsx";
import "../Dashboard.css";
import "./DriverAndOperator.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DashboardLayout from "./../../../Layouts/Dashboard";
import { saveUser } from "../../../redux/Action/DriversAndOperators/driversAndOperators.js";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoles } from "../../../redux/Action/RoleActions.js";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Input = styled("input")({
  display: "none",
});

const genders = ["Male", "Female", "other"];
function getStyles(gender, genderName, theme) {
  return {
    fontWeight:
      genderName.indexOf(gender) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddDrivers = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [genderName, setGenderName] = React.useState([]);
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [permitId, setPermitId] = useState("");
  const [carCapacity, setCarCapacity] = useState("");
  const [carPlate, setCarPlate] = useState("");
  const [vehicletype, setvehicletype] = useState("");
  const [roleId, setRoleId] = useState("");
  const [roleName, setRoleName] = useState("");
  const [driverNameError, setDriverNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telNumberError, setTelNumberError] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const allRole = useSelector(
    (state) => state?.fetchAllRolesReducer?.fetchRoles?.message
  );

  const DriverSave = useSelector((state) => state.userSave);
  const { loading, user, error } = DriverSave;

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setGenderName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);
    setDriverNameError(false);
    setEmailError(false);
    setTelNumberError(false);
    if (name === "") {
      setDriverNameError(true);
      console.log("Enter name");
    }
    if (email === "") {
      setEmailError(true);
      console.log("Enter Email");
    }
    if (telNumber === "") {
      setTelNumberError(true);
      console.log("Enter Tel");
    } else {
      if (allRole) {
        allRole.data.roles.rows.find((item) => {
          item.roleName === "driver"
            ? dispatch(
                saveUser(
                  {
                    name,
                    gender: genderName[0],
                    idNumber,
                    district,
                    sector,
                    cell,
                    email,
                    permitId,
                    telNumber,
                    carPlate: null,
                    carCapacity: null,
                    vehicletype: null,
                    roleId: item.uuid,
                    roleName: item.roleName,
                  },
                  item.uuid
                )
              )
            : "no driver ID available";
        });
      }
    }
  };

  useEffect(() => {
    dispatch(getAllRoles());
    return () => {};
  }, []);

  return (
    <DashboardLayout>
    <ToastContainer autoClose={500} limit={2} transition={Slide}/>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="dashboard">
        <div className="containt">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#012241",
              marginBottom: "50px",
              textTransform: "uppercase",
            }}
          >
            Register New Driver
          </Typography>

          <div>
            <div>
              <Grid
                container
                columns={15}
                spacing={2}
                className="gridcontainer"
              >
                <Grid item xs={12}>
                  <div className="imageicon">
                    <div className="addimageicon">
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera style={{ color: "#012241" }} />
                        </IconButton>
                      </label>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id="demo-multiple-name-label">
                    Driver name
                  </InputLabel>
                  <TextField
                    onChange={(e) => setName(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Driver name"
                  />
                  <InputLabel id="demo-multiple-name-label">
                    District
                  </InputLabel>
                  <TextField
                    onChange={(e) => setDistrict(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="District"
                  />
                  <InputLabel id="demo-multiple-name-label">Email</InputLabel>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id="demo-multiple-name-label">
                    ID number
                  </InputLabel>
                  <TextField
                    onChange={(e) => setIdNumber(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="ID number"
                  />
                  <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
                  <TextField
                    onChange={(e) => setSector(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Sector"
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Permit Id
                  </InputLabel>
                  <TextField
                    onChange={(e) => setPermitId(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Permit Id"
                  />
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={genderName}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                    size="small"
                    fullWidth
                  >
                    {genders.map((gender) => (
                      <MenuItem
                        key={gender}
                        value={gender}
                        style={getStyles(gender, genderName, theme)}
                      >
                        {gender}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel id="demo-multiple-name-label">Cell</InputLabel>
                  <TextField
                    onChange={(e) => setCell(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Cell"
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Tel number
                  </InputLabel>
                  <TextField
                    onChange={(e) => setTelNumber(e.target.value)}
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Phone"
                  />

                  <button
                    onClick={handleSubmit}
                    style={{
                      cursor: "pointer",
                      borderStyle: "none",
                      borderRadius: "3px",
                      width: "150px",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      margin: "10px",
                      backgroundColor: "#012241",
                      color: "white",
                    }}
                  >
                    Add
                  </button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddDrivers;
