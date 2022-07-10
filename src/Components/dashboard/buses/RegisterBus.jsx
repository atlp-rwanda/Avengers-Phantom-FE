import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DashboardLayout from "./../../../Layouts/Dashboard";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import { FormValidation } from "./Validations.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addBus } from "../../../redux/Action/fetchallbuses";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function Register() {
  const { handleInputValue, handleFormSubmit, formIsValid, errors, values } =
    FormValidation();
  const formBody = (({
    capacity,
    company,
    manufacturer,
    plateNumber,
    type,
    yearOfManufacturing,
  }) => ({
    capacity,
    company,
    manufacturer,
    plateNumber,
    type,
    yearOfManufacturing,
  }))(values);

  const dispatch = useDispatch();

  const handleCreateBus = () => {
    dispatch(addBus(formBody));
  };

  return (
    <DashboardLayout>
      <ToastContainer />
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
            Register new bus
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <div className="register__bus">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="company"
                    name="company"
                    label="Company"
                    type="text"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["company"] && {
                      error: true,
                      helperText: errors["company"],
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="type"
                    name="type"
                    label="Type"
                    type="text"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["type"] && {
                      error: true,
                      helperText: errors["type"],
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="platenumber"
                    name="plateNumber"
                    label="Plate Number"
                    type="text"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["platenumber"] && {
                      error: true,
                      helperText: errors["platenumber"],
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="manufacturer"
                    name="manufacturer"
                    label="Manufacturer"
                    type="text"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["manufacturer"] && {
                      error: true,
                      helperText: errors["manufacturer"],
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="capacity"
                    name="capacity"
                    label="Capacity"
                    type="number"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["capacity"] && {
                      error: true,
                      helperText: errors["capacity"],
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                  <TextField
                    size="small"
                    fullWidth
                    id="yom"
                    name="yearOfManufacturing"
                    label="Year manufactured"
                    type="text"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    {...(errors["yom"] && {
                      error: true,
                      helperText: errors["yom"],
                    })}
                  />
                </Grid>
              </Grid>
              <Typography
                sx={{
                  pt: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: 10,
                }}
              >
                Bus images
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        p: 2,
                        fontWeight: 700,
                        fontSize: 12,
                      }}
                    >
                      Front View
                    </Typography>
                    <Button
                      component="label"
                      sx={{
                        height: "7rem",
                        width: "7rem",
                        borderRadius: "5px",
                        backgroundColor: "rgba(201, 201, 201, 0.395)",
                      }}
                    >
                      <PhotoCamera sx={{ color: "#012241" }} />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        p: 2,
                        fontWeight: 700,
                        fontSize: 12,
                      }}
                    >
                      Back View
                    </Typography>
                    <Button
                      component="label"
                      sx={{
                        height: "7rem",
                        width: "7rem",
                        borderRadius: "5px",
                        backgroundColor: "rgba(201, 201, 201, 0.395)",
                      }}
                    >
                      <PhotoCamera sx={{ color: "#012241" }} />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        p: 2,
                        fontWeight: 700,
                        fontSize: 12,
                      }}
                    >
                      Side View
                    </Typography>
                    <Button
                      component="label"
                      sx={{
                        height: "7rem",
                        width: "7rem",
                        borderRadius: "5px",
                        backgroundColor: "rgba(201, 201, 201, 0.395)",
                      }}
                    >
                      <PhotoCamera sx={{ color: "#012241" }} />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <Box>
                    <Typography
                      sx={{
                        textTransform: "capitalize",
                        textAlign: "center",
                        p: 2,
                        fontWeight: 700,
                        fontSize: 12,
                      }}
                    >
                      Inside View
                    </Typography>
                    <Button
                      component="label"
                      sx={{
                        height: "7rem",
                        width: "7rem",
                        borderRadius: "5px",
                        backgroundColor: "rgba(201, 201, 201, 0.395)",
                      }}
                    >
                      <PhotoCamera sx={{ color: "#012241" }} />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <Grid sx={{ marginTop: 3, width: 110, marginLeft: "auto" }}>
                <Button
                  type="submit"
                  onClick={handleCreateBus}
                  sx={{
                    background: "#012241",
                    color: "white",
                    width: 150,
                    borderRadius: "3px",
                    fontSize: 10,
                    right: 110,
                    position: "relative",
                    "&:hover": {
                      background: "#012241",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  <SaveIcon sx={{ marginRight: 1, fontSize: 15 }} />
                  Save
                </Button>
              </Grid>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
