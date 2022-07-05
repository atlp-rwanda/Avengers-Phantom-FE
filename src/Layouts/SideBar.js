import * as React from "react";
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
import { styles } from "./styles";
import {
  AllRoles,
  Admin,
  AdminandOperator,
} from "./../Components/Functions/Function";

const useStyles = makeStyles(styles);

export const MainListItems = () => {
  const classes = useStyles();
  const Role = JSON.parse(localStorage.getItem("user"))?.data?.user?.roleName;

  return (
    <div>
      <NavLink to="/dashboard" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>

      {Admin(Role) && (
        <NavLink to="/dashboard/routes" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <RouteIcon />
            </ListItemIcon>
            <ListItemText primary="Routes" />
          </ListItem>
        </NavLink>
      )}
      {Admin(Role) && (
        <NavLink to="/dashboard/driveroperator" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Drivers&Operators" />
          </ListItem>
        </NavLink>
      )}
      {Admin(Role) && (
        <NavLink to="/dashboard/buses" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <DirectionsBusIcon />
            </ListItemIcon>
            <ListItemText primary="Buses" />
          </ListItem>
        </NavLink>
      )}
      {AllRoles(Role) && (
        <NavLink to="/dashboard/updateprofile" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </NavLink>
      )}

      {AdminandOperator(Role) && (
        <NavLink to="/dashboard/assignbus" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <AddRoadIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </NavLink>
      )}
      {Admin(user) && (
        <NavLink to="/dashboard/rolepermission" className={classes.sideBarLink}>
          <ListItem button>
            <ListItemIcon className={classes.sideBarIcon}>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItem>
        </NavLink>
      )}
      {AllRoles(Role) && (
        <NavLink to="/dashboard/simulation" className={classes.sideBarLink}>
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

const Routes = [
  {
    id: 0,
    label: "Select your Road",
  },
  {
    id: 1,
    label: " Down Town Remera ",
    latlng: [12, 12],
  },
  { id: 2, label: "Nyamirambo Down Town", latlng: [12, 12] },
  {
    id: 3,
    label: "Down Town Kimironko",
    latlng: [12, 12],
  },
];

export const ClientSideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.clientSideBar}>
      <form>
        <div className={classes.formFields}>
          <div>
            <select className={classes.routeInput}>
              {Routes.map((item) => (
                <option value={item.latlng} key={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className={classes.startButton}
              style={{ marginTop: "20px" }}
            >
              Go
            </button>
          </div>
        </div>
      </form>
      <div className={classes.realTimeResults}>RealtTime Results</div>
    </div>
  );
};
