// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteRoute, fetchAllroutes, fetchSingleRoute } from "../../../redux/Action/routes";

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
import Skeleton from "react-loading-skeleton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";
import RoutesID from "./routesID.jsx";
import { Add } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
<<<<<<< HEAD
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AddRouteButton from "./AddRouteButton.jsx";
import DashboardLayout from "./../../../Layouts/Dashboard";
=======
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import UpdateRouteButton from "./UpdateRouteButton.jsx";
import SkeletonElement from "./Skeletons/SkeletonElement.jsx";
>>>>>>> (ft-route-crud)

const un = "Bus stop one, You can add others by hitting + button";

const OneRoute = () => {
  const [open, setOpen] = useState(false);

  const routeList = useSelector((state) => state.routesList);
  const { loading, routes, error } = routeList;

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [openUpdater, setOpenUpdater] = useState(false);
  const handleClickOpenUpdater = (routeUuid) => {
    setOpenUpdater(true);
    dispatch(fetchSingleRoute(routeUuid));
    console.log('single')
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdater = () => {
    setOpenUpdater(false);
  };
  const handleDelete = () => {
    setOpen(false);
    console.log('deleting some routes')
    dispatch(deleteRoute( routeUuid))
    window.location.reload()
  };

  const handleClearUpdater = () => {
    setOpen(false);
    console.log("Content cleared");
  };
  const handleClear = () => {
    setOpen(false);
    console.log("Content cleared");
  };

  const [routeID, setRouteID] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [stop, setStop] = useState("");

  const [routeIDError, setRouteIDError] = useState(false);
  const [startPointError, setStartPointError] = useState(false);
  const [endPointError, setEndPointError] = useState(false);
  const [stopError, setStopError] = useState(false);

  const handleAddRoute = () => {
    console.log("route added");

    const List = document.querySelector(".list-route");
    const ListItem = document.createElement("li");
    ListItem.style.border = "1px solid #c4c4c4";
    ListItem.style.height = "40px";
    ListItem.style.paddingLeft = "20px";

    ListItem.innerHTML = stop;
    List.appendChild(ListItem);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

<<<<<<< HEAD
    console.log("Updated handler");
=======
    console.log("Updated handler this")
>>>>>>> (ft-route-crud)
    setRouteIDError(false);
    setStartPointError(false);
    setEndPointError(false);
    setStopError(false);
    setOpen(false);

    if (routeID === "") {
      setRouteIDError(true);
    }
    if (startPoint === "") {
      setStartPointError(true);
    }
    if (endPoint === "") {
      setEndPointError(true);
    }
    if (stop === "") {
      setStopError(true);
    } else {
      console.log(routeID, startPoint, endPoint, stop);
    }
<<<<<<< HEAD
  };
=======
    else {
      console.log(routeID, startPoint, endPoint, stop)
      
    }
  }


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllroutes());
    return () => {};
  }, []);
 
  // if ( loading === false && routes && routes.data){
  //   routes.data.routes.routes.rows.map(item => console.log(item))
  // }

>>>>>>> (ft-route-crud)

  return (
    <DashboardLayout>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deleting item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this route?
            </DialogContentText>
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
              className="buttons"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              sx={{ backgroundColor: "#bd2424", color: "#fff" }}
              className="buttons"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openUpdater}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Route Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to update this route?
            </DialogContentText>
            <UpdateRouteButton />
          </DialogContent>
<<<<<<< HEAD
          <DialogActions>
            <Button
              onClick={handleCloseUpdater}
              sx={{
                backgroundColor: "#012241",
                color: "#fff",
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1565c0",
                  opacity: 0.8,
                },
              }}
              className="buttons"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpdate}
              sx={{
                backgroundColor: "#bd2424",
                color: "#fff",
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1565c0",
                  opacity: 0.8,
                },
              }}
              className="buttons"
            >
              Update
            </Button>
            <Button
              onClick={handleClearUpdater}
              sx={{
                backgroundColor: "#ff345d",
                color: "#fff",
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1565c0",
                  opacity: 0.8,
                },
              }}
              className="buttons"
            >
              Reset
            </Button>
          </DialogActions>
