import { Box, ListItemText, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Sidebar from "../sidebar/Sidebar.jsx";
import "../Dashboard.css";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import Buttons from "../operatorsanddriver/Button.jsx";
import "./UpdateRoute.css";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { updateRoute } from "../../../redux/Action/routes.js";
import { Dialog } from "@material-ui/core";
import {ToastContainer, toast} from 'react-toastify';

const un = "Bus stop one, You can add others by hitting + button"
let id = location.href.split("?id=")[1];
let routeUuid = decodeURIComponent(id);

const UpdateRouteButton = (props) => {


    const notify = (toastMsg) => toast(toastMsg)
    const [routeCode, setRouteID] = useState("");
    const [startLocation, setStartPoint] = useState("");
    const [endLocation, setEndPoint] = useState("");
    const [stop, setStop] = useState("");

    const routeDetails = useSelector((state) => state.routeDetails);
    const {loading, route, error } = routeDetails; 
   

    const [routeIDError, setRouteIDError] = useState(false);
    const [startPointError, setStartPointError] = useState(false);
    const [endPointError, setEndPointError] = useState(false);
    const [stopError, setStopError] = useState(false);

    const [openUpdater, setOpenUpdater] = useState(true);
    const [open, setOpen] = useState(false);
    const [updated, setupdated] = useState(false);

    const handleClear = () => {
        
        setRouteID('');
        setStartPoint('');
        setEndPoint('');
    };

    const handleClose = () => {
        setOpen(false);
        window.location.reload()
      };
    
  const handleClickOpen = () => {
    setOpen(true);
  };


 const handleCloseUpdater = () => {
        setOpenUpdater(false);
        setOpen(false);
        
      };

     
    const handleAddRoute = () => {       

        const List = document.querySelector(".list-route");
        const ListItem = document.createElement("li");
        ListItem.style.border = "1px solid #c4c4c4";
        ListItem.style.width = "70%";
        ListItem.style.height = "40px";
        ListItem.style.paddingLeft = "20px";

        ListItem.innerHTML = stop;
        List.appendChild(ListItem);
    };

    
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
    
        setRouteIDError(false);
        setStartPointError(false);
        setEndPointError(false);
        setStopError(false);
        setOpen(false)
    
    
        if (routeCode === "") {
          setRouteIDError(true)
        }
        if (startLocation === "") {
          setStartPointError(true)
        }
        if (startLocation === "") {
          setEndPointError(true)
        }
        if (stop === "") {
          setStopError(true)
        }
        else {                     
          
          const data= dispatch(updateRoute({ routeCode, startLocation, endLocation,name:'route', distance:'10km',duration:'1hr'}, routeUuid)) 
          handleClose()
          setupdated(true)

          const error = localStorage.getItem("error");          
          if(error ){                   
           
            notify('Error while updating route')
          } else {
            notify('Routes was successfully updated')
                      }      
        }
      }


    return (
        <div className="contain_update">
             <ToastContainer />
            <div>
                
                    <form className="update_route" >
                        <div style={{ marginBottom: 20 }} className="routeDetails">
                            <div className="updated_message">{updated &&<div>Route {route.data.data.routes.uuid} has been updated successfully!!</div>}</div>
                            <Box sx={{ display: "flex", my: 2 }}>
                                <Typography sx={{ width: 50 }}>Route Line </Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder="Enter Route line"
                                    size="small"
                                    sx={{ minHeight: 3, minWidth: 300 }}
                                    onChange={(e) => setRouteID(e.target.value)}
                                    required
                                    error={routeIDError}
                                />
                            </Box>
                            <Box sx={{ display: "flex", my: 2 }}>
                                <Typography sx={{ width: 200,display:"flex", marginRight:"10px", justifyContent:"center", color: "green", borderRadius: "50%", backgroundColor:"white", border: "2px solid green", width:'25px', height:"25px"}}>
                                    A{" "}
                                
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder= {route.data.data.routes.startLocation}
                                    size="small"
                                    sx={{ minHeight: 3, minWidth: 300 }}
                                    onChange={(e) => setStartPoint(e.target.value)}
                                    required
                                    error={startPointError}
                                />
                            </Box>
                            <Box sx={{ display: "flex", my: 2 }}>
                                <Typography sx={{ width: 200,display:"flex", marginRight:"10px", justifyContent:"center", color: "blue", borderRadius: "50%", backgroundColor:"white", border: "2px solid blue", width:'25px', height:"25px" }}> B </Typography>
                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder=   {route.data.data.routes.endLocation}
                                    size="small"
                                    sx={{ minHeight: 3, minWidth: 300 }}
                                    onChange={(e) => setEndPoint(e.target.value)}
                                    required
                                    error={endPointError}
                                />
                            </Box>
                            <Box sx={{ display: "flex" }} className="added-route">
                                <Typography sx={{ width: 50 }}>Route Stops </Typography>
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
                                    <ListItem
                                        sx={{ border: "1px solid #c4c4c4", width: "62%" }}
                                    
                                    >
                                        
                                        <ListItemText
                                            primary={`${un}`}
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </div>

                        <div style={{ margin: "" }} className="submit">
                        <Button
                                bcolor="#012241)"
                                onClick={handleClose}
                                variant="contained"
                                sx={{ marginRight: 4, bgcolor: "#012241" }}
                            >
                                Close
                            </Button>
                        
                            <Button
                                onClick={handleUpdate}
                                variant="contained"
                                sx={{ marginRight: 4, bgcolor: "#012241" }}
                            >
                                update
                            </Button>
                            <Button
                                bcolor="#012241)"
                                onClick={handleClear}
                                variant="contained"
                                sx={{ marginRight: 4, bgcolor: "#012241" }}
                            >
                                Reset
                            </Button>
                        </div>                    
                        
                    

                    </form>

            </div>
        </div>
    );
};

export default UpdateRouteButton;