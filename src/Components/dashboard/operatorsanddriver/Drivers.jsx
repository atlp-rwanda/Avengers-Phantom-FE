import React from "react";
import Button from "./Button.jsx";
import Photo from "../../../static/dashboard_image/photo.jpeg";
import AddIcon from "@mui/icons-material/Add";
import "./DriverAndOperator.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Sidebar from "../sidebar/Sidebar.jsx";
import DashNavbar from "../dashnavbar/DashNavBar.jsx";
import "../Dashboard.css";
=======
>>>>>>> 07ad962e (ft signin rebase)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// export default function AlertDialogSlide() {

// }

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
];

const Drivers = () => {
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
          <h3>Drivers managment</h3>
          <Link to="adddriver">
            <Button text="Add driver" bcolor="#012241" />
          </Link>
          <hr />
          {drivers.map((driver, index) => (
            <div key={index} className="driver_component">
              <div className="driver_component_photo">
                <img src={Photo} alt="karera" />
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
                Are you sure you want to delete driver
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
            <DialogTitle>{"view driver detail"}</DialogTitle>

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
      <h3>Drivers managment</h3>
      <Link to="adddriver">
        <Button startIcon={<AddIcon />} text="Add driver" bcolor="#012241" />
      </Link>
      <hr />
      {drivers.map((driver, index) => (
        <div key={index} className="driver_component">
          <div className="driver_component_photo">
            <img src={Photo} alt="karera" />
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
            Are you sure you want to delete driver
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
        <DialogTitle>{"view driver detail"}</DialogTitle>

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

export default Drivers;
