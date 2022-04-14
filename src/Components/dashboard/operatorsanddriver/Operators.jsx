import React from "react";
import Photo from "../../../static/dashboard_image/photo.jpeg";
import Button from "./Button.jsx";
import "./DriverAndOperator.css";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
<<<<<<< HEAD
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
=======
>>>>>>> 07ad962e (ft signin rebase)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const operators = [
  {
    name: "amustrong",
    role: "operators",
    car: "RAC 123D",
    id: "ID:1234",
    gender: "male",
    tell: "Tell:17896",
  },
  {
    name: "un jeado",
    role: "operators",
    car: "RAC 023f",
    id: "ID:1234",
    gender: "male",
    tell: "Tell:17896",
  },
];

const Operators = () => {
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
    <div>
<<<<<<< HEAD
      <DashNavbar style={{ position: "fixed" }} />
      <div className="dashboard">
        <div className="generalmenubar">{<Sidebar />}</div>
        <div className="containt">
          <h3>Operators managment</h3>
          <Link to="addoperator">
            <Button
              text="Add operator"
              bcolor="#012241"
              className="operator_button"
            />
          </Link>
          <hr />
          {operators.map((operator, index) => (
            <div key={index} className="operator_component">
              <div className="operator_component_photo">
                <img src={Photo} alt="karera" />
              </div>
              <div className="operator_component_container">
                <h3>{operator.name}</h3>
                <p>{operator.role}</p>
                <h4>{operator.car}</h4>
              </div>
              <div className="operator_component_container_info">
                <h3>{operator.id}</h3>
                <p>{operator.role}</p>
                <h4>{operator.gender}</h4>
              </div>
              <div className="operator_component_container_button">
                <h3>{operator.tell}</h3>
                <Button
                  handlerFunc={handleClickOpenDetail}
                  text="View details"
                  bcolor="#012241"
                />
                <br />
                <Button
                  handlerFunc={handleClickOpen}
                  text="Delete"
                  bcolor="rgb(88, 0, 0)"
                />
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
                Are you sure you want to delete operator
                <br />
                with ID nmbr 12345678?.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                text="Delete"
                bcolor="rgb(88, 0, 0)"
              />
              <Button onClick={handleClose} text="Return" bcolor="#012241" />
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
                    <img src={Photo} alt="karera" />
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
                      <b>Operator role:</b>
                      <br />
                      Manager
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
              <Button onClick={handleClose} text="Edit" bcolor="#012241" />
              <Button
                onClick={handleClose}
                text="Return"
                bcolor="rgb(102, 99, 99)"
              />
            </DialogActions>
          </Dialog>
        </div>
      </div>
=======
      <h3>Operators managment</h3>
      <Link to="addoperator">
        <Button
          text="Add operator"
          bcolor="#012241"
          className="operator_button"
        />
      </Link>
      <hr />
      {operators.map((operator, index) => (
        <div key={index} className="operator_component">
          <div className="operator_component_photo">
            <img src={Photo} alt="karera" />
          </div>
          <div className="operator_component_container">
            <h3>{operator.name}</h3>
            <p>{operator.role}</p>
            <h4>{operator.car}</h4>
          </div>
          <div className="operator_component_container_info">
            <h3>{operator.id}</h3>
            <p>{operator.role}</p>
            <h4>{operator.gender}</h4>
          </div>
          <div className="operator_component_container_button">
            <h3>{operator.tell}</h3>
            <Button
              handlerFunc={handleClickOpenDetail}
              text="View details"
              bcolor="#012241"
            />
            <br />
            <Button handlerFunc={handleClickOpen} text="Delete" bcolor="red" />
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
            Are you sure you want to delete operator
            <br />
            with ID nmbr 12345678?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} text="Delete" bcolor="red" />
          <Button onClick={handleClose} text="Return" bcolor="#012241" />
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
                <img src={Photo} alt="karera" />
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
                  <b>Operator role:</b>
                  <br />
                  Manager
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
          <Button onClick={handleClose} text="Edit" bcolor="#012241" />
          <Button
            onClick={handleClose}
            text="Return"
            bcolor="rgb(102, 99, 99)"
          />
        </DialogActions>
      </Dialog>
>>>>>>> 07ad962e (ft signin rebase)
    </div>
  );
};

export default Operators;
