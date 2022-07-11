import React, { useRef, useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";
import socket from "./../../utils/sokect";
import { calculateTime } from "./CalculateTime";

const SpeedMeter = ({
  seStart,
  setEngine,
  setSpeed,
  pause,
  setPause,
  start,
  engine,
  passengers,
  setPassengers,
  summary,
  setResume,
  speed,
  setIsSpeed,
  setIsSlowing,
  state,
  setState,
}) => {
  const [socketMessage, setSocketMessage] = useState("");
  const goRef = useRef();
  const startRef = useRef();
  const logoRef = useRef();
  const audioRef = useRef();
  const movingCarRef = useRef();
  const breakRef = useRef();

  const handlePower = () => {
    startRef.current.style.cssText = "color:red;background-color:red";
    setEngine(true);
    notify("Engine Started");
    socket.emit("Engine", "Started Engine now");
    socket.on("Engine", (data) => {
      setSocketMessage(data);
    });
    setState("Engine");
  };

  const handleAccelate = () => {
    notify("Speeding up the Bus.");
    setSpeed(speed - 100);
    setIsSpeed(true);
    logoRef.current.style.cssText =
      "animation: 0.1s vibrate linear infinite;color:red;";
    socket.emit("Acceleration", "Speeding up");
    socket.on("Acceleration", (data) => {
      setSocketMessage(data);
    });
    setState("speedingup");
    setSpeed(speed);
  };

  const handleBreak = () => {
    setIsSlowing(true);
    setSpeed(speed + 100);
    notify("Slowing down the Bus.");
    socket.emit("slowing", "slowing down bus");
    socket.on("slowing", (data) => {
      setSocketMessage(data);
    });
    setState("slowingDown");
    setSpeed(speed);
  };

  const handleStart = () => {
    goRef.current.style.cssText = "color:red;background-color:red";
    seStart(true);
    notify("Started moving the Bus");
    socket.emit("move", "Started");
    socket.on("move", (data) => {
      setSocketMessage(data);
    });
    setState("move");
  };

  const handlePause = () => {
    setPause(true);
    seStart(false);
    setResume(false);
    notify("Bus is on Pause Mode or Moving Mode");
    socket.emit("pause", "pausing");
    socket.on("pause", (data) => {
      setSocketMessage(data);
    });
    setState("onPause");
  };

  const addPassenger = () => {
    setPassengers((prev) => prev + 1);
    notify("Adding Passengers");
    socket.emit("addpassenger", "one more added");
    socket.on("addpassenger", (data) => {
      setSocketMessage(data);
    });
    setState("addPassenger");
  };

  const removePassenger = () => {
    if (passengers !== 0) {
      setPassengers((prev) => prev - 1);
      notify("Removing Passengers");
    } else {
      notify("No Passenger To Remove");
    }
    socket.emit("Removedpassenger", "Passenger removed");
    socket.on("Removedpassenger", (data) => {
      setSocketMessage(data);
    });
    setState("removePassenger");
  };

  const handleResume = () => {
    setResume(true);
  };
  const notify = (toastMsg) => toast(toastMsg);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="Car__controllers">
        <div className="Car__controllers_speedMetter">
          <div className="Car__controllers_speedMetter__logo" ref={logoRef}>
            {calculateTime(summary)}
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
              <span>Plate Number</span>
            </div>
            <div>
              <span>RAB123CF</span>
            </div>
          </div>
          <div className="Car__controllers__route">
            <div className="Car__controllers__route-values">
              <div>
                <span>Nyamirambo</span>
              </div>
              <div>
                <span>DownTown</span>
              </div>
            </div>
          </div>
          <div className="Car__controllers__passengersNumber">
            <div>
              <span>PASSENGERS</span>
            </div>
            <div>
              <span>{passengers}</span>
            </div>
          </div>
          {socketMessage}
        </div>
      </div>
    </React.Fragment>
  );
};
export default SpeedMeter;
