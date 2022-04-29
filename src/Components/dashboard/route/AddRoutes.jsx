import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Buttons from "../operatorsanddriver/Button.jsx";
import "./AddRoutes.css";
import { Container, Typography } from "@mui/material";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";

const AddRoutes = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3 style={{ display: "inline" }}>Create New Route</h3>
          <hr />
          <Link to="/routes">
            <Buttons text="Go back" bcolor="#012241" />
          </Link>
          <div>
            <form className="addroute">
              <div style={{ marginBottom: 70 }} className="routeDetails">
                <Box sx={{ display: "flex", my: 2 }}>
                  <Typography sx={{ width: 200 }}>Route ID </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route ID"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 300 }}
                  />
                </Box>
                <Box sx={{ display: "flex", my: 2 }}>
                  <Typography sx={{ width: 200 }}>
                    Route Starting Point{" "}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route Starting Point"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 300 }}
                  />
                </Box>
                <Box sx={{ display: "flex", my: 2 }}>
                  <Typography sx={{ width: 200 }}>
                    Route Destination{" "}
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route Destination"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 300 }}
                  />
                </Box>
                <Box sx={{ display: "flex", my: 2 }}>
                  <Typography sx={{ width: 200 }}>Route Stop </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route Stop"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 300 }}
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ width: 200 }}>Route Stop </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route Stop"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 250 }}
                  />
                  <AddIcon sx={{ py: 1, px: 1 }} />
                </Box>
              </div>
              <div style={{ margin: " 0 60px  " }} className="submit">
                <Buttons text="Create" bcolor="#012241" />
                <Buttons text="Resert" bcolor="rgb(102, 99, 99)" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoutes;
