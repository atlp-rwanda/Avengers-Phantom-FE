import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoute, fetchSingleRoute, updateRoute } from "../../../redux/Action/routes";

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
import { Link , Navigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";
import routesID from "./routesID.jsx";
import stops from "./stops.jsx";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DashboardLayout from "../../../Layouts/Dashboard";

import UpdateRouteButton from "./UpdateRouteButton.jsx";

const un = "Bus stop one, You can add others by hitting + button";

let id = location.href.split("?id=")[1];
let routeUuid = decodeURIComponent(id);

console.log(routeUuid)

const SingleRoute = (props) => {
  const [open, setOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

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
    // setOpen(false);
    console.log('deleting some routes')
    dispatch(deleteRoute( routeUuid))
    setIsDeleted(true)
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
  const [isloading, setIsLoading] = useState(false)
  // const [fullWidth, setFullWidth] = useState(true);
  // const [maxWidth, setMaxWidth] = useState('lg');

  const routeDetails = useSelector((state) => state.routeDetails);
  const { loading, route, error } = routeDetails;
  
   
  const handleUpdate = (e) => {
    e.preventDefault();

    console.log("Updated initiated error needs to be fixed"); 
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
     
      console.log("Updated handler submitted"); 
          console.log(routeCode, startLocation, endLocation, stop, name, "yessss");
          dispatch(updateRoute( routeUuid, { routeCode, startLocation, endLocation,name:'route', distance:'10km',duration:'1hr'}))
    }
  };


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleRoute(routeUuid));
    setIsLoading(false)
    
  }, []);
 


  return (
    <DashboardLayout >
    <div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deleting item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this route?
            </DialogContentText>
            {/* <Typography> <WarningIcon color="error" />This action cannot be revoked</Typography> */}
            <Typography>
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
      <div>
        <Dialog
          open={openUpdater}
          onClose={handleClose}
          // fullScreen
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Route Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to update this route?
            </DialogContentText>
            <UpdateRouteButton/>
          </DialogContent>

          {/* <DialogActions>
            <Button
              onClick={handleCloseUpdater}
              sx={{
                backgroundColor: "#012241",
                color: "#fff",
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1976d2",
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
                backgroundColor: "#012241",
                color: "#fff",
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1976d2",
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
                backgroundColor: "#012241",
                color: "#fff",
                "&:hover": {
                  background: "#1976d2",
                  opacity: 0.8,
                },
              }}
              className="buttons"
            >
              Reset
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>


      <DashNavbar />
      <div className="dashboard">
       
        <div className="containt">
          <h3 style={{ display: "inline" }}>Single Route Report </h3>
          <hr />
          <Link to="/dashboard/routes">
            <ArrowBackIcon />
          </Link>

         

          <form className="singleroute">
            { loading ? <div>Loading...</div> :  route && route.data ? (
              
               <div className="Container" >
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
                     border: "1px solid #c4c4c4",
                     backgroundColor:'white',
                     display: "flex",
                     flexDirection: "column",
                     justifyContent:"center",
                     alignItems:"center",
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
                     border: "1px solid #c4c4c4",
                     height: 350,
                     backgroundColor:'white',
                     display: "flex",
                     flexDirection: "column",
                     justifyContent:"center",
                     alignItems:"center",
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
                         {route.data.data.routes.uuid}{" "}
                       </Typography>
                     </Box>
                     <Box my={2} sx={{ display: "flex" }}>
                       <Typography sx={{ width: 300,display:"flex", marginRight:"10px", justifyContent:"center", color: "green", borderRadius: "50%", backgroundColor:"white", border: "2px solid green", width:'25px', height:"25px" }}>
                         {" "}
                         A{" "}
                       </Typography>
                       <Typography sx={{ display: "inline-block" }}>
                       {route.data.data.routes.startLocation}{" "}
                       </Typography>
                     </Box>
                     <Box my={2} sx={{ display: "flex" }}>
                       <Typography sx={{ width: 300,display:"flex", marginRight:"10px", justifyContent:"center", color: "blue", borderRadius: "50%", backgroundColor:"white", border: "2px solid blue", width:'25px', height:"25px" }}>
                         {" "}
                         B{" "}
                       </Typography>
                       <Typography sx={{ display: "inline-block" }}>
                       {route.data.data.routes.endLocation}{" "}
                       </Typography>
                     </Box>
                   </Box>
                 </Box>
 
                 <Box
                   sx={{
                     flex: 1,
                     border: "1px solid #c4c4c4",
                     backgroundColor:'white',
                     height: 350,
                     display: "flex",
                     flexDirection: "column",
                     justifyContent:"center",
                     alignItems:"center",
                     mx: 2,
                   }}
                   className="busStops"
                 >
                   <Box my={0.5} px={2}>
                     <Typography sx={{ minWidth: 60, color:"black",fontWeight:700 }}> Bus Stops: </Typography>
                   </Box>
                   <Box>
                     <ListItemButton
                       component="ul"
                       href="#simple-list"
                       sx={{
                         display: "block",
                         my: 0.5,                         
                         maxHeight: 320,
                       }}
                     >
                       
                       {stops.map((stop) => (
                         
                         <ListItemText key={stop.location}>{stop.location}</ListItemText>
                       ))}
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
                   sx={{
                     background: "#012241",
                     // borderTopLeftRadius: 10,
                     // borderBottomLeftRadius: 0,
                     // borderTopRightRadius: 10,
                     // borderBottomRightRadius: 0,
                     // color: "white",
                     // fontSize: { lg: 15, xs: 7 },
                     p: 1,
                     height: 40,
                     width: "212px",
                     marginRight: 3,
                     "&:hover": {
                       background: "#012243",
                       opacity: 0.8,
                       transition: "0.8s",
                     },
                   }}
                   onClick={handleClickOpenUpdater}
                 >
                   Update
                 </Button>
                 <Button
                   variant="contained"
                   onClick={handleClickOpen}
                   sx={{
                     background: "#bd2424",
                     // borderTopLeftRadius: 10,
                     // borderBottomLeftRadius: 0,
                     // borderTopRightRadius: 10,
                     // borderBottomRightRadius: 0,
                     // color: "white",
                     // fontSize: { lg: 15, xs: 7 },
                     p: 1,
                     height: 40,
                     width: "212px",
                     "&:hover": {
                       background: "#7A110B",
                       opacity: 0.8,
                       transition: "0.8s",
                     },
                   }}
                 >
                   Delete
                 </Button>
               </Container>
             </div>
            ) : <div>No single route yet</div>}
           
          </form>
          {isDeleted && <Navigate to="/dashboard/routes" /> }
          {/* {loading ? window.location.reload(false) : ' '} */}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default SingleRoute;
