import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


import { Box, ListItemText, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Sidebar from "../sidebar/Sidebar.jsx";

import "../Dashboard.css";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";


import TextField from "@mui/material/TextField";

import Buttons from "../operatorsanddriver/Button.jsx";
import "./AddRoutes.css";
import ListItem from "@mui/material/ListItem";
import { saveRoute } from "../../../redux/Action/routes";
import { useEffect } from "react";

const un = "Bus stop one, You can add others by hitting + button";

const AddRouteInit = () => {

    const [routeCode, setRouteID] = useState("");
    const [startLocation, setStartPoint] = useState("");
    const [endLocation, setEndPoint] = useState("");
    const [stop, setStop] = useState("");
    const [name, setName] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, steDuration] = useState("");
    const [success, setSuccessMessage] =useState(false);
    const [errorMessage,setErrorMessage] = useState('')
    const [address, setAddress] =useState("");
    const [coordinates, setCoordinates] =useState({lat:null , lng:null});


    const [routeIDError, setRouteIDError] = useState(false);
    const [startPointError, setStartPointError] = useState(false);
    const [endPointError, setEndPointError] = useState(false);
    const [stopError, setStopError] = useState(false);

    const routeSave = useSelector((state) => state.saveRoute);
    const { loading, routes, error } = routeSave;

    const dispatch = useDispatch();

    const handleClear = () => {
        console.log("Content cleared");
    };

    const handleAddRoute = () => {
        console.log("route added");

        const List = document.querySelector(".list-route");
        const ListItem = document.createElement("li");
        ListItem.style.border = "1px solid #c4c4c4";
        ListItem.style.width = "70%";
        ListItem.style.height = "40px";
        ListItem.style.paddingLeft = "20px";

        ListItem.innerHTML = stop;
        List.appendChild(ListItem);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setRouteIDError(false);
        setStartPointError(false);
        setEndPointError(false);
        setStopError(false);

        if (routeCode === "") {
            setRouteIDError(true);
        }
        if (startLocation === "") {
            setStartPointError(true);
        }
        if (endLocation === "") {
            setEndPointError(true);
        }
        if (stop === "") {
            setStopError(true);
        } else {

            console.log(routeCode, startLocation, endLocation, stop, name, "yessss");
            const data = dispatch(saveRoute( { routeCode, startLocation, endLocation,name:'route', distance:'10km',duration:'1hr'}))
            const error = localStorage.getItem("error");
            if(error ){
              console.log('error')
              setErrorMessage(error)
              console.log(errorMessage)
            } 
            
            console.log(data)        
            
            setSuccessMessage(true)
        }
    };

    

    return (
        <div className="containt">
            <h3 style={{ display: "inline" }}>Create New Route</h3>
            <hr />
            <Link to="/dashboard/routes">
                <Buttons text="Go back" bcolor="#012241" />
            </Link>
            <div>
                <form className="addroute">
                    <div style={{ marginBottom: 20 }} className="routeDetails">
                    {success && errorMessage =="" &&<div className="success_message">Route has been created successfully!!</div>}
                    {errorMessage &&<div className="success_message">Something went wrong try again</div>}
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
                            <Typography sx={{ width: 200,display:"flex", marginRight:"10px", justifyContent:"center", color: "green", borderRadius: "50%", backgroundColor:"white", border: "2px solid green", width:'25px', height:"25px"  }}>
                                A {" "}
                            </Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Starting Point...."
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
                                placeholder="Destination..."
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
                                sx={{ minHeight: 3, minWidth: 300 }}
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
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              </List>
            </Box>
          </div>
          <div style={{ margin: "" }} className="submit">
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ marginRight: 4, bgcolor: "#012241" }}
            >
              Create
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

export default AddRouteInit;
