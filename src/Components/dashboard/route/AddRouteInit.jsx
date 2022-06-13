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

const un = "Bus stop one, You can add others by hitting + button";

const AddRouteInit = () => {
<<<<<<< HEAD
  const [routeID, setRouteID] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [stop, setStop] = useState("");

  const [routeIDError, setRouteIDError] = useState(false);
  const [startPointError, setStartPointError] = useState(false);
  const [endPointError, setEndPointError] = useState(false);
  const [stopError, setStopError] = useState(false);

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
              <Typography sx={{ width: 200 }}>Route Starting Point </Typography>
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
              <Typography sx={{ width: 200 }}>Route Destination </Typography>
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
                <ListItem
                  sx={{ border: "1px solid #c4c4c4", width: "72%" }}
                  // secondaryAction={
                  //   // <IconButton edge="end" aria-label="delete">
                  //   //   <DeleteIcon />
                  //   // </IconButton>
                  // }
                >
                  {/* <ListItemAvatar>
=======

    const [routeCode, setRouteID] = useState("");
    const [startLocation, setStartPoint] = useState("");
    const [endLocation, setEndPoint] = useState("");
    const [stop, setStop] = useState("");
    const [name, setName] = useState("");
    const [distance, setDistance] = useState("");
    const [duration, steDuration] = useState("");
    const [success, setSuccessMessage] =useState(false);
    const [address, setAddress] =useState("");
    const [coordinates, setCoordinates] =useState({lat:null , lng:null});


    const [routeIDError, setRouteIDError] = useState(false);
    const [startPointError, setStartPointError] = useState(false);
    const [endPointError, setEndPointError] = useState(false);
    const [stopError, setStopError] = useState(false);

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
            dispatch(saveRoute( { routeCode, startLocation, endLocation,name:'route', distance:'10km',duration:'1hr'}))
            setSuccessMessage(true)
        }
    };

    const handleSelect = async value =>{
        const results= await geocodeByAddress(value);
        const latLong= await getLatLng(results[0]);

        console.log(latLong, results);
        console:log(coordinates)
        setAddress(value)
        setCoordinates(latLong)
    }


    return (
        <div className="containt">
            <h3 style={{ display: "inline" }}>Create New Route</h3>
            <hr />
            <Link to="/routes">
                <Buttons text="Go back" bcolor="#012241" />
            </Link>
            <div>
                <form className="addroute">
                    <div style={{ marginBottom: 20 }} className="routeDetails">
                    <div className="success_message">{success &&<div>Route has been created successfully!!</div>}</div>
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
                                // secondaryAction={
                                //   // <IconButton edge="end" aria-label="delete">
                                //   //   <DeleteIcon />
                                //   // </IconButton>
                                // }
                                >
                                    {/* <ListItemAvatar>
>>>>>>> (ft-route-crud)
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar> */}
<<<<<<< HEAD
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
=======
                                    <ListItemText
                                        primary={`${un}`}
                                    // secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </div>

                    {/* autocomplete logic */}

                {/* <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div key={suggestions.description}>
                            <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            />
                            <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                    
                                >
                                    
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        )}
                    </PlacesAutocomplete> */}

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
>>>>>>> (ft-route-crud)
};

export default AddRouteInit;
