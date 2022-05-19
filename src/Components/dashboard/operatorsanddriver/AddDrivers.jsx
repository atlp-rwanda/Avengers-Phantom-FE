import React, { useState } from "react";
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
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import "./DriverAndOperator.css";



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
  "Bisexual",
  "Gay",
  "Homosexual",
  "Resbian",
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
const AddDrivers = () => {
  const theme = useTheme();
  const [genderName, setGenderName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenderName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [DriverName, setDriverName] = useState("")
  const [DriverDistrict, setDriverDistrict] = useState(null)
  const [DriverEmail, setDriverEmail] = useState(null)
  const [DriverCarplate, setDriverCarplate] = useState(null)
  const [DriverIdNumber, setDriverIdNumber] = useState(null)
  const [DriverSector, setDriverSector] = useState(null)
  const [DriverPermit, setDriverPermit] = useState(null)
  const [DriverCapacity, setDriverCapacity] = useState(null)
  const [DriverCell, setDriverCell] = useState(null)
  const [DriverPhone, setDriverPhone] = useState(null)
  const [DriverVehicle, setDriverVehicle] = useState(null)
  const [Driveradd, setDriveradd] = useState(0)


  const handleDriverName = (e) => {
    // e.preventDefault();
    setDriverName(e.target.value)
    console.log("driver name");
    console.log(DriverName);

    // const driver = document.getElementById("outlined-basic");
    // let drivername = driver.value;
    // console.log(drivername);
  }
  const handleDriverDistrict = () => {
    console.log("driver name")
    setDriverDistrict('')
  }
  const handleDriverEmail = () => {
    console.log("driver Email")
    setDriverEmail('')
  }
  const handleDriverCarplate = () => {
    console.log("driver Carplate")
    setDriverCarplate('')
  }
  const handleDriverIdNumber = () => {
    console.log("driver IdNumber")
    setDriverIdNumber('')
  }
  const handleDriverSector = () => {
    console.log("driver Sector")
    setDriverSector('')
  }
  const handleDriverPermit = () => {
    console.log("driver Permit")
    setDriverPermit('')
  }
  const handleDriverCapacity = () => {
    console.log("driver Capacity")
    setDriverCapacity('')
  }
  const handleDriverCell = () => {
    console.log("driver Cell")
    setDriverCell('')
  }
  const handleDriverPhone = () => {
    console.log("driver Phone")
    setDriverPhone('')
  }
  const handleDriverVehicle = () => {
    console.log("driver Vehicle")
    setDriverVehicle('')
  }
  const handleDriverAdd = (e) => {
    e.preventDefault();
    console.log("driver added successfully")
    setDriveradd(Driveradd + 1)
  }

  const driver = document.getElementById("outlined-basic");

  let drivername = driver.value;
  console.log(drivername);



  return (
    <div>
      <DashNavbar style={{ position: "fixed" }} />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3>Register new driver</h3>
          <hr />
          <div>
            <div className="imageicon">
              <div className="addimageicon">
                <CameraAltOutlinedIcon />
              </div>
            </div>
            <div>
              <Grid container columns={15} className="gridcontainer">
                <Grid item xs={5}>
                  <InputLabel id="demo-multiple-name-label">
                    Driver name
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverName}
                  />
                  <InputLabel id="demo-multiple-name-label">
                    District
                  </InputLabel >
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverDistrict}
                  />
                  <InputLabel id="demo-multiple-name-label">Email</InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverEmail}
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Carplate
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverCarplate}
                  />
                </Grid>
                <Grid item xs={5}>
                  <InputLabel id="demo-multiple-name-label">
                    ID number
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverIdNumber}
                  />
                  <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverSector}
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Permit Id
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverPermit}
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Capacity
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverCapacity}
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
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverCell}
                  />
                  <InputLabel id="demo-multiple-name-label">
                    Tell number
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverPhone}
                  />
                  <InputLabel
                    id="demo-multiple-name-label"
                    className="inputlabel"
                  >
                    Vehicle
                  </InputLabel>
                  <TextField id="outlined-basic" variant="outlined"
                    onChange={handleDriverVehicle}
                  />
                  <Button text="Add" bcolor="#012241"
                    handlerFunc={() => console.log("UN click here!")}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDrivers;
