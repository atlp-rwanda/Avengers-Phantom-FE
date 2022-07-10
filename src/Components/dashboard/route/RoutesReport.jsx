import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "../Dashboard.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import WarningIcon from "@mui/icons-material/Warning";
import { Add } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import UpdateRouteButton from "./UpdateRouteButton.jsx";
import Skeleton from "./Skeletons/SkeletonElement.jsx";
import { styled } from "@mui/material/styles";
import DashboardLayout from "../../../Layouts/Dashboard";
import { ToastContainer } from "react-toastify";
import {
  deleteRoute,
  fetchAllroutes,
  fetchSingleRoute,
} from "../../../redux/Action/routes";
import "./AddRoutes.css";
import {
  Box,
  Grid,
  ListItemButton,
  ListItemText,
  Typography,
  FormControl,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OneRoute = () => {
  const [open, setOpen] = useState(false);

  const routeList = useSelector((state) => state.routesList);
  const { loading, routes, error } = routeList;

  const [openUpdater, setOpenUpdater] = useState(false);

  const handleClickOpenUpdater = (routeUuid) => {
    setOpenUpdater(true);
    dispatch(fetchSingleRoute(routeUuid));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdater = () => {
    setOpenUpdater(false);
  };
  const handleDelete = () => {
    setOpen(false);
    dispatch(deleteRoute(routeUuid));
    window.location.reload();
  };

  const handleClearUpdater = () => {
    setOpen(false);
  };
  const handleClear = () => {
    setOpen(false);
  };

  const [routeID, setRouteID] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [stop, setStop] = useState("");

  const [routeIDError, setRouteIDError] = useState(false);
  const [startPointError, setStartPointError] = useState(false);
  const [endPointError, setEndPointError] = useState(false);
  const [stopError, setStopError] = useState(false);

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [routesPerPage, setroutesPerPage] = useState(5);

  const handleAddRoute = () => {
    const List = document.querySelector(".list-route");
    const ListItem = document.createElement("li");
    ListItem.style.border = "1px solid #c4c4c4";
    ListItem.style.height = "40px";
    ListItem.style.paddingLeft = "20px";

    ListItem.innerHTML = stop;
    List.appendChild(ListItem);
  };

  const fetchSingleDta = (routeUuid) => {
    dispatch(fetchSingleRoute(routeUuid));
  };

  const handleSaveId = (id) => {
    localStorage.setItem("routeID", id);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllroutes());
    return () => {};
  }, []);

  return (
    <DashboardLayout>
      <ToastContainer />
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deleting item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to delete this route?
            </DialogContentText>
            <Typography>
              <WarningIcon sx={{ color: "#bd2424" }} />
              This action cannot be revoked
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ backgroundColor: "#012241", color: "#fff" }}
              className="buttons"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              sx={{ backgroundColor: "#bd2424", color: "#fff" }}
              className="buttons"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openUpdater}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>Route Update</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you want to update this route?
            </DialogContentText>
            <UpdateRouteButton />
          </DialogContent>
        </Dialog>
      </div>
      <div className="dashboard">
        <div className="containt">
          {/* <div className="header">
            <Box>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <Button
                    component={Link}
                    to={`/dashboard/addroute`}
                    variant="Text"
                    sx={{
                      backgroundColor: "#012241",
                      minWidth: "100px",
                      textTransform: "capitalize",
                      color: "#fff",
                      height: 40,
                      "&:hover": {
                        background: "#012241",
                        opacity: 0.8,
                      },
                    }}
                    endIcon={<Add sx={{ display: "block" }} />}
                  >
                    New Route
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <FormControl
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        lg: "700px 70px",
                        xs: "200px 20px",
                        md: "500px 50px",
                      },
                      marginLeft: "auto",
                      width: { lg: 800, xs: "100%" },
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
                      <SearchIcon
                        sx={{ fontSize: { lg: 20, xs: 12, md: 15 } }}
                      />
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </div> */}

          <div className="add-button">
            <Button
              component={Link}
              to={`/dashboard/addroute`}
              variant="contained"
              sx={{
                color: "white",
                height: "35px",
                width: "150.37px",
                borderRadius: " 5px",
                backgroundColor: "#012241",
                cursor: "pointer",
                border: "none",
              }}
            >
              Add Route
            </Button>
            <Box sx={{ margin: 3 }}>
              <FormControl
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    lg: "700px 70px",
                    xs: "200px 20px",
                    md: "500px 50px",
                  },
                  marginLeft: "auto",
                  width: { lg: 800, xs: "100%" },
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
          </div>

          <div>
            {loading ? (
              <Skeleton cards={4} />
            ) : loading === false && routes && routes.data ? (
              routes.data.routes.routes.rows.map((route) => (
                <Grid container minHeight={30} spacing={1} key={route.uuid}>
                  <Grid
                    item
                    xs={12}
                    sx={{ margin: { xs: 1, sm: 1 }, borderRadius: "3px" }}
                    border={"1px solid #364878"}
                  >
                    <Box sx={{ mb: 1, px: 2 }}>
                      <Box
                        my={2}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box my={2} sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              width: 300,
                              display: "flex",
                              marginRight: "10px",
                              justifyContent: "center",
                              color: "green",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              border: "2px solid green",
                              width: "25px",
                              height: "25px",
                            }}
                          >
                            A
                          </Typography>
                          <Typography sx={{ display: "inline-block" }}>
                            {route.startLocation}
                          </Typography>
                        </Box>

                        <Box my={2} sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              width: 50,
                              fontWeight: "bold",
                              display: "flex",
                              marginLeft: "10px",
                              Right: "10px",
                              justifyContent: "center",
                              color: "green",
                            }}
                          >
                            {" "}
                            ...............{" "}
                          </Typography>
                        </Box>

                        <Box my={2} sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              width: 200,
                              display: "flex",
                              marginRight: "10px",
                              justifyContent: "center",
                              color: "blue",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              border: "2px solid blue",
                              width: "25px",
                              height: "25px",
                            }}
                          >
                            B
                          </Typography>
                          <Typography sx={{ display: "inline-block" }}>
                            {route.endLocation}
                          </Typography>
                        </Box>
                        <Box sx={{}}>
                          <Button
                            component={Link}
                            onClick={() => handleSaveId(route.uuid)}
                            to={`/dashboard/singleRoute?id=${route.uuid}`}
                            variant="contained"
                            style={{
                              backgroundColor: "#012241",
                              width: "100px",
                              padding: "2px",
                              marginTop: "10px",
                              fontSize: "14px",
                            }}
                          >
                            Details
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              ))
            ) : (
              !routes && <div> No route found</div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OneRoute;
