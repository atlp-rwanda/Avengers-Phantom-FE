import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Outlet, Link } from "react-router-dom";
import * as React from 'react';
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { styles } from "./post.styles";

const useStyles = makeStyles(styles);
const theme = createTheme({
    palette: {
      primary: {
           main:'#ffffff',
      },
      secondary: {

        main: '#012241',
      },
    },
    components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: "#012241",
              color: "#FFFFFF",
            }
          }
        }}
  });

export const MaterialUI = () => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(true);
  return (
    <ThemeProvider theme={theme}> 
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
      {/* <Toolbar> */}
         <Box sx={{display:'flex',justifyContent:'space-between',height:"54px"}}>
          <Box>
          <IconButton
            color="inherit"
            onClick={() => setIsOpened(!isOpened)}
            className={classes.icon}
          >
            {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          </Box>
          <Box>
          {/* <Typography variant="h6" className={classes.title} sx={{color:'#012241',mr:'2px'}}>
            Header
          </Typography> */}
          <Avatar
          alt="logo"
         
        //   sx={{ width: 80 }}
          
         
         />
         </Box>
          </Box>
          {/* </Box> */}
        {/* </Box>
        </Toolbar> */}
      </AppBar>
      <Toolbar />
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
        <Typography variant="h6" className={classes.title} sx={{color:'#ffffff'}}   component={Link} to={`/dashboard/roles`} >
            roles
       </Typography>
       <Typography variant="h6" className={classes.title} sx={{color:'#ffffff'}}   component={Link} to={`/dashboard/dashboard`} >
            dashboard
       </Typography>
       <Typography variant="h6" className={classes.title} sx={{color:'#ffffff'}}   component={Link} to={`/dashboard/routes`} >
            routes
       </Typography>
       <Typography variant="h6" className={classes.title} sx={{color:'#ffffff'}}   component={Link} to={`/dashboard/buses`} >
            buses
       </Typography>
       <Typography variant="h6" className={classes.title} sx={{color:'#ffffff'}}   component={Link} to={`/dashboard/operation`} >
            operations and drivers
       </Typography>

         
        </Drawer>
        {/* <div><Outlet /> </div> */}
        <main className={classes.main} ><Outlet /></main>
      </div>
      {/* <div className={classes.footer}>
        <Typography variant="h6">Footer</Typography>  
      </div> */}
    </div>
    {/* <Outlet /> */}
    </ThemeProvider>
  );
};