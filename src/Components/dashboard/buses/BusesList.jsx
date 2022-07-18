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
import { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Slide from "@mui/material/Slide";
import DashboardLayout from "./../../../Layouts/Dashboard";
import { fetchAllbuses, deletebus } from "../../../redux/Action/fetchallbuses";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import SkeletonElement from "./skeletons/SkeletonElement.jsx";
import "./style.css";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Buses = () => {
  const dispatch = useDispatch();
  const Buses = useSelector((state) => state.fetchbuses?.buses);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  const [busId, setBusId] = useState("");
  const [busPlateNumber, setBusPlateNumber] = useState("");
  const [openDetail, setOpenDetail] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const itemsPerPage = 2;
  const [page, setPage] = React.useState(1);

  const handleClickOpen = (id, plateNumber) => {
    setOpen(true);
    setBusId(id);
    setBusPlateNumber(plateNumber);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleDelete = () => {
    dispatch(deletebus(busId));
    setOpen(false);
  };

  const handleGetOneBus = (id) => {
    localStorage.setItem("busId", id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleBusses = async () => {
    dispatch(fetchAllbuses());
  };

  useEffect(() => {
    handleBusses();
    setLoading(false);
  }, []);

  return (
    <DashboardLayout>
      <ToastContainer />
      <div className="dashboard">
        <div className="containt">
          <div className="add-button">
            <Link to="/dashboard/bus/register">
              <button
                style={{
                  color: "white",
                  variant: "contained",
                  height: "35px",
                  width: "150.37px",
                  borderRadius: "5px",
                  background: "#012241",
                  cursor: "pointer",
                  border: "none",
                }}
                className="operator_button"
              >
                Add Bus
              </button>
            </Link>
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
              {`${Buses?.length} buses`}
            </Typography>

            {loading ? (
              <SkeletonElement />
            ) : (
              Buses?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(
                (bus) => {
                  return (
                    <Card
                      sx={{ marginBottom: 3, padding: "5px" }}
                      key={bus.uuid}
                    >
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
                          src={
                            "https://res.cloudinary.com/avengersphantom/image/upload/v1656445463/Images/images/busbackground_lo7ra7.jpg"
                          }
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
                            sx={{
                              fontWeight: 700,
                              fontSize: { lg: 13, xs: 10 },
                            }}
                          >
                            {bus.capacity}
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
                            sx={{
                              fontWeight: 700,
                              fontSize: { lg: 13, xs: 10 },
                            }}
                          >
                            {bus.type}
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
                            sx={{
                              fontWeight: 700,
                              fontSize: { lg: 13, xs: 10 },
                            }}
                          >
                            {bus.plateNumber}
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
                          onClick={() => handleGetOneBus(bus.uuid)}
                          component={Link}
                          to={`/dashboard/bus?id=${bus.uuid}`}
                          sx={{
                            background: "#012241",
                            color: "white",
                            fontSize: { lg: 10, xs: 7 },
                            p: 1,
                            height: 20,
                            marginRight: 3,
                            "&:hover": {
                              background: "#012241",
                              opacity: 0.8,
                              transition: "0.8s",
                            },
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          onClick={() =>
                            handleClickOpen(bus.uuid, bus.plateNumber)
                          }
                          sx={{
                            background: "#bd2424",
                            color: "white",
                            fontSize: { lg: 10, xs: 7 },
                            p: 1,
                            height: 20,
                            marginRight: 2,
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
                  );
                }
              )
            )}
          </Box>

          {
            <Pagination
              size="small"
              count={Math.ceil(Buses?.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              variant="outlined"
              siblingCount={1}
              boundaryCount={1}
              showFirstButton
              showLastButton
              sx={{ color: "#bd2424" }}
            ></Pagination>
          }

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
                Are you sure you want to delete bus with Plate number{" "}
                {busPlateNumber}.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleDelete}
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
    </DashboardLayout>
  );
};

export default Buses;
