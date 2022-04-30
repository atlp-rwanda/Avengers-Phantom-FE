import React from "react";
import "./AddRoutes.css";
import {
  Box,
  Container,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SingleRoute = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3 style={{ display: "inline" }}>Single Route Report </h3>

          <hr />
          <Link to="/">
            <ArrowBackIcon />
          </Link>

          <form className="addroute">
            <div className="Container" style={{}}>
              <Container
                style={{
                  marginBottom: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
                xs={{ display: "flex", flexDirection: "column" }}
                className="routeDetails"
              >
                <Box
                  sx={{
                    flex: 1,
                    height: 350,
                    border: "3px solid #c4c4c4",
                    mx: 2,
                  }}
                  className="coordinate"
                >
                  <Box sx={{ my: 0.5, px: 2 }}>
                    <Box>
                      <Typography>Starting Point: </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ display: "inline-block" }}>
                        1° 56' 41.856'' S 30° 3' 43.38'' E
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ mb: 1, px: 2 }}>
                    <Box>
                      <Typography>Destination Point: </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        1° 56' 41.856'' S 30° 3' 43.38'' E
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    border: "3px solid #c4c4c4",
                    height: 350,
                    mx: 2,
                  }}
                  className="routeID"
                >
                  <Box sx={{ mb: 1, px: 2 }}>
                    <Box my={0.5} sx={{ textAlign: "center" }}>
                      <Typography sx={{ display: "inline-block" }}>
                        Route ID:{" "}
                      </Typography>
                      <Typography sx={{ display: "inline-block" }}>
                        {" "}
                        444{" "}
                      </Typography>
                    </Box>
                    <Box my={2}>
                      <Typography sx={{ display: "inline-block" }}>
                        {" "}
                        Starting:{" "}
                      </Typography>
                      <Typography sx={{ display: "inline-block" }}>
                        Kimironko{" "}
                      </Typography>
                    </Box>
                    <Box my={2}>
                      <Typography sx={{ display: "inline-block" }}>
                        {" "}
                        Destination:{" "}
                      </Typography>
                      <Typography sx={{ display: "inline-block" }}>
                        Nyabugogo{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    border: "3px solid #c4c4c4",
                    height: 350,
                    display: "flex",
                    flexDirection: "row",
                    mx: 2,
                  }}
                  className="busStops"
                >
                  <Box my={0.5} px={2}>
                    <Typography sx={{ minWidth: 60 }}> Bus Stops: </Typography>
                  </Box>
                  <Box>
                    <ListItemButton
                      component="ul"
                      href="#simple-list"
                      sx={{
                        display: "block",
                        my: 0.5,
                        overflow: "scroll",
                        maxHeight: 320,
                      }}
                    >
                      <ListItemText primary="Nyabugogo" />
                      <ListItemText primary="Kigali" />
                      <ListItemText primary="Kagugu" />

                      <ListItemText primary="Kimironko" />
                      <ListItemText primary="Bumbogo" />
                      <ListItemText primary="Gatsata" />
                      <ListItemText primary="Gisimenti" />
                      <ListItemText primary="Karuruma" />
                      <ListItemText primary="Biryogo" />
                      <ListItemText primary="Bugesera" />
                    </ListItemButton>
                  </Box>
                </Box>
              </Container>

              <Container
                style={{ margin: " 0 470px  20px 470px " }}
                className="submit"
              >
                <Button variant="contained" style={{ marginRight: 50 }}>
                  Update
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: 50, backgroundColor: "#c62828" }}
                >
                  Delete
                </Button>
              </Container>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
