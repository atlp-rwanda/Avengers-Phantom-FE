import React from "react";
import "./AddRoutes.css";
import {
  Box,
  Container,
  Grid,
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

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";

const OneRoute = () => {
  return (
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3 style={{ display: "inline" }}>All Routes Report </h3>

          <hr />
          <Link to="/dashboard">
            <ArrowBackIcon />
          </Link>

          <form className="addroute">
            <Grid container minHeight={30} spacing={1}>
              {/* <Grid container border={"1px solid #364878"} minHeight={300} spacing={1}> */}

              <Grid item container minHeight={20}>
                <Grid
                  item
                  sx={{
                    margin: { xs: 1, sm: 1 },
                  }}
                  xs={12}
                  md={3.75}
                  border={"1px solid #364878"}
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
                </Grid>
                <Grid
                  item
                  sx={{ margin: { xs: 1, sm: 1 } }}
                  xs={12}
                  md={3.75}
                  border={"1px solid #364878"}
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
                </Grid>
                <Grid
                  item
                  sx={{ margin: { xs: 1, sm: 1 } }}
                  xs={12}
                  md={3.75}
                  border={"1px solid #364878"}
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
                        maxHeight: 140,
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
                </Grid>
              </Grid>

              <Grid item container minHeight={2} marginTop={1}>
                <Button
                  component={Link}
                  to={`/singleRoute`}
                  variant="contained"
                  style={{ marginRight: 4, backgroundColor: "#012241" }}
                >
                  About
                </Button>

                <Button
                  variant="contained"
                  style={{ marginRight: 4, backgroundColor: "#012241" }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  style={{ marginRight: 1, backgroundColor: "#bd2424" }}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OneRoute;
