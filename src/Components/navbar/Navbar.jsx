import * as React from 'react'
import bus from '../../static/images/bus.png'

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
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { buildSchema } from 'graphql';

const pages = ['CONTACT US', 'ABOUT', 'SERVICES', 'HOME'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {

      main: '#012241',
    },
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

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
            <Box sx={{ flexGrow: 1, color: 'secondary', display: { xs: 'none', md: ' flex' } }}>
              <Avatar
                alt="logo"
                src={bus}
                sx={{ width: 80 }}
                variant="square"

              />
            </Box>


            <Box sx={{ flexGrow: 1, color: 'secondary', display: { xs: 'flex', md: 'none' } }}>
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
                sx={{
                  display: { xs: 'block', md: 'none' },

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
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'secondary.main', mr: 10, display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>



            <Box  >
              <Button color="secondary" variant="contained" sx={{ height: '30.16px', width: '150.37px', borderRadius: '45.125px' }}>
                <Typography



                  sx={{ mx: "auto", width: '100.37px', }}
                >
                  sign in
                </Typography>
              </Button>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar
