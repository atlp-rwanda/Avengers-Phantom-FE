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
import {
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
} from "../../../redux/Action/DriversAndOperators/driversAndOperators.js";
import { ToastContainer } from "react-toastify";
import { getAllRoles } from "../../../redux/Action/RoleActions.js";
import DashbaordLayout from "./../../../Layouts/Dashboard";

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
  const UsersList = useSelector((state) => state.usersList);
  const { users, error } = UsersList;
  const UserData = useSelector((state) => state.userDetails);
  const { user, errorUser } = UserData;
  const [driverTodelID, setDriverTodelID] = useState("");

  const handleClickOpen = (e) => {
    setOpen(true);
    setDriverTodelID(e.target.dataset.uuid);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("close");
  };
  const handleUpdate = () => {
    setOpen(false);
    console.log("updating");
  };

  const [openDetail, setOpenDetail] = useState(false);

  const handleClickOpenDetail = (e) => {
    setOpenDetail(true);
    fetchSingleData(e.target.dataset.uuid);
    console.log(e.target.dataset.uuid);
  };

  const handleDeleteUser = (e) => {
    console.log("yesss");
    deleteUserDetails(driverTodelID);
    console.log(driverTodelID);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const saveIdToLocalStorage = () => {
    if (user.roleName) localStorage.setItem("roleID", JSON.stringify(user));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    return () => {};
  }, []);

  const fetchSingleData = (userId) => {
    dispatch(fetchSingleUser(userId));
  };

  const deleteUserDetails = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <DashbaordLayout>
      <ToastContainer />
      <div className="dashboard">
        <div className="containt" style={{ margin: "0" }}>
          <div className="add-button">
            <Link to="/dashboard/driveroperator/adddriver">
              <Buttons
                onClick={saveIdToLocalStorage}
                text="Add driver"
                bcolor="#012241"
                className="button-style"
              />
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

          {users && users.data ? (
            users.data.data.users.rows.map((driver, index) =>
              driver.roleName == "Driver" || driver.roleName == "driver" ? (
                <div key={index} className="driver_component">
                  <div className="driver_component_photo">
                    <img
                      src={
                        "https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg"
                      }
                      alt="karera"
                    />
                  </div>
                  <div className="driver_component_content">
                    <h3>
                      <strong>Name:</strong>
                      {driver.name}
                    </h3>
                    <h3>
                      <strong>ID Number:</strong>
                      {driver.idNumber}
                    </h3>
                  </div>
                  <div className="driver_component_contentid">
                    <h3>
                      <strong>Gender:</strong>
                      {driver.gender}
                    </h3>
                    <h3>
                      <strong>Phone:</strong>
                      {driver.telNumber}
                    </h3>
                  </div>
                  <div className="driver_component_contentbutton">
                    <h3>{driver.district}</h3>

                    <Button
                      data-uuid={driver.uuid}
                      onClick={handleClickOpenDetail}
                      size="small"
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
                      view full details
                    </Button>
                    <Button
                      data-uuid={driver.uuid}
                      onClick={handleClickOpen}
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
                  </div>
                </div>
              ) : (
                ""
              )
            )
          ) : (
            <div>No Driver found</div>
          )}
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
                with ID : {driverTodelID}?.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <button
                onClick={handleDeleteUser}
                style={{
                  marginRight: 4,
                  margin: 4,
                  backgroundColor: "#bd2424",
                  color: "white",
                }}
              >
                Delete
              </button>
              <button
                onClick={handleClose}
                style={{
                  marginRight: 4,
                  margin: 4,
                  backgroundColor: "#012241",
                  color: "white",
                }}
                bcolor="#012241"
              >
                Return
              </button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openDetail}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDetail}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"View driver detail"}</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <div className="driverdetailpopup">
                  <div className="driver_component_photo driverpop">
                    <img
                      src={
                        "https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg"
                      }
                      alt="karera"
                    />
                    <p>
                      <b>Name:</b>
                      <br />
                      {user && user.data ? user.data.data.user.name : "N/A"}
                    </p>
                    <p>
                      <b>ID:</b>
                      <br />
                      {user && user.data ? user.data.data.user.idNumber : "N/A"}
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Tel:</b>
                      <br />
                      {user && user.data
                        ? user.data.data.user.telNumber
                        : "N/A"}
                    </p>
                    <p>
                      <b>gender:</b>
                      <br />
                      {user && user.data ? user.data.data.user.gender : "N/A"}
                    </p>
                    <p>
                      <b>District:</b>
                      <br />
                      {user && user.data ? user.data.data.user.district : "N/A"}
                    </p>
                    <p>
                      <b>Sector:</b>
                      <br />
                      {user && user.data ? user.data.data.user.sector : "N/A"}
                    </p>
                    <p>
                      <b>Cell:</b>
                      <br />
                      {user && user.data ? user.data.data.user.cell : "N/A"}
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Plate nbr:</b>
                      <br />
                      {user && user.data ? user.data.data.user.carplate : "N/A"}
                    </p>
                    <p>
                      <b>Vehicle type:</b>
                      <br />
                      {user && user.data
                        ? user.data.data.user.vehicletype
                        : "N/A"}
                    </p>
                    <p>
                      <b>Capacity:</b>
                      <br />
                      {user && user.data ? user.data.data.user.capacity : "N/A"}
                    </p>
                    <p>
                      <b>Email:</b>
                      <br />
                      {user && user.data ? user.data.data.user.email : "N/A"}
                    </p>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Link
                to={`/dashboard/driveroperator/updateDriver?id=${
                  user && user.data ? user.data.data.user.uuid : "Undefined"
                }`}
              >
                <Buttons text="Edit" bcolor="#012241" />
              </Link>
              <button
                onClick={handleCloseDetail}
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  margin: "10px",
                  backgroundColor: "rgb(102, 99, 99)",
                  color: "white",
                }}
                bcolor="#012241"
              >
                Return
              </button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </DashbaordLayout>
  );
};

export default Drivers;
