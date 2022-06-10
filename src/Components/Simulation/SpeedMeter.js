import React, { useRef, useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import carSound from "./../../Assets/carsound.mp3";
import MovingCar from "./../../Assets/movingcar.mp3";
import CarBreak from "./../../Assets/carBreak.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";

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
}) => {
  const goRef = useRef();
  const startRef = useRef();
  const logoRef = useRef();
  const audioRef = useRef();
  const movingCarRef = useRef();
  const breakRef = useRef();

  const handlePower = () => {
    startRef.current.style.cssText = "color:red;background-color:red";
    setEngine(true);
    audioRef.current.volume = 0.02;
    audioRef.current.play();
    notify("Engine Started");
  };

  const handleAccelate = () => {
    notify("Speeding up the Bus.");
    setSpeed((prev) => prev - 100);
    logoRef.current.style.cssText =
      "animation: 0.1s vibrate linear infinite;color:red;";
    movingCarRef.current.volume = 0.1;
    movingCarRef.current.play();
    audioRef.current.stop();
  };

  const handleBreak = () => {
    setSpeed((prev) => prev + 100);
    breakRef.current.volume = 0.02;
    breakRef.current.play();
    notify("Slowing down the Bus.");
  };

  const handleStart = () => {
    goRef.current.style.cssText = "color:red;background-color:red";
    seStart(true);
    notify("Started moving the Bus");
  };

  const handlePause = () => {
    setPause((prev) => !prev);
    seStart(false);
    notify("Bus is on Pause Mode or Moving Mode");
  };

  const addPassenger = () => {
    setPassengers((prev) => prev + 1);
    notify("Adding Passengers");
  };

  const removePassenger = () => {
    if (passengers !== 0) {
      setPassengers((prev) => prev - 1);
      notify("Removing Passengers");
    } else {
      notify("No Passenger To Remove");
    }
  };

  const notify = (toastMsg) => toast(toastMsg);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="Car__controllers">
        <div className="Car__controllers_speedMetter">
          <div className="Car__controllers_speedMetter__logo" ref={logoRef}>
            50 KM/H
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
          <Tooltip title="Pause or Resume" arrow>
            <button
              className="Car__controllers_accelerator"
              onClick={handlePause}
            >
              {start ? <PauseIcon /> : <ArrowRightIcon />}
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
                <span>DownTown </span>
              </div>
              <div>
                <span>Remera </span>
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
        </div>
      </div>
      <div>
        <audio ref={audioRef}>
          <source src={carSound} type="audio/mp3" />
        </audio>
        <audio ref={movingCarRef} loop>
          <source src={MovingCar} type="audio/mp3" />
        </audio>
        <audio ref={breakRef}>
          <source src={CarBreak} type="audio/mp3" />
        </audio>
      </div>
    </React.Fragment>
  );
};
export default SpeedMeter;
