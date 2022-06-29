import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { FormValidation } from "./Validations.jsx";
import DashboardLayout from "./../../../Layouts/Dashboard";
import {getBusById} from "../../../redux/Action/fetchallbuses"
import { useEffect } from "react";
import { updateBus } from "../../../redux/Action/fetchallbuses";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer} from "react-toastify";

export default function Update(){
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
    values
  } = FormValidation();

  
  const busId = localStorage.getItem("busId")
  const dispatch = useDispatch()

    const getBus =async ()=>{
      dispatch(getBusById(busId))
    }
    
    useEffect(() => {
      getBus()
    },[])
  
  
  const bus = useSelector(state => state?.fetchbuses?.busById)
  
  const formBody = (({capacity, company, manufacturer, plateNumber, type, yearOfManufacturing }) => ({ capacity, company, manufacturer, plateNumber, type, yearOfManufacturing}))(values)

  const handleUpdateBus = () => {
    dispatch(updateBus(busId,formBody))
  }
  

  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="dashboard">
        <div className="containt">
          <Box
            sx={{
              p: 1,
              borderBottom: "1px solid #012241",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{ fontWeight: 700, fontSize: 18, color: "#012241" }}
            >
              Update bus
            </Typography>
          </Box>
          <form onSubmit={handleFormSubmit}>
            <Typography
              sx={{
                pt: 2,
                pb: 1,
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: 10,
              }}
            >
              Bus description
            </Typography>
            <Grid marginTop={2}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "300px 300px 300px",
                    xs: "100%",
                  },
                }}
              ></Box>
              <TextField
                size="small"
                id="company"
                name="company"
                label="Company"
                type="text"
                defaultValue={bus?.data.buses.company}
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["company"] && {
                  error: true,
                  helperText: errors["company"],
                })}
              />
              <TextField
                size="small"
                id="type"
                name="type"
                label="Type"
                type="text"
                defaultValue={bus?.data.buses.type}
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginLeft: { lg: 4, xs: 0 },
                  marginRight: { lg: 4, xs: 0 },
                  marginTop: { lg: 0, xs: 4 },
                }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["type"] && {
                  error: true,
                  helperText: errors["type"],
                })}
              />
              <TextField
                size="small"
                id="platenumber"
                name="plateNumber"
                label="Plate Number"
                type="text"
                value={bus?.data.buses.plateNumber}
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginTop: { lg: 0, xs: 3 },
                }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["platenumber"] && {
                  error: true,
                  helperText: errors["platenumber"],
                })}
              />
            </Grid>
            <Grid marginTop={4}>
              <TextField
                size="small"
                id="manufacturer"
                name="manufacturer"
                label="Manufacturer"
                type="text"
                defaultValue={bus?.data.buses.manufacturer}
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["manufacturer"] && {
                  error: true,
                  helperText: errors["manufacturer"],
                })}
              />
              <TextField
                size="small"
                id="capacity"
                name="capacity"
                label="Capacity"
                type="number"
                defaultValue={bus?.data.buses.capacity}
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginLeft: { lg: 4, xs: 0 },
                  marginRight: { lg: 4, xs: 0 },
                  marginTop: { lg: 0, xs: 4 },
                }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["capacity"] && {
                  error: true,
                  helperText: errors["capacity"],
                })}
              />
              <TextField
                size="small"
                contentEditable="true"
                id="yom"
                name="yearOfManufacturing"
                label="Year manufactured"
                type="text"
                defaultValue={bus?.data.buses.yearOfManufacturing}
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginTop: { lg: 0, xs: 4 },
                }}
                onBlur={handleInputValue}
                onChange={handleInputValue}
                {...(errors["yom"] && {
                  error: true,
                  helperText: errors["yom"],
                })}
              />
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
            <Grid
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  lg: "150px 150px 150px 150px",
                  xs: "100%",
                },
                gridGap: "1.5rem",
              }}
            >
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
                    backgroundImage: `url('https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/busbackground_lo7ra7.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { opacity: 0.8, transition: "0.8s" },
                  }}
                >
                  <AddAPhotoIcon sx={{ fontSize: 56, color: "#C4C4C4" }} />
                  <input type="file" hidden />
                </Button>
              </Box>
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
                    backgroundImage: `url('https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/busbackground_lo7ra7.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { opacity: 0.8, transition: "0.8s" },
                  }}
                >
                  <AddAPhotoIcon sx={{ fontSize: 56, color: "#C4C4C4" }} />
                  <input type="file" hidden />
                </Button>
              </Box>
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
                    backgroundImage: `url('https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/busbackground_lo7ra7.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { opacity: 0.8, transition: "0.8s" },
                  }}
                >
                  <AddAPhotoIcon sx={{ fontSize: 56, color: "#C4C4C4" }} />
                  <input type="file" hidden />
                </Button>
              </Box>
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
                    backgroundImage: `url('https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/busbackground_lo7ra7.jpg')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { opacity: 0.8, transition: "0.8s" },
                  }}
                >
                  <AddAPhotoIcon sx={{ fontSize: 56, color: "#C4C4C4" }} />
                  <input type="file" hidden />
                </Button>
              </Box>
            </Grid>

            <Grid sx={{ marginTop: 3, width: 110, marginLeft: "auto" }}>
              <Button
                type="submit"
                onClick={handleUpdateBus}
                // disabled={!formIsValid()}
                sx={{
                  background: "#012241",
                  color: "white",
                  width: 100,
                  borderRadius: 68,
                  fontSize: 10,
                  position: "relative",
                  right: 0,
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
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