=======
          {/* <DialogActions>
            <Button onClick={handleCloseUpdater} sx={{
              backgroundColor: "#012241", color: "#fff", backgroundColor: "#012241", color: "#fff", "&:hover": {
                background: "#1565c0",
                opacity: 0.8,
              },
            }} className="buttons">Cancel</Button>
            <Button onClick={handleUpdate} sx={{
              backgroundColor: "#bd2424", color: "#fff", backgroundColor: "#012241", color: "#fff", "&:hover": {
                background: "#1565c0",
                opacity: 0.8,
              },
            }} className="buttons">Update</Button>
            <Button onClick={handleClearUpdater} sx={{
              backgroundColor: "#ff345d", color: "#fff", backgroundColor: "#012241", color: "#fff", "&:hover": {
                background: "#1565c0",
                opacity: 0.8,
              },
            }} className="buttons">Reset</Button>
          </DialogActions> */}
>>>>>>> (ft-route-crud)
        </Dialog>
      </div>
      <div className="dashboard">
        <div className="containt">
          <div className="header">
            <h3 sx={{ display: "inline-block" }}>All Routes Report </h3>
            <Button
              component={Link}
              to={`/dashboard/addroute`}
              variant="Text"
              sx={{
                backgroundColor: "#012241",
                minWidth: "100px",
                textTransform: "capitalize",
                color: "#fff",
                marginTop: 1,
                height: 40,

                "&:hover": {
                  background: "#012241",
                  opacity: 0.8,
                },
              }}
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
<<<<<<< HEAD
            {RoutesID.map((route) => (
              <Grid container minHeight={30} spacing={1}>
                <Grid
                  item
                  container
                  minHeight={20}
                  sx={{
                    width: "95%",
                    margin: { xs: "auto", sm: "auto" },
                    display: "flex",
                  }}
                >
                  {/* <Grid item container minHeight={20} sx={{ border: "1px solid #364878", width: "95%", margin: { xs: "auto", sm: "auto" }, display: "flex" }}> */}

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
                          Route ID:
                        </Typography>
                        <Typography sx={{ display: "inline-block" }}>
                          {route.ID}
                        </Typography>
                      </Box>
                      <Box my={2}>
                        <Typography sx={{ display: "inline-block" }}>
                          {" "}
                          Starting:{" "}
                        </Typography>
                        <Typography sx={{ display: "inline-block" }}>
                          {route.startingPoint}
                        </Typography>
                      </Box>
                      <Box my={2}>
                        <Typography sx={{ display: "inline-block" }}>
                          {" "}
                          Destination:{" "}
                        </Typography>
                        <Typography sx={{ display: "inline-block" }}>
                          {route.endingPoint}
=======
            { loading ? <SkeletonElement />: loading === false && routes && routes.data ? routes.data.routes.routes.rows.map(route =>
              <Grid container minHeight={30} spacing={1}   key={route.uuid}>
                <Grid item container minHeight={20} sx={{ width: "95%", margin: { xs: "auto", sm: "auto" }, display: "flex" }}>
                  {/* <Grid item container minHeight={20} sx={{ border: "1px solid #364878", width: "95%", margin: { xs: "auto", sm: "auto" }, display: "flex" }}> */}

                  <Grid item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={5.75} border={"1px solid #364878"}>
                    <Box sx={{ mb: 1, px: 2}}>
                      <Box my={0.5} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ display: 'inline-block' }}>
                          Route ID:
                        </Typography>
                        <Typography sx={{ display: 'inline-block' }}>
                          {route.uuid}
                        </Typography>
                      </Box>

                    <Box my={2} sx={{ display: 'flex' }}>
                      <Box my={2} sx={{ display: 'flex' }}>
                        <Typography sx={{ width: 300,display:"flex", marginRight:"10px", justifyContent:"center", color: "green", borderRadius: "50%", backgroundColor:"white", border: "2px solid green", width:'25px', height:"25px"}}>
                          {' '}
                          A {' '}
                        </Typography>
                        <Typography sx={{ display: 'inline-block' }}>
                          {route.startLocation}
                        </Typography>
                      </Box>

                      <Box my={2} sx={{ display: 'flex' }}>
                        <Typography sx={{ width: 50 ,display:"flex", marginLeft:"10px",Right:"10px", justifyContent:"center", color: "green"}}>
                          {' '}
                         ...............{' '}
                        </Typography>
                        
                      </Box>

                      <Box my={2} sx={{ display: 'flex' }}>
                        <Typography sx={{ width: 200,display:"flex", marginRight:"10px", justifyContent:"center", color: "blue", borderRadius: "50%", backgroundColor:"white", border: "2px solid blue", width:'25px', height:"25px" }}>
                          {' '}
                          B{' '}
                        </Typography>
                        <Typography sx={{ display: 'inline-block' }}>
                          {route.endLocation}
>>>>>>> (ft-route-crud)
                        </Typography>
                      </Box>

                    </Box>
<<<<<<< HEAD
                  </Grid>
                  <Grid
                    item
                    sx={{ margin: { xs: 1, sm: 1 } }}
                    xs={12}
                    md={3.75}
                    border={"1px solid #364878"}
                  >
=======
                  </Box>
                </Grid>
                  {/* <Grid item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={3.75} border={"1px solid #364878"}>
>>>>>>> (ft-route-crud)
                    <Box my={0.5} px={2}>
                      <Typography sx={{ minWidth: 60 }}>Bus Stops:</Typography>
                    </Box>
                    <Box>
                      <ListItemButton
                        component="ul"
                        href="#simple-list"
                        sx={{
                          display: "block",
                          my: 0.5,
                          overflow: "scroll",
                          maxHeight: 100,
                        }}
                      >
                        {route.stops.map((stop) => (
                          <ListItemText>{stop}</ListItemText>
                        ))}
                      </ListItemButton>
                    </Box>
<<<<<<< HEAD
                  </Grid>
                  <Grid
                    container
                    item
                    sx={{ margin: { xs: 1, sm: 1 } }}
                    xs={12}
                    md={2}
                  >
                    <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12}>
                      <Button
                        component={Link}
                        to={`/dashboard/singleroute`}
                        variant="contained"
                        style={{ backgroundColor: "#012241", width: "100px" }}
                      >
                        About
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12}>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#012241", width: "100px" }}
                        onClick={handleClickOpenUpdater}
                      >
                        Update
                      </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12}>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "#bd2424", width: "100px" }}
=======
                  </Grid> */}
                  <Grid container item sx={{ margin: { xs: 1, sm: 1 } }} xs={12} md={2} >
                    <Grid item xs={12} sx={{ mt: { xs: 1.5 } }} sm={4} md={12} >
                      <Button component={Link}
                        to={`/singleRoute?id=${route.uuid}`}
                        variant='contained' style={{ backgroundColor: "#012241", width: "100px" }}>
                        View route details
                      </Button>
                    </Grid>
                    {/* <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12} >
                      <Button variant='contained' style={{ backgroundColor: "#012241", width: "100px" }}
                        onClick={handleClickOpenUpdater}>
                        Update
                      </Button>
                    </Grid> */}
                    {/* <Grid item xs={12} sx={{ mt: { xs: 0.5 } }} sm={4} md={12} >
                      <Button variant='contained' style={{ backgroundColor: '#bd2424', width: "100px" }}
>>>>>>> (ft-route-crud)
                        onClick={handleClickOpen}
                      >
                        Delete
                      </Button>
                    </Grid> */}
                  </Grid>
                </Grid>
<<<<<<< HEAD
              </Grid>
            ))}
=======
              </Grid>) : <div>No route found</div>}
>>>>>>> (ft-route-crud)
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OneRoute;
