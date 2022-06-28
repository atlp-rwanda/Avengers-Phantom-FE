import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { styles } from "./styles";
import Divider from "@material-ui/core/Divider";
import { ClientSideBar } from "./SideBar";
import List from "@material-ui/core/List";

const useStyles = makeStyles(styles);

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.ClientDrawer, {
              [classes.closed]: !isOpened,
              [classes.clientOpened]: isOpened,
            }),
          }}
        >
          <IconButton
            color="inherit"
            onClick={() => setIsOpened(!isOpened)}
            className={classes.toggleButton}
          >
            {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Divider style={{ backgroundColor: "#fff" }} />
          <div>
            <ClientSideBar />
          </div>
        </Drawer>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
