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
import ClientSideBar  from "./ClientSideBar";
import List from "@material-ui/core/List";

const useStyles = makeStyles(styles);
// const carStateProps = {
//   setCarState,
//   carState
// }

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <ClientSideBar />
        </div>
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;