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

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
                Delete Button
            </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deleting item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to delete this route?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Delete message"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const SingleRoute = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
                Delete Button
            </Button> */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deleting item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this route?
            </DialogContentText>
            {/* <Typography> <WarningIcon color="error" />This action cannot be revoked</Typography> */}
            <Typography>
              {" "}
              <WarningIcon sx={{ color: "#bd2424" }} />
              This action cannot be revoked
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ backgroundColor: "#012241", color: "#fff" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              sx={{ backgroundColor: "#bd2424", color: "#fff" }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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
                style={{ margin: " 0 470px  20px 15px " }}
                className="submit"
              >
                <Button
                  variant="contained"
                  style={{ marginRight: 4, backgroundColor: "#012241" }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  style={{ marginRight: 1, backgroundColor: "#bd2424" }}
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
