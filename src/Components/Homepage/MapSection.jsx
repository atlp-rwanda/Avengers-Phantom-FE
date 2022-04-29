import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 300;
const places = ["Remera", "Downtown", "Gisozi", "Kabuga"];
const MapSection = () => {
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
      <Box sx={{ marginTop: 5 }}>
        <Typography
          sx={{
            fontSize: { lg: "20px", xs: "12px" },
            p: 2,
            fontWeight: 700,
            color: "#012241",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          find nearby bus
        </Typography>
        <Box sx={{ display: { lg: "flex", xs: "block" } }}>
          <CssBaseline />
          <Box
            sx={{
              width: drawerWidth,
              textTransform: "uppercase",
              fontWeigth: 700,
              display: { lg: "block", xs: "none" },
              width: drawerWidth,
              background: "#012241",
              color: "#ffff",
              overflow: "hidden",
              pl: 3,
              pr: 3,
              pt: 1,
              transition: "none !important",
            }}
          >
            <IconButton
              size="xsall"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpenNavMenu}
              sx={{
                marginBottom: 2,
                width: 50,
                marginLeft: "auto",
                display: { lg: "block", xs: "block" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <TextField
              placeholder="Browse Location"
              sx={{
                marginBottom: 5,
                background: "white",
                outline: "none",
                border: "none",
                borderRadius: "10px",
              }}
              type="search"
              size="xsall"
            />
            <Typography sx={{ fontSize: 12 }}>Locations</Typography>
            <List>
              {places.map((text) => (
                <ListItem button key={text}>
                  <ListItemText
                    primary={text}
                    sx={{ textAlign: "left", padding: 1, margin: "auto" }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            component="main"
            sx={{ flexGrow: 1, height: "600px", position: "relative" }}
          >
            <Box
              component="iframe"
              sx={{ width: "100%", height: "100%" }}
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15948.800506704742!2d29.777345550000003!3d-2.07580095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1650796027504!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              alt="map"
            />
            <Box
              sx={{
                flexGrow: 1,
                color: "secondary",
                display: { xs: "flex", md: "none" },
                position: "absolute",
                top: 0,
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
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Box sx={{ p: 3 }}>
                  <TextField
                    placeholder="Browse Location"
                    sx={{
                      marginBottom: 5,
                      background: "white",
                      outline: "none",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    type="search"
                    size="xsall"
                  />
                  <Typography sx={{ fontSize: 12 }}>Locations</Typography>
                  <List>
                    {places.map((text) => (
                      <ListItem button key={text}>
                        <ListItemText
                          primary={text}
                          sx={{ textAlign: "left", padding: 1, margin: "auto" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Menu>
            </Box>
            <Card
              sx={{
                display: "block",
                textAlign: "center",
                height: { lg: "200px", xs: "200px", md: "250px" },
                width: { lg: "600px", xs: "80%" },
                boxshadow: "0px 2.87788px 28px 3px rgba(0, 0, 0, 0.25)",
                position: "absolute",
                borderRadius: "3.59735px",
                p: 2,
                top: 50,
                left: 30,
              }}
            >
              <Box sx={{ display: { lg: "flex", xs: "block" }, p: 1 }}>
                <Typography
                  sx={{
                    fontSize: { lg: 18, xs: 12 },
                    width: "200px",
                    textAlign: "left",
                  }}
                >
                  Point A
                </Typography>
                <TextField
                  placeholder="Starting point"
                  sx={{
                    background: "white",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  type="search"
                  size="xsall"
                />
              </Box>
              <Box sx={{ display: { lg: "flex", xs: "block" }, p: 1 }}>
                <Typography
                  sx={{
                    fontSize: { lg: 18, xs: 12 },
                    width: "200px",
                    textAlign: "left",
                  }}
                >
                  Point B
                </Typography>
                <TextField
                  size="xsall"
                  placeholder="Destination"
                  sx={{
                    background: "white",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  type="search"
                  autoComplete="off"
                  autoFocus={true}
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  width: { lg: 100, xs: 50 },
                  marginLeft: { lg: "auto", xs: 0 },
                }}
              >
                <Button
                  sx={{
                    background: "#012241",
                    color: "white",
                    borderRadius: "5px",
                    "&:hover": {
                      background: "white",
                      color: "#012241",
                      border: "1px solid #012241",
                    },
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 700, fontSize: { lg: 15, xs: 12 } }}
                  >
                    Go
                  </Typography>
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default MapSection;
