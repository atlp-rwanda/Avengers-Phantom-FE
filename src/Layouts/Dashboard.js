import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { styles } from "./styles";
import Divider from "@material-ui/core/Divider";
import { MainListItems } from "./SideBar";
import List from "@material-ui/core/List";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(styles);

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    localStorage.setItem("useruuid", null);
    navigate("/signin");
  };

  React.useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setIsOpened(!isOpened)}
            className={classes.icon}
          >
            {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phantom
          </Typography>
          <Typography variant="h6" className={classes.userName}>
            {user?.data?.user?.name}
          </Typography>
          {user?.data?.user?.profilePicture ? (
            <Avatar
              className={classes.profilePic}
              alt="profile"
              src={user?.data?.user?.profilePicture}
              sx={{ width: 40, height: 40, bgcolor: "#012241" }}
            />
          ) : (
            <Avatar
              className={classes.profilePic}
              alt="profile"
              sx={{ width: 40, height: 40, bgcolor: "#012241" }}
            >
              {user?.data?.user?.name.charAt(0)}
            </Avatar>
          )}

          <button className={classes.logout} onClick={handleLogout}>
            Logout
          </button>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawer, {
              [classes.closed]: !isOpened,
              [classes.opened]: isOpened,
            }),
          }}
        >
          <Divider />
          <List>
            <MainListItems />
          </List>
        </Drawer>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
