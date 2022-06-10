import React, { useRef } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import PauseIcon from "@mui/icons-material/Pause";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import carSound from "./../../Assets/carsound.mp3";
import MovingCar from "./../../Assets/movingcar.mp3";
import CarBreak from "./../../Assets/carBreak.mp3";

const SpeedMeter = ({
  seStart,
  setEngine,
  setSpeed,
  pause,
  setPause,
  start,
  engine,
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
  };

  const handleAccelate = () => {
    setSpeed((prev) => prev - 100);
    logoRef.current.style.cssText =
      "animation: 0.1s vibrate linear infinite;color:red;";
    movingCarRef.current.volume = 0.1;
    movingCarRef.current.play();
    audioRef.current.stop();
  };

  const handleStart = () => {
    goRef.current.style.cssText = "color:red;background-color:red";
    seStart(true);
  };

  const handleBreak = () => {
    setSpeed((prev) => prev + 100);
    breakRef.current.volume = 0.02;
    breakRef.current.play();
  };

  const handlePause = () => {
    setPause((prev) => !prev);
  };

  return (
    <React.Fragment>
      <div className="Car__controllers">
        <div className="Car__controllers_speedMetter">
          <div className="Car__controllers_speedMetter__logo" ref={logoRef}>
            50 KM/H
          </div>
        </div>
        <div className="Car__controllers_actions">
          <button
            className="Car__controllers_start"
            onClick={handlePower}
            ref={startRef}
          >
            <PowerSettingsNewIcon />
          </button>

          <button className="Car__controllers_breake" onClick={handleBreak}>
            |||
          </button>
          <button
            className="Car__controllers_accelerator"
            onClick={handleAccelate}
          >
            |||
          </button>
          <button
            className="Car__controllers_accelerator"
            ref={goRef}
            onClick={handleStart}
          >
            Go
          </button>
          <button
            className="Car__controllers_accelerator"
            onClick={handlePause}
          >
            {start ? <PauseIcon /> : <ArrowRightIcon />}
          </button>

          <button className="Car__controllers__persengers">
            <PersonAddAltIcon />
          </button>
          <button
            className="Car__controllers__persengers"
            onClick={handleAccelate}
          >
            <PersonRemoveIcon />
          </button>
        </div>
        <div>Passengers Here</div>
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
