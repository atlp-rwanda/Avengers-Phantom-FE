import * as React from "react";
import bus from "../../static/images/bus.png";
import { Outlet, Link } from "react-router-dom";
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
import CssBaseline from "@mui/material/CssBaseline";
import { buildSchema } from "graphql";

const pages = ["CONTACT", "ABOUT", "SERVICES", "HOME"];
const pages2 = ["CONTACT", "ABOUT", "SERVICES", "HOME", "signin"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#012241",
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
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" height="68.5px">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  color: "secondary",
                  display: { xs: "flex", md: " flex" },
                }}
              >
                <Avatar
                  alt="logo"
                  src={`https://res.cloudinary.com/avengersphantom/image/upload/v1656445466/Images/images/bus_azhxmp.png`}
                  sx={{ width: 80 }}
                  variant="square"
                />
              </Box>

              <Box
                sx={{
                  color: "secondary",
                  mr: "2px",
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
                  //flexGrow: 1
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
                  {pages2.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{ textDecoration: "none" }}
                        component={Link}
                        to={`/${page}`}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  flexDirection: "row-reverse",
                  display: { xs: "none", md: "flex" },
                }}
              >
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
                    component={Link}
                    to={`/${page}`}
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
                    display: { xs: "none", md: " flex" },
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/signin`}
                    sx={{
                      mx: "auto",
                      width: "100.37px",
                      color: "white",
                      textDecoration: "none",
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

export default Navbar;
