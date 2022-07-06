import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Button.jsx";
import AddIcon from "@mui/icons-material/Add";
import "./DriverAndOperator.css";
import {
  Box,
  Typography,
  Button,
  Pagination,
  FormControl,
  TextField,
  Card,
} from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import CardSkeleton from "./CardSkeleton.jsx";
// import { fetchAllDrivers } from "../../../redux/Action/DriversAndOperators/driversAndOperators.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const drivers = [
  {
    name: "karera",
    role: "driver",
    car: "RAC 123D",
    id: "ID:1234",
    gender: "male",
    capacity: "CPT:100ton",
    tell: "Tell:17896",
  },
  {
    name: "un francois",
    role: "driver",
    car: "RAC 023f",
    id: "ID:1265",
    gender: "male",
    capacity: "CPT:1000ton",
    tell: "Tell:07896",
  },
  {
    name: "un francois",
    role: "driver",
    car: "RAC 023f",
    id: "ID:1265",
    gender: "male",
    capacity: "CPT:1000ton",
    tell: "Tell:07896",
  },
  {
    name: "un francois",
    role: "driver",
    car: "RAC 023f",
    id: "ID:1265",
    gender: "male",
    capacity: "CPT:1000ton",
    tell: "Tell:07896",
  },
];

const Drivers = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const driversList = useSelector((state) => state.driversList);
  // const { loading, drivers, error } = driversList;





  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openDetail, setOpenDetail] = useState(false);

  const handleClickOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };


  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllDrivers());
  //   return () => {};
  // }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="containt" style={{ margin: "0" }}>
          <div className="add-button">
            <h3 className="driver-operator-title">Drivers managment</h3>
            <Link to="adddriver">
              <Buttons
                text="Add driver"
                bcolor="#012241"
                className="button-style"
              />
            </Link>
          </div>
          <hr />

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
          {/* {isLoading && <CardSkeleton skeletoncount={5} />} */}
          
          {drivers.map((driver, index) => (
            <div key={index} className="driver_component">
              <div className="driver_component_photo">
                <img src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg'} alt="karera" />
              </div>
              <div className="driver_component_content">
                <h3>{driver.name}</h3>
                <p>{driver.role}</p>
                <h4>{driver.car}</h4>
              </div>
              <div className="driver_component_contentid">
                <h3>{driver.id}</h3>
                <p>{driver.gender}</p>
                <h4>{driver.tell}</h4>
              </div>
              <div className="driver_component_contentbutton">
                <h3>{driver.capacity}</h3>

               
                <Button
                  onClick={handleClickOpenDetail}
                  size="small"
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
                    marginRight: 3,
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
                    marginRight: 3,
                    "&:hover": {
                      background: "#bd2424",
                      opacity: 0.8,
                      transition: "0.8s",
                    },
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Delete"}</DialogTitle>
            <div className="deletediv">
              <DeleteOutlineRoundedIcon className="deleteicon" />
            </div>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete driver
                <br />
                with ID nmbr 12345678?.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Buttons onClick={handleClose} text="Delete" bcolor="#bd2424" />
              <Buttons onClick={handleClose} text="Return" bcolor="#012241" />
            </DialogActions>
          </Dialog>

          <Dialog
            open={openDetail}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDetail}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"view driver detail"}</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div className="driverdetailpopup">
                  <div className="driver_component_photo driverpop">
                    <img src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg'} alt="karera" />
                    <p>
                      <b>Name:</b>
                      <br />
                      rudasingwa
                    </p>
                    <p>
                      <b>ID:</b>
                      <br />
                      1234567
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Tell:</b>
                      <br />
                      078965
                    </p>
                    <p>
                      <b>gender:</b>
                      <br />
                      male
                    </p>
                    <p>
                      <b>District:</b>
                      <br />
                      Rusizi
                    </p>
                    <p>
                      <b>Sector:</b>
                      <br />
                      Kagano
                    </p>
                    <p>
                      <b>Cell:</b>
                      <br />
                      Kabuga
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Plate nbr:</b>
                      <br />
                      RAC2340Z
                    </p>
                    <p>
                      <b>Vehicle type:</b>
                      <br />
                      Hundayi
                    </p>
                    <p>
                      <b>Capacity:</b>
                      <br />
                      100
                    </p>
                    <p>
                      <b>Name:</b>
                      <br />
                      rudasingwa
                    </p>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Buttons onClick={handleClose} text="Edit" bcolor="#012241" />
              <Buttons
                onClick={handleClose}
                text="Return"
                bcolor="rgb(102, 99, 99)"
              />
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
