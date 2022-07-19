import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Box,Link,Skeleton,Button} from "@mui/material";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { styles } from "./styles";
import Divider from "@material-ui/core/Divider";
import { MainListItems } from "./SideBar";
import List from "@material-ui/core/List";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { io } from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { fetchAllNotifications,deleteNotification,readNotification } from "../redux/Action/NotificationsAction";
import {useDispatch, useSelector} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const socketUrl = process.env.SOCKET_URL

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

const notify = (toastMsg) => toast(toastMsg);

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const Notifications = useSelector(state => state.NotificationReducer.notifications)
  const Notification = useSelector(state => state.getOneNotificationReducer.notification)
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading,setLoading]= React.useState(false)
  const [open, setOpen] = React.useState(false);
  const [Count, setCount] = React.useState(null);
   
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };


  const handleRead = (notificationId) => {
    dispatch(readNotification(notificationId))
    setOpen(true);
    handleCloseNavMenu();
    handleNotifications();
    handleNotificationCount()
  };

  const handleClose = ()=> {
    setOpen(false)
  }

  const handleDeleteNotification = (notificationId) => {
    dispatch(deleteNotification(notificationId))
    handleNotificationCount()
  };


  const handleLogout = () => {
    localStorage.setItem("user", null);
    localStorage.setItem("token", null);
    localStorage.setItem("useruuid", null);
    navigate("/signin");
  };

  const handleNotifications = () =>{
    dispatch(fetchAllNotifications())
      setLoading(false)
  }

  const handleNotificationAlert=()=>{
    const token =localStorage.getItem("token");
    const newSocket = io(`${socketUrl}`,{
      auth: {
        token,
      },
    });
    newSocket.on('newNotification', (notification) => {
      notify(notification.content)
      handleNotifications();
      handleNotificationCount();
    });
  }

  const handleNotificationCount=()=>{
    const token =localStorage.getItem("token");
    const newSocket = io(`${socketUrl}`,{
      auth: {
        token,
      },
    });

    newSocket.on('notificationCount', (notificationCount) => {
      setCount(notificationCount)
    });
  }

  React.useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user])

  useEffect(() => {
    handleNotificationAlert()
    handleNotifications();
    handleNotificationCount()
  }, []);

  return (
    <div className={classes.root}>
    <ToastContainer />
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
          {user?.data?.user?.profilePicture.length !== 0 ? (
            <Avatar
              className={classes.profilePic}
              alt="profile"
              src={user?.data?.user?.profilePicture[user?.data?.user?.profilePicture?.length-1]}
              sx={{ width: 40, height: 40, bgcolor: "#012241" }}
            />
          ) : (
            <Avatar
              className={classes.profilePic}
              alt="profile"
              sx={{ width: 40, height: 40, bgcolor: "#012241" }}
            >
              {user?.data?.user?.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <Box
            sx={{
              color: "secondary",
              mr: "12px",
              display: "block",
              width:"100px"
            }}
          >
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <NotificationsIcon sx={{fontSize:30}}/>
              {Count >0 &&
                <div className={classes.count}>{Count}</div>
              }
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display:"block",
              }}
            >
              <div className={classes.Notification}>
              All notifications ({Notifications.length}) 
              <Divider />
              </div>
             {loading ? <Skeleton/> : Notifications.map((notification) => {
                return (
                  <div key={notification.uuid}>
                    <div className={classes.actions}>
                      <button className={classes.close} onClick={() => handleDeleteNotification(notification.uuid)}><CloseIcon sx={{ fontSize:14}}/></button>
                    </div>
                    {notification.isRead ? (
                    <MenuItem
                    onClick={() => handleRead(notification.uuid)} 
                    sx={{display:"block", textDecoration: "none",p:2 }} 
                    component={Link}
                    >
                      <Typography variant="h6">
                      {notification.title}
                      </Typography>
                      <Typography>
                      {notification.content}
                      </Typography>
                      </MenuItem>
                    ) : (
                    <MenuItem
                    onClick={() => handleRead(notification.uuid)} 
                    sx={{display:"block", background:"#eeeee4", textDecoration: "none",p:2 }} 
                    component={Link}
                    >
                      <Typography variant="h6">
                      {notification.title}
                      </Typography>
                      <Typography>
                      {notification.content}
                      </Typography>
                      </MenuItem>
                    )}
                    <Divider />
                  </div>
                )
              })}
            </Menu>
          </Box>
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

        <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
            <DialogTitle sx={{color:"#fff",background: "#012241",display:"flex",justifyContent:"space-between" }}>
              {Notification.title}
              <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  height: 20,
                }}
              >
                <CloseIcon/>
              </Button>
            </DialogActions>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" sx={{padding:"16px"}}>
                {Notification.content}
              </DialogContentText>
            </DialogContent>
          </Dialog>

        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
