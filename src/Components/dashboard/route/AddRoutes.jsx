import React, { createElement, useState } from "react";
import TextField from "@mui/material/TextField";

import Buttons from "../operatorsanddriver/Button.jsx";
import "./AddRoutes.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

import { ListItemText, ListItemAvatar } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import AddRouteInit from "./AddRouteInit.jsx";
const un = "Bus stop one, You can add others by hitting + button";

const AddRoutes = () => {
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
    // const ul = document.createElement("ul");
    // const li = document.createElement("li");
    // li.innerHTML = stop;
    // busstop.reset();
    // busstop.focus();
    // ul.appendChild(li)

    // document.querySelector(".added-route").appendChild(ul)
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
    <div>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <AddRouteInit />
      </div>
    </div>
  );
};

export default AddRoutes;
