import React, { useState } from "react";
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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import routesID from "./routesID";
import stops from "./stops";
import AddIcon from "@mui/icons-material/Add";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const un = "Bus stop one, You can add others by hitting + button";

const SingleRoute = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [openUpdater, setOpenUpdater] = useState(false);
  const handleClickOpenUpdater = () => {
    setOpenUpdater(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdater = () => {
    setOpenUpdater(false);
  };
  const handleDelete = () => {
    setOpen(false);
  };

  const handleClearUpdater = () => {
    setOpen(false);
    console.log("Content cleared")
  }
  const handleClear = () => {
    setOpen(false);
    console.log("Content cleared")
  }

  const [routeID, setRouteID] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [stop, setStop] = useState('');

  const [routeIDError, setRouteIDError] = useState(false);
  const [startPointError, setStartPointError] = useState(false);
  const [endPointError, setEndPointError] = useState(false);
  const [stopError, setStopError] = useState(false);
  // const [fullWidth, setFullWidth] = useState(true);
  // const [maxWidth, setMaxWidth] = useState('lg');

  const handleAddRoute = () => {
    console.log("route added")

    const List = document.querySelector(".list-route");
    const ListItem = document.createElement("li");
    ListItem.style.border = "1px solid #c4c4c4";
    ListItem.style.height = "40px";
    ListItem.style.paddingLeft = "20px";

    ListItem.innerHTML = stop;
    List.appendChild(ListItem)
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log("Updated handler")
    setRouteIDError(false);
    setStartPointError(false);
    setEndPointError(false);
    setStopError(false);
    setOpen(false)


    if (routeID === "") {
      setRouteIDError(true)
    }
    if (startPoint === "") {
      setStartPointError(true)
    }
    if (endPoint === "") {
      setEndPointError(true)
    }
    if (stop === "") {
      setStopError(true)
    }
    else {
      console.log(routeID, startPoint, endPoint, stop)
    }
  }



  return (
    <div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deleting item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this route?
            </DialogContentText>
            {/* <Typography> <WarningIcon color="error" />This action cannot be revoked</Typography> */}
            <Typography> <WarningIcon sx={{ color: "#bd2424" }} />This action cannot be revoked</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ backgroundColor: "#012241", color: "#fff" }} className="buttons">Cancel</Button>
            <Button onClick={handleDelete} sx={{ backgroundColor: "#bd2424", color: "#fff" }} className="buttons">Delete</Button>
          </DialogActions>
        </Dialog>
      </div >
      <div>
        <Dialog open={openUpdater} onClose={handleClose}
          // sx={{ maxWidth: "30%", height: "100%", border: "20px solid #bd2424" }}
          fullScreen
        // maxWidth={"lg"}
        >
          <DialogTitle>Route Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to update this route?
            </DialogContentText>
            {/* <Typography> <WarningIcon sx={{ color: "#bd2424" }} />This action cannot be revoked</Typography> */}
            <form className="addroute"
            // onSubmit={handleSubmit}
            >
              <div style={{ marginBottom: 20 }} className="routeDetails">
                <Box sx={{ display: "flex", my: 2 }}>
                  <Typography sx={{ width: 200 }}>Route ID </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route ID"
                    size="small"
                    sx={{ minHeight: 3, minWidth: 300 }}
                    onChange={(e) => setRouteID(e.target.value)}
                    required
                    error={routeIDError}
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
                    onChange={(e) => setStartPoint(e.target.value)}
                    required
                    error={startPointError}
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
                    onChange={(e) => setEndPoint(e.target.value)}
                    required
                    error={endPointError}
                  />
                </Box>
                <Box sx={{ display: "flex" }} className="added-route">
                  <Typography sx={{ width: 200 }}>Route Stops </Typography>
                  <TextField
                    className="textfield-addroute"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Enter Route Stop"
                    label=""
                    size="small"
                    sx={{ minHeight: 3, minWidth: 250 }}
                    onChange={(e) => setStop(e.target.value)}
                    required
                    error={stopError}
                  />
                  <AddIcon sx={{ py: 1, px: 1 }} onClick={handleAddRoute} />
                </Box>
                <Box>
                  <List className="list-route">
                    <ListItem sx={{ border: "1px solid #c4c4c4" }}
                    >
                      <ListItemText
                        primary={`${un}`}
                      // secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                  </List>
                </Box>
              </div>
            </form>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseUpdater} sx={{ backgroundColor: "#012241", color: "#fff" }} className="buttons">Cancel</Button>
            <Button onClick={handleUpdate} sx={{ backgroundColor: "#bd2424", color: "#fff" }} className="buttons">Update</Button>
            <Button onClick={handleClearUpdater} sx={{ backgroundColor: "#ff345d", color: "#fff" }} className="buttons">Reset</Button>
          </DialogActions>
        </Dialog>

      </div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3 style={{ display: "inline" }}>Single Route Report </h3>

          <hr />
          <Link to="/routes">
            <ArrowBackIcon />
          </Link>

          <form className="addroute">
            <div className="Container">
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
                      {stops.map(stop => <ListItemText>{stop.location}</ListItemText>)}

                    </ListItemButton>
                  </Box>
                </Box>
              </Container>

              <Container
                style={{ margin: " 0 470px  20px 15px " }}
                className="submit"
              >
                <Button variant="contained" style={{ marginRight: 4, backgroundColor: "#012241" }}
                  onClick={handleClickOpenUpdater}>

                  Update
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClickOpen}
                  style={{ marginRight: 1, backgroundColor: '#bd2424' }}
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