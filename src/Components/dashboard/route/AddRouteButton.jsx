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
import "./AddRoutes.css";
import ListItem from "@mui/material/ListItem";

const un = "Bus stop one, You can add others by hitting + button"

const AddRouteButton = () => {

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
            <div>
                <form className="addroute" >
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
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar> */}
                                    <ListItemText
                                        primary={`${un}`}
                                    // secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddRouteButton;