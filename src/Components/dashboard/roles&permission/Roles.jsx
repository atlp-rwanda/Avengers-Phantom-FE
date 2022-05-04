import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";

// import * as React from "react";
import Box from "@mui/material/Box";
// import SVG from "../../static/images/b2.svg";
import { Outlet, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import OutlinedInput from "@mui/material/OutlinedInput";
import Modal from "../../modal/Modal.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SvgIcon from "@mui/material/SvgIcon";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Dashboard.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#012241",
    },
    secondary: {
      main: "#012241",
    },
  },
});

const Roles = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  return (
    <div>
      <DashNavbar style={{ position: "fixed" }} />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                p: "0 5px",
                mt: "2px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  color: "secondary.main",
                  justifyContent: "center",
                  width: "100%",
                  p: "30px",

                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    fontWeight: "400px",
                    p: "20px",
                  }}
                >
                  {" "}
                  ROLE&PERMISIONS{" "}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "400px",
                      boxShadow: 3,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      CREATE ROLES
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Box sx={{ fontWeight: "bold", fontSize: "20px" }}>
                        {/* <InputLabel>Role name</InputLabel>  */}
                        Role name
                      </Box>
                      <OutlinedInput sx={{ Color: "secondary.main" }} />
                      {/* <input type="text" style={{widows:'200px'}}/> */}
                    </Box>
                    <Box>
                      <Box sx={{ fontWeight: "bold", fontSize: "20px", mt: 1 }}>
                        Permissions:{" "}
                      </Box>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox sx={{ color: "secondary.main" }} />
                          }
                          label="register drivers operators"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox sx={{ color: "secondary.main" }} />
                          }
                          label="create,update,delete bus"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox sx={{ color: "secondary.main" }} />
                          }
                          label="create,update,delete routes"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox sx={{ color: "secondary.main" }} />
                          }
                          label="assign drivers to bus"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox sx={{ color: "secondary.main" }} />
                          }
                          label="simulate bus motion"
                        />
                      </FormGroup>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        color="secondary"
                        variant="contained"
                        sx={{
                          height: "30.16px",
                          width: "150.37px",
                          borderRadius: "45.125px",
                          boxSizing: "border-box",
                        }}
                      >
                        <Typography sx={{ mx: "auto", width: "118.37px" }}>
                          create role
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "400px",
                      boxShadow: 3,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      ROLES LIST
                    </Box>
                    <Box sx={{ mt: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        1.driver
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                          <Button
                            onClick={() => Toggle()}
                            color="secondary"
                            variant="contained"
                            sx={{
                              height: "30.16px",
                              width: "90.37px",
                              borderRadius: "45.125px",
                              boxSizing: "border-box",
                              ml: "100px",
                            }}
                          >
                            <Typography sx={{ mx: "auto", width: "118.37px" }}>
                              edit
                            </Typography>
                          </Button>
                          <Modal show={modal} title="My Modal" close={Toggle}>
                            This is Modal content
                          </Modal>
                          <Button
                            color="secondary"
                            variant="contained"
                            sx={{
                              height: "30.16px",
                              width: "90.37px",
                              borderRadius: "45.125px",
                              boxSizing: "border-box",
                              ml: "10px",
                              backgroundColor: "#BD2424",
                            }}
                          >
                            <Typography sx={{ mx: "auto", width: "118.37px" }}>
                              delete
                            </Typography>
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Roles;
