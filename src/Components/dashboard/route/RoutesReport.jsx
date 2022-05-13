import React, { useState } from "react";
import "./AddRoutes.css";
import {
  Box,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import { Link, Routes } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';
import RoutesID from "./routesID.js"
import { Add } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const un = "Bus stop one, You can add others by hitting + button"

const OneRoute = () => {

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
          fullScreen
        >
          <DialogTitle>Route Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to update this route?
            </DialogContentText>
            {/* <Typography> <WarningIcon sx={{ color: "#bd2424" }} />This action cannot be revoked</Typography> */}
            <form className="addroute">
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
      </div >
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <div className="header" >
            <h3 sx={{ display: "inline-block" }} >All Routes Report </h3>
            <Button component={Link}
              to={`/create`}
              variant="Text" sx={{ backgroundColor: "#012241", minWidth: "100px", textTransform: "capitalize", color: "#fff" }}
              endIcon={<Add sx={{ display: "block" }} />}
            >
              New Route
            </Button>
          </div>

          <hr />
          <Link to="/dashboard">
            <ArrowBackIcon />
          </Link>

          <form className="addroute">
            {RoutesID.map(route => <Grid container minHeight={30} spacing={1}>
              <Grid item container minHeight={20}>
                <Grid item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={3.75} border={"1px solid #364878"} justifyContent="flex-end">
                  <Box sx={{ mb: 1, px: 2 }}>
                    <Box my={0.5} sx={{ textAlign: 'center' }}>
                      <Typography sx={{ display: 'inline-block' }}>
                        Route ID:
                      </Typography>
                      <Typography sx={{ display: 'inline-block' }}>
                        {route.ID}
                      </Typography>
                    </Box>
                    <Box my={2}>
                      <Typography sx={{ display: 'inline-block' }}>
                        {' '}
                        Starting:{' '}
                      </Typography>
                      <Typography sx={{ display: 'inline-block' }}>
                        {route.startingPoint}
                      </Typography>
                    </Box>
                    <Box my={2}>
                      <Typography sx={{ display: 'inline-block' }}>
                        {' '}
                        Destination:{' '}
                      </Typography>
                      <Typography sx={{ display: 'inline-block' }}>
                        {route.endingPoint}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={3.75} border={"1px solid #364878"}>
                  <Box my={0.5} px={2}>
                    <Typography sx={{ minWidth: 60 }}>
                      Bus Stops:
                    </Typography>
                  </Box>
                  <Box>
                    <ListItemButton
                      component='ul'
                      href='#simple-list'
                      sx={{
                        display: 'block',
                        my: 0.5,
                        overflow: 'scroll',
                        maxHeight: 100
                      }}
                    >
                      {route.stops.map(stop => <ListItemText>{stop}</ListItemText>)}

                    </ListItemButton>
                  </Box>
                </Grid>
                <Grid container item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={2} >
                  <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12} >
                    <Button component={Link}
                      to={`/singleRoute`}
                      variant='contained' style={{ backgroundColor: "#012241", width: "100px" }}>
                      About
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12} >
                    <Button variant='contained' style={{ backgroundColor: "#012241", width: "100px" }}
                      onClick={handleClickOpenUpdater}>
                      Update
                    </Button>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12} >
                    <Button variant='contained' style={{ backgroundColor: '#bd2424', width: "100px" }}
                      onClick={handleClickOpen}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>)}
          </form>

        </div>
      </div>
    </div >
  );
}
export default OneRoute;