import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "./Button.jsx";
import "../Dashboard.css";
import "./DriverAndOperator.css";
import DashboardLayout from "../../../Layouts/Dashboard";
import { fetchAllUsers, saveUser, updateUser } from "../../../redux/Action/DriversAndOperators/driversAndOperators.js";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoles } from "../../../redux/Action/RoleActions.js";

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

const genders = [
  "Male",
  "Female",
  "other",
];
function getStyles(gender, genderName, theme) {
  return {
    fontWeight:
      genderName.indexOf(gender) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const UpdatedOperator = () => {
    const theme = useTheme();
    const [genderName, setGenderName] = React.useState([]);
    const [name, setName] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [email, setEmail] = useState("");
    const [district, setDistrict] = useState("");
    const [sector, setSector] = useState("");
    const [cell, setCell] = useState("");
    const [telNumber , setTelNumber] = useState("");
    const [permitId , setPermitId] = useState("");
    const [carCapacity, setCarCapacity] = useState("");
    const [carPlate, setCarPlate] = useState("");
    const [vehicletype , setvehicletype] = useState("");
    const [roleId, setRoleId] = useState("");
    const [roleName, setRoleName] = useState("");
    const [driverNameError, setDriverNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telNumberError, setTelNumberError] = useState("");
    const UsersList = useSelector((state) => state.usersList);
  const { users } = UsersList;

  let id = location.href.split("?id=")[1];
  let driverID = decodeURIComponent(id);

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
    console.log('sending something')
    setDriverNameError(false);   
    setEmailError(false);
    setTelNumberError(false);
    if (name === "") {
        setDriverNameError(true);
        console.log('Enter name')
    }
    if (email === "") {
        setEmailError(true);
        console.log('Enter Email')
    }
    if (telNumber === "") {
        setTelNumberError(true);
        console.log('Enter Tel')
    } else {   
      if(users && users.data ){
        users.data.data.users.rows.map((driver)=>{
          driver.uuid=== driverID ? dispatch(updateUser( { name, gender: genderName[0], idNumber,district, sector, cell, email, permitId, telNumber, carPlate:null, carCapacity:null, vehicletype:null, roleId:driver.uuid, roleName: driver.roleName}, driverID)) :'no driver ID available'
          
        }) 
      }         

    }
};

useEffect(() => {
  dispatch(fetchAllUsers());
  return () => {};
}, []);

  return (
    <DashboardLayout>
      <ToastContainer/>
      <div className="dashboard">
        <div className="containt">
          <h3>Update Operator</h3>
          <hr />
          <div>
            <div className="imageicon">
              <div className="addimageicon">
                <CameraAltOutlinedIcon />
              </div>
            </div>
            <div>
            {users && users.data ? users.data.data.users.rows.map((driver, index) => driver.uuid=== driverID? (

            <Grid container columns={15} className="gridcontainer">
            <Grid item xs={3}>
              <InputLabel id="demo-multiple-name-label">
                Driver name
              </InputLabel>
              <TextField onChange={(e) => setName(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.name}/>
              <InputLabel id="demo-multiple-name-label">
                District
              </InputLabel>
              <TextField onChange={(e) => setDistrict(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.district} />
              <InputLabel id="demo-multiple-name-label">Email</InputLabel>
              <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.email}/>

            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-multiple-name-label">
                ID number
              </InputLabel>
              <TextField onChange={(e) => setIdNumber(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.idNumber}/>
              <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
              <TextField  onChange={(e) => setSector(e.target.value)}  id="outlined-basic" variant="outlined" placeholder={driver.sector}/>
              <InputLabel id="demo-multiple-name-label">
                Permit Id
              </InputLabel>
              <TextField onChange={(e) => setPermitId(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.permitId}/>

            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-multiple-name-label">Gender</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={genderName}
                onChange={handleChange}
                MenuProps={MenuProps}
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
              <TextField onChange={(e) => setCell(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.cell} />
              <InputLabel id="demo-multiple-name-label">
                Tel number
              </InputLabel>
              <TextField  onChange={(e) => setTelNumber(e.target.value)} id="outlined-basic" variant="outlined" placeholder={driver.telNumber}/>
              
            <button onClick={handleSubmit} style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px",paddingBottom: "10px",margin: "10px", backgroundColor: "#012241", color:"white"}}>Update</button>

            </Grid>

            </Grid>
            ): " " ) : ""} 
            
             
                       
          </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UpdatedOperator;
