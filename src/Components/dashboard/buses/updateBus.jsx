import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Photo from "../../../static/images/busbackground.jpg";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";

export default function Update() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
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
          <form onSubmit={handleSubmit}>
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
                defaultValue="Kigali bus service"
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
              />
              <TextField
                size="small"
                id="type"
                name="type"
                label="Type"
                type="text"
                defaultValue="3B"
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginLeft: { lg: 4, xs: 0 },
                  marginRight: { lg: 4, xs: 0 },
                  marginTop: { lg: 0, xs: 4 },
                }}
              />
              <TextField
                size="small"
                id="platenumber"
                name="platenumber"
                label="Plate Number"
                type="text"
                defaultValue="RAB 100 C"
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginTop: { lg: 0, xs: 3 },
                }}
              />
            </Grid>
            <Grid marginTop={4}>
              <TextField
                size="small"
                id="manufacturer"
                name="manufacturer"
                label="Manufacturer"
                type="text"
                defaultValue="Hyundai"
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
              />
              <TextField
                size="small"
                id="capacity"
                name="capacity"
                label="Capacity"
                type="number"
                defaultValue="100"
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginLeft: { lg: 4, xs: 0 },
                  marginRight: { lg: 4, xs: 0 },
                  marginTop: { lg: 0, xs: 4 },
                }}
              />
              <TextField
                size="small"
                contentEditable="true"
                id="yom"
                name="yom"
                label="Year manufactured"
                type="text"
                defaultValue="2000"
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginTop: { lg: 0, xs: 4 },
                }}
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
                    backgroundImage: `url(${Photo})`,
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
                    backgroundImage: `url(${Photo})`,
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
                    backgroundImage: `url(${Photo})`,
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
                    backgroundImage: `url(${Photo})`,
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
    </>
  );
}
