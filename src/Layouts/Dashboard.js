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

const useStyles = makeStyles(styles);

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

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
            Jeanndo
          </Typography>
          <Avatar
            className={classes.profilePic}
            alt="profile"
            src="https://cdn.pixabay.com/photo/2012/04/26/12/51/man-42392__480.png"
            sx={{ width: 40, height: 40, bgcolor: "#012241" }}
          />
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
