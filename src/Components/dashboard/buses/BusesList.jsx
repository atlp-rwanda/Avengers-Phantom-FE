import React from "react";
import {
  Box,
  Typography,
  Button,
  Pagination,
  FormControl,
  TextField,
  Card,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import Photo from "../../../static/images/busbackground.jpg";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Slide from "@mui/material/Slide";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Buses = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDetail, setOpenDetail] = React.useState(false);

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <>
      <DashNavbar />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <Box
            sx={{
              p: 1,
              borderBottom: "1px solid #012241",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { lg: 18, xs: 13, md: 15 },
                color: "#012241",
              }}
            >
              Buses Management
            </Typography>
            <Button
              component={Link}
              to="/bus/register"
              sx={{
                background: "#012241",
                width: { lg: 100, xs: 50, md: 90 },
                color: "white",
                borderRadius: 68,
                fontSize: { lg: 10, xs: 5, md: 9 },
                "&:hover": {
                  background: "#012241",
                  opacity: 0.8,
                  transition: "0.8s",
                },
              }}
            >
              <AddIcon
                sx={{ marginRight: 1, fontSize: { lg: 15, xs: 10, md: 13 } }}
              />
              Add bus
            </Button>
          </Box>
          <Box sx={{ margin: 3 }}>
            <FormControl
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  lg: "500px 70px",
                  xs: "200px 20px",
                  md: "500px 50px",
                },
                marginLeft: "auto",
                width: { lg: 600, xs: "100%" },
              }}
            >
              <TextField
                name="search"
                size="small"
                placeholder="search"
                type="search"
              />
              <Button
                sx={{
                  background: "#012241",
                  color: "white",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  "&:hover": {
                    background: "#012241",
                    opacity: 0.8,
                    transition: "0.8s",
                  },
                }}
              >
                <SearchIcon sx={{ fontSize: { lg: 20, xs: 12, md: 15 } }} />
              </Button>
            </FormControl>
          </Box>
          <Box sx={{ margin: 3, display: "block" }}>
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { lg: 14, xs: 12, md: 13 },
                p: 2,
                color: "#012241",
              }}
            >
              10 Buses
            </Typography>
            <Card sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "200px 200px 200px 200px",
                    xs: "100%",
                    md: "400px 400px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={Photo}
                  alt="bus image"
                  sx={{
                    width: { lg: 200, xs: 1 },
                    height: { lg: 130, xs: 200 },
                  }}
                />
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Capacity
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    100
                  </Typography>
                  <Typography
                    component="label"
                    sx={{
                      textTransform: "uppercase",
                      color: "#675B5B",
                      fontSize: { lg: 12, xs: 9 },
                    }}
                  >
                    Passengers
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Vehicle type
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    3B
                  </Typography>
                  <Typography
                    component="label"
                    sx={{
                      textTransform: "uppercase",
                      color: "#675B5B",
                      fontSize: { lg: 12, xs: 9 },
                    }}
                  >
                    type
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Plate number
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    RAB 100 C
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "150px 100px",
                    xs: "100px 50px",
                  },
                  marginLeft: "auto",
                  gridGap: "1.3rem",
                  width: { lg: 280, xs: 200 },
                }}
              >
                <Button
                  size="small"
                  component={Link}
                  to="/bus/1"
                  sx={{
                    background: "#012241",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 0,
                    color: "white",
                    fontSize: { lg: 10, xs: 7 },
                    p: 1,
                    height: 20,
                    "&:hover": {
                      background: "#012241",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  view full details
                </Button>
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    background: "#bd2424",
                    color: "white",
                    fontSize: { lg: 10, xs: 7 },
                    p: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 0,
                    height: 20,
                    "&:hover": {
                      background: "#bd2424",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>

            <Card sx={{ marginBottom: 3 }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "200px 200px 200px 200px",
                    xs: "100%",
                    md: "400px 400px",
                  },
                }}
              >
                <Box
                  component="img"
                  src={Photo}
                  alt="bus image"
                  sx={{
                    width: { lg: 200, xs: 1 },
                    height: { lg: 130, xs: 200 },
                  }}
                />
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Capacity
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    100
                  </Typography>
                  <Typography
                    component="label"
                    sx={{
                      textTransform: "uppercase",
                      color: "#675B5B",
                      fontSize: { lg: 12, xs: 9 },
                    }}
                  >
                    Passengers
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Vehicle type
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    3B
                  </Typography>
                  <Typography
                    component="label"
                    sx={{
                      textTransform: "uppercase",
                      color: "#675B5B",
                      fontSize: { lg: 12, xs: 9 },
                    }}
                  >
                    type
                  </Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: "block", textAlign: "center", p: 2 }}
                >
                  <Typography
                    component="label"
                    sx={{
                      color: "#675B5B",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: { xs: 12, lg: 15 },
                    }}
                  >
                    Plate number
                  </Typography>
                  <Typography
                    component="p"
                    sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
                  >
                    RAB 100 C
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "150px 100px",
                    xs: "100px 50px",
                  },
                  marginLeft: "auto",
                  gridGap: "1.3rem",
                  width: { lg: 280, xs: 200 },
                }}
              >
                <Button
                  size="small"
                  component={Link}
                  to="/bus/1"
                  sx={{
                    background: "#012241",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 0,
                    color: "white",
                    fontSize: { lg: 10, xs: 7 },
                    p: 1,
                    height: 20,
                    "&:hover": {
                      background: "#012241",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  view full details
                </Button>
                <Button
                  onClick={handleClickOpen}
                  sx={{
                    background: "#bd2424",
                    color: "white",
                    fontSize: { lg: 10, xs: 7 },
                    p: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 0,
                    height: 20,
                    "&:hover": {
                      background: "#bd2424",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          </Box>
          <Pagination
            size="small"
            count={10}
            variant="outlined"
            siblingCount={1}
            boundaryCount={1}
            sx={{ color: "#bd2424" }}
          ></Pagination>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle sx={{ textAlign: "center", margin: 3 }}>
              Confirm Delete
            </DialogTitle>
            <DeleteOutlineRoundedIcon
              sx={{ textAlign: "center", margin: "auto", fontSize: 100 }}
            />
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete bus with Plate number RAB 100
                B?.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  p: 1,
                  color: "#fff",
                  borderRadius: 68,
                  height: 20,
                  width: 1,
                  background: "#bd2424",
                }}
              >
                Yes, I am sure
              </Button>
              <Button
                onClick={handleClose}
                sx={{
                  color: "#fff",
                  background: "#012241",
                  height: 20,
                  width: 1,
                  borderRadius: 68,
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Buses;
