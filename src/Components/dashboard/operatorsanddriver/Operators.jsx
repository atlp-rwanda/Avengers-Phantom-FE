import React, { useEffect, useState } from "react";
import Buttons from "./Button.jsx";
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
import CardSkeleton from "./CardSkeleton.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchAllUsers, fetchSingleUser } from "../../../redux/Action/DriversAndOperators/driversAndOperators.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Operators = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const usersList = useSelector((state) => state.usersList);
  const { users, errorUser } = usersList;

  const UserData = useSelector((state) => state.userDetails);
  const { user, errorUserDetails } = UserData;
  const [operatorTodelID, setOperatorTodelID] = useState("");

  

  const handleClickOpen = (e) => {
    setOpen(true);
    setOperatorTodelID(e.target.dataset.uuid)
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const [openDetail, setOpenDetail] = React.useState(false);

  const handleClickOpenDetail = (e) => {
    setOpenDetail(true);
    fetchSingleData(e.target.dataset.uuid)
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const dispatch = useDispatch();

  
  const fetchSingleData = (userId)=>{
    dispatch(fetchSingleUser(userId));
  }

  const handleDeleteUser = (e) => {
    console.log('yesss')
    deleteUserDetails(operatorTodelID)
    console.log(operatorTodelID)
   
  };
  const deleteUserDetails = (userId)=>{
    dispatch(deleteUser(userId));
  }

  useEffect(() => {
    dispatch(fetchAllUsers());
    return () => {};
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="containt" style={{ margin: "0" }}>
          <div className="add-button">
            <h3 className="driver-operator-title">Operators managment</h3>
            <Link to="addoperator">
              <Buttons
                text="Add operator"
                bcolor="#012241"
                className="operator_button"
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
          {isLoading && <CardSkeleton skeletoncount={5} />}
          {users && users.data && users.data.data.users ? users.data.data.users.rows.map((operator, index) =>operator.roleName=="operator" ? (
            <div key={index} className="driver_component">
              <div className="operator_component_photo">
                <img src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg'} alt="karera" />
              </div>
              <div className="operator_component_container">
                <h3>{operator.name}</h3>
                <p>{operator.roleName}</p>
                <h4>{operator.car}</h4>
              </div>
              <div className="operator_component_container_info">
                <h3>{operator.idNumber}</h3>
                <p>{operator.roleName}</p>
                <h4>{operator.gender}</h4>
              </div>
              <div className="driver_component_contentbutton">
                <h3>{operator.telNumber}</h3>
               
                <Button
                  data-uuid={operator.uuid}
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
                  data-uuid={operator.uuid}
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
          ): "") : <div>No Operators found</div>}

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
                Are you sure you want to delete operator
                <br />
                with ID: {operatorTodelID}?.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
            <button onClick={handleDeleteUser} style={{ marginRight: 4,margin: 4, backgroundColor: "#bd2424", color:"white"}}>Delete</button>
            <button onClick={handleClose} style={{ marginRight: 4,margin: 4, backgroundColor: "#012241", color:"white"}} bcolor="#012241">Return</button>
            
            </DialogActions>
          </Dialog>

          <Dialog
            open={openDetail}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDetail}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"view operator detail"}</DialogTitle>

            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
              <div className="driverdetailpopup">
                  <div className="driver_component_photo driverpop">
                    <img src={'https://res.cloudinary.com/avengersphantom/image/upload/v1656445446/Images/dashboard_image/photo_svd054.jpg'} alt="karera" />
                    <p>
                      <b>Name:</b>
                      <br />
                      {user && user.data ? user.data.data.user.name: "N/A"}
                    </p>
                    <p>
                      <b>ID:</b>
                      <br />
                      {user && user.data ? user.data.data.user.idNumber: "N/A"}
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Tel:</b>
                      <br />
                      {user && user.data ? user.data.data.user.telNumber: "N/A"}
                    </p>
                    
                    <p>
                      <b>gender:</b>
                      <br />
                      {user && user.data ? user.data.data.user.gender: "N/A"}
                    </p>
                    <p>
                      <b>District:</b>
                      <br />
                      {user && user.data ? user.data.data.user.district: "N/A"}
                    </p>
                    <p>
                      <b>Sector:</b>
                      <br />
                      {user && user.data ? user.data.data.user.sector: "N/A"}
                    </p>
                    <p>
                      <b>Cell:</b>
                      <br />
                      {user && user.data ? user.data.data.user.cell: "N/A"}
                    </p>
                  </div>
                  <div className="driverpop">
                    <p>
                      <b>Plate nbr:</b>
                      <br />
                      {user && user.data ? user.data.data.user.carplate: "N/A"}
                    </p>
                    <p>
                      <b>Vehicle type:</b>
                      <br />
                      {user && user.data ? user.data.data.user.vehicletype: "N/A"}
                    </p>
                    <p>
                      <b>Capacity:</b>
                      <br />
                      {user && user.data ? user.data.data.user.capacity: "N/A"}
                    </p>
                    <p>
                      <b>Email:</b>
                      <br />
                      {user && user.data ? user.data.data.user.email: "N/A"}
                    </p>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>

             
              <Link to={`updateOperator?id=${user && user.data ? user.data.data.user.uuid:'Undefined'}`}>
                <Buttons text="Edit" bcolor="#012241" />
              </Link>
          
              <button onClick={handleCloseDetail} style={{ paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px",paddingBottom: "10px",margin: "10px", backgroundColor: "rgb(102, 99, 99)", color:"white"}} bcolor="#012241">Return</button>
       
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Operators;
