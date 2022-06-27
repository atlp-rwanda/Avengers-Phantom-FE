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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const MainListItems = () => {
  const classes = useStyles();

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
      <NavLink to="/dashboard/routes" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <RouteIcon />
          </ListItemIcon>
          <ListItemText primary="Routes" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/driveroperator" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Drivers&Operators" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/buses" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <DirectionsBusIcon />
          </ListItemIcon>
          <ListItemText primary="Buses" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/updateprofile" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </NavLink>
      <NavLink to="/dashboard/simulation" className={classes.sideBarLink}>
        <ListItem button>
          <ListItemIcon className={classes.sideBarIcon}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Simulation" />
        </ListItem>
      </NavLink>
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
