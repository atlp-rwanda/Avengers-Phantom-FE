import React, { useRef, useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";
import socket from "../../utils/socket";
import { calculateTime } from "./CalculateTime";
import { Pause } from "@material-ui/icons";

const DriverControl = ({props}) => {
  const goRef = useRef();
  const startRef = useRef();
  const logoRef = useRef();
  const audioRef = useRef();
  const currentProps = useRef(bus)
  
  const { 
    start,
    setStart,
    setEngine,
    setSpeed,
    setPause,
    passengers,
    setPassengers,
    setResume,
    speed,
    setIsSpeed,
    setIsSlowing,
    freeSeats,
    setFreeSeats,
    engine
  } = props;

  const {position, summary, ...bus} = props;
  currentProps.current = bus;
  console.log('Bus Info: ', bus)
  socket.on('PAGING', () => {
    if(props.currentCoords) socket.emit('PAGING_RESPONSE', currentProps.current);
  })

  const handlePower = () => {
    startRef.current.style.cssText = "color:red;background-color:red";
    setEngine(engine => !engine);
    const message = !engine ? "Engine Started" : "Engine turned off"
    notify(message);
    socket.emit("START_ENGINE", bus);
  };

  const handleAccelate = () => {
    notify("Speeding up the Bus.");
    setSpeed(speed/2);
    setIsSpeed(true);
    logoRef.current.style.cssText =
      "animation: 0.1s vibrate linear infinite;color:red;";
    socket.emit("ACCELERATE_BUS", bus);
  };

  const handleBreak = () => {
    setIsSlowing(true);
    setSpeed(speed*2);
    notify("Slowing down the Bus.");
    socket.emit("SLOW_BUS", bus);
  };

  const handleStart = () => {
    goRef.current.style.cssText = "color:red;background-color:red";
    setStart(true);
    notify("Started moving the Bus");
    socket.emit("MOVE_BUS", bus);
  };

  const handlePause = () => {
    setPause(true);
    setStart(false);
    setResume(false);
    notify("Bus is on Pause Mode");
    socket.emit("PAUSE_BUS", bus);
  };

  const addPassenger = () => {
    if (start) return notify("Pause the Bus before removing this passenger")
    if(freeSeats == 0) return notify("the bus is full");
    setFreeSeats((freeSeats) => freeSeats - 1);
    notify("Adding Passengers");
    socket.emit("ADD_PASSENGER", bus);
  };

  const removePassenger = () => {
    if (start) return notify("Pause the Bus before removing this passenger")
    if (freeSeats != bus.capacity) {
      setFreeSeats((freeSeats) => freeSeats + 1);
      notify("Removing Passengers");
    } else {
        notify("No Passenger To Remove");
    }
    socket.emit("REMOVE_PASSENGER", bus);
  };

  const handleResume = () => {
    if(!engine) return notify('Can not resume while car is not on move!')
    setResume(true);
    setStart(true);
    notify("Bus On Move")
    socket.emit("RESUME", bus)
  };
  const notify = (toastMsg) => toast(toastMsg);

  return (
    <React.Fragment>
      <ToastContainer autoClose={500} limit={2} transition={Slide}/>
      <div className="Car__controllers">
        <div className="Car__controllers_speedMetter">
          <div className="Car__controllers_speedMetter__logo" ref={logoRef}>
            {calculateTime(props.summary)}
          </div>
        </div>
        <div className="Car__controllers_actions">
          <Tooltip title="Engine" arrow>
            <button
              className="Car__controllers_start"
              onClick={handlePower}
              ref={startRef}
            >
              <PowerSettingsNewIcon />
            </button>
          </Tooltip>
          <Tooltip title="Break" arrow>
            <button className="Car__controllers_breake" onClick={handleBreak}>
              |||
            </button>
          </Tooltip>
          <Tooltip title="Accelerator" arrow>
            <button
              className="Car__controllers_accelerator"
              onClick={handleAccelate}
            >
              |||
            </button>
          </Tooltip>
          <Tooltip title="Start moving" arrow>
            <button
              className="Car__controllers_accelerator"
              ref={goRef}
              onClick={handleStart}
            >
              Go
            </button>
          </Tooltip>
          <Tooltip title="Pause" arrow>
            <button
              className="Car__controllers_accelerator"
              onClick={handlePause}
            >
              <PauseIcon />
            </button>
          </Tooltip>
          <Tooltip title="Resume" arrow>
            <button
              className="Car__controllers_accelerator"
              onClick={handleResume}
            >
              <ArrowRightIcon />
            </button>
          </Tooltip>
          <Tooltip title="Add Perssengers" arrow>
            <button
              className="Car__controllers__persengers"
              onClick={addPassenger}
            >
              <PersonAddAltIcon />
            </button>
          </Tooltip>
          <Tooltip title="Remove Perssengers" arrow>
            <button
              className="Car__controllers__persengers"
              onClick={removePassenger}
            >
              <PersonRemoveIcon />
            </button>
          </Tooltip>
        </div>
        <div className="Car__controllers__info">
          <div className="Car__controllers__platenumber">
            <div>
              <p> Plate Number </p>
            </div>
            <div>
              <p>{bus.reg}</p>
            </div>
          </div>
          <div className="Car__controllers__route">
            <div className="Car__controllers__route-values">
              <div>
                <p>{bus.route.origin.name}</p>
              </div>
              <div>
                <p>{bus.route.destination.name}</p>
              </div>
            </div>
          </div>
          <div className="Car__controllers__route"> 
          <div className="Car__controllers__route-values">
            <div>
              <p>Free seats</p>
            </div>
            <div>
              <p>{freeSeats}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DriverControl;
