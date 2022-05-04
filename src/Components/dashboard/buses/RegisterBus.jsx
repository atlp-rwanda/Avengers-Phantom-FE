import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";

export default function Register() {
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
              Register new bus
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
              <TextField
                size="small"
                id="company"
                name="company"
                label="Company"
                type="text"
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
              />
              <TextField
                size="small"
                id="type"
                name="type"
                label="Type"
                type="text"
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
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginTop: { lg: 0, xs: 4 },
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
                sx={{ minWidth: { lg: 250, xs: "100%" } }}
              />
              <TextField
                size="small"
                id="capacity"
                name="capacity"
                label="Capacity"
                type="number"
                sx={{
                  minWidth: { lg: 250, xs: "100%" },
                  marginLeft: { lg: 4, xs: 0 },
                  marginRight: { lg: 4, xs: 0 },
                  marginTop: { lg: 0, xs: 4 },
                }}
              />
              <TextField
                size="small"
                id="yom"
                name="yom"
                label="Year manufactured"
                type="text"
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
                    background: "rgba(229, 229, 229, 0.65)",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { background: "rgba(229, 229, 229, 0.65)" },
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
                    background: "rgba(229, 229, 229, 0.65)",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { background: "rgba(229, 229, 229, 0.65)" },
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
                    background: "rgba(229, 229, 229, 0.65)",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { background: "rgba(229, 229, 229, 0.65)" },
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
                    background: "rgba(229, 229, 229, 0.65)",
                    width: { lg: 150, xs: "100%" },
                    height: 150,
                    borderRadius: 5,
                    "&:hover": { background: "rgba(229, 229, 229, 0.65)" },
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
