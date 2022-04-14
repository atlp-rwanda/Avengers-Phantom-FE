<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react";
import bus from "../../static/images/bus.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buildSchema } from "graphql";
import { Link } from "react-router-dom";

const pages = ["CONTACT US", "ABOUT", "SERVICES", "HOME"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
=======
import * as React from 'react'
import bus from '../../static/images/bus.png'
import { Outlet, Link } from "react-router-dom";
=======
import * as React from 'react';
import bus from '../../static/images/bus.png';
import { Outlet, Link } from 'react-router-dom';
>>>>>>> 07ad962e (ft signin rebase)
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { buildSchema } from 'graphql';

const pages = ['CONTACT US', 'ABOUT', 'SERVICES', 'HOME'];
const pages2 = ['CONTACT US', 'ABOUT', 'SERVICES', 'HOME', 'signin'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
>>>>>>> 70780626 (ft signin rebase)
const theme = createTheme({
  palette: {
    primary: {
<<<<<<< HEAD
      main: "#ffffff",
    },
    secondary: {
      main: "#012241",
    },
  },
=======
      main: '#ffffff'
    },
    secondary: {
      main: '#012241'
    }
  }
>>>>>>> 07ad962e (ft signin rebase)
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 07ad962e (ft signin rebase)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
<<<<<<< HEAD

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
=======
    return (
      <>
      <CssBaseline/>
    <ThemeProvider theme={theme}>
    <AppBar position="static" height="68.5px">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1,color :'secondary', display: {xs : 'flex', md: ' flex'} }}>
        <Avatar
          alt="logo"
          src={bus}
          sx={{ width: 80 }}
          variant="square"
         
         />
         </Box>
        

          <Box sx={{color :'secondary', mr:"2px" ,display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              //flexGrow: 1
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
>>>>>>> 70780626 (ft signin rebase)
              sx={{
                flexGrow: 1,
                color: "secondary",
                display: { xs: "none", md: " flex" },
              }}
            >
              <Avatar
                alt="logo"
                src={bus}
                sx={{ width: 80 }}
                variant="square"
              />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                color: "secondary",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row-reverse",
                display: { xs: "none", md: "flex" },
              }}
            >
<<<<<<< HEAD
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "secondary.main",
                    mr: 10,
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box>
              <Button
                color="secondary"
                variant="contained"
                sx={{
                  height: "30.16px",
                  width: "150.37px",
                  borderRadius: "45.125px",
                }}
=======
              {pages2.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{textDecoration:'none'}} component={Link} to={`/phantom/${page}`} >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
=======

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position='static' height='68.5px'>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  color: 'secondary',
                  display: { xs: 'flex', md: ' flex' }
                }}
              >
                <Avatar
                  alt='logo'
                  src={bus}
                  sx={{ width: 80 }}
                  variant='square'
                />
              </Box>

              <Box
                sx={{
                  color: 'secondary',
                  mr: '2px',
                  display: { xs: 'flex', md: 'none' }
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                  //flexGrow: 1
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }
                  }}
                >
                  {pages2.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign='center'
                        sx={{ textDecoration: 'none' }}
                        component={Link}
                        to={`/phantom/${page}`}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <Typography
>>>>>>> 07ad962e (ft signin rebase)
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
<<<<<<< HEAD
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse' ,display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color:'secondary.main',mr:10, display: 'block' }}
                component={Link} to={`/phantom/${page}`} 
>>>>>>> 70780626 (ft signin rebase)
              >
                <Typography sx={{ mx: "auto", width: "100.37px" }}>
                  sign in
                </Typography>
              </Button>
<<<<<<< HEAD
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
=======
            ))}
          </Box>
=======
              <Box
                sx={{
                  flexGrow: 1,
                  flexDirection: 'row-reverse',
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'secondary.main',
                      mr: 10,
                      display: 'block'
                    }}
                    component={Link}
                    to={`/phantom/${page}`}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
>>>>>>> 07ad962e (ft signin rebase)

              <Box>
                <Button
                  color='secondary'
                  variant='contained'
                  sx={{
                    height: '30.16px',
                    width: '150.37px',
                    borderRadius: '45.125px',
                    display: { xs: 'none', md: ' flex' }
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/phantom/signin`}
                    sx={{
                      mx: 'auto',
                      width: '100.37px',
                      color: 'white',
                      textDecoration: 'none'
                    }}
                  >
                    sign in
                  </Typography>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
      <Outlet />
    </>
  );
};

<<<<<<< HEAD
            
           <Box  >
              <Button color="secondary" variant="contained"  sx={{height:'30.16px',width:'150.37px', borderRadius: '45.125px', display: {xs : 'none', md: ' flex'} }}>
              <Typography
                 
                 component={Link} to={`/phantom/signin`} 
            
              sx={{ mx: "auto",width:'100.37px',color:'white',textDecoration:'none'}}
               >
            sign in
          </Typography>
              </Button>
           </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
     <Outlet />
     </>
    )
}
>>>>>>> 70780626 (ft signin rebase)

=======
>>>>>>> 07ad962e (ft signin rebase)
export default Navbar;
