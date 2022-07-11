import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import RouteIcon from "@mui/icons-material/Route";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import { styles } from "./styles";
import {
  AllRoles,
  Admin,
  AdminandOperator,
} from "./../Components/Functions/Function";

const useStyles = makeStyles(styles);
let activeStyle = {
  color: "yellow",
};

export const MainListItems = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [assignment, setAssignment] = useState(false);
  const Role = JSON.parse(localStorage.getItem("user"))?.data?.user?.roleName;

  const handleClick = () => {
    setOpen(!open);
  };
  const handleAssignment = () => {
    setAssignment(!assignment);
  };

  const handleToggle = () => {};
  return (
    <div>
      <NavLink
        to="/dashboard"
        className={classes.sideBarLink}
        style={({ isActive }) => (isActive ? undefined : activeStyle)}
      >
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashbaord" />
        </ListItem>
      </NavLink>

      {Admin(Role) && (
        <NavLink
          to="/dashboard/routes"
          className={classes.sideBarLink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <RouteIcon />
            </ListItemIcon>
            <ListItemText primary="Routes" />
          </ListItem>
        </NavLink>
      )}
      {Admin(Role) && (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemIcon className={classes.sideBarIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" className={classes.listItem} />
            {open ? (
              <ExpandLess className={classes.sideBarIcon} />
            ) : (
              <ExpandMore className={classes.sideBarIcon} />
            )}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <NavLink
              to="/driveroperator/driver"
              className={classes.sideBarLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem button>
                <ListItemIcon className={classes.sideBarIcon}>
                  <DriveEtaIcon />
                </ListItemIcon>
                <ListItemText primary="Drivers" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/driveroperator/operator"
              className={classes.sideBarLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem button>
                <ListItemIcon className={classes.sideBarIcon}>
                  <EventSeatIcon />
                </ListItemIcon>
                <ListItemText primary="Operators" />
              </ListItem>
            </NavLink>
          </Collapse>
        </>
      )}
      {Admin(Role) && (
        <NavLink
          to="/dashboard/buses"
          className={classes.sideBarLink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <DirectionsBusIcon />
            </ListItemIcon>
            <ListItemText primary="Buses" />
          </ListItem>
        </NavLink>
      )}
      {AllRoles(Role) && (
        <NavLink
          to="/dashboard/updateprofile"
          className={classes.sideBarLink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </NavLink>
      )}

      {AdminandOperator(Role) && (
        <>
          <ListItem button onClick={handleAssignment}>
            <ListItemIcon className={classes.sideBarIcon}>
              <AddRoadIcon />
            </ListItemIcon>
            <ListItemText primary="Assignment" className={classes.listItem} />
            {assignment ? (
              <ExpandLess className={classes.sideBarIcon} />
            ) : (
              <ExpandMore className={classes.sideBarIcon} />
            )}
          </ListItem>
          <Collapse in={assignment} timeout="auto" unmountOnExit>
            <NavLink
              to="/dashboard/assignbus"
              className={classes.sideBarLink}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem button>
                <ListItemIcon className={classes.sideBarIcon}>
                  <AirportShuttleIcon />
                </ListItemIcon>
                <ListItemText primary="Assign Bus" />
              </ListItem>
            </NavLink>
          </Collapse>
        </>
      )}
      {Admin(Role) && (
        <NavLink
          to="/dashboard/rolepermission"
          className={classes.sideBarLink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItem>
        </NavLink>
      )}
      {AllRoles(Role) && (
        <NavLink
          to="/dashboard/simulation"
          className={classes.sideBarLink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Simulation" />
          </ListItem>
        </NavLink>
      )}
    </div>
  );
};
