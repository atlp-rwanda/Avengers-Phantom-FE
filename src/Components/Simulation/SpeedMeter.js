import React, { useRef, useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PauseIcon from '@mui/icons-material/Pause';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tooltip from '@mui/material/Tooltip';
import socket from '../../utils/socket';
import { calculateTime } from './CalculateTime';

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
  setFreeSeats,
  freeSeats,
  bus={bus},
}) => {
  const [socketMessage, setSocketMessage] = useState('');
  const goRef = useRef();
  const startRef = useRef();
  const logoRef = useRef();
  const audioRef = useRef();
  const movingCarRef = useRef();
  const breakRef = useRef();

  const handlePower = () => {
    startRef.current.style.cssText = 'color:red;background-color:red';
    setEngine(true);
    notify('Engine Started');
    socket.emit('START_ENGINE', `Bus ${bus.regNumber}, Started Engine`);
    socket.on('START_ENGINE', (data) => {
      setSocketMessage(data);
    });
    setState('START_ENGINE');
  };

  const handleStart = () => {
    goRef.current.style.cssText = 'color:red;background-color:red';
    seStart(true);
    notify('Started moving the Bus');
    socket.emit('MOVE_BUS', `Bus ${bus.regNumber}, Started Moving`);
    socket.on('MOVE_BUS', (data) => {
      setSocketMessage(data);
    });
    setState('MOVE_BUS');
  };

  const handleAccelate = () => {
    notify('Speeding up the Bus.');
    setSpeed(speed - 100);
    setIsSpeed(true);
    logoRef.current.style.cssText =
      'animation: 0.1s vibrate linear infinite;color:red;';
    socket.emit('ACCELERATE_BUS', `Bus ${bus.regNumber}, is Speeding up`);
    socket.on('ACCELERATE_BUS', (data) => {
      setSocketMessage(data);
    });
    setState('ACCELERATE_BUS');
    setSpeed(speed);
  };

  const handleBreak = () => {
    setIsSlowing(true);
    setSpeed(speed + 100);
    notify('Slowing down the Bus.');
    socket.emit('SLOWING_BUS', `Bus ${bus.regNumber}, is slowing down`);
    socket.on('SLOWING_BUS', (data) => {
      setSocketMessage(data);
    });
    setState('SLOWING_BUS');
    setSpeed(speed);
  };


  const handlePause = () => {
    setPause(true);
    seStart(false);
    setResume(false);
    notify('Bus is on Pause Mode or Moving Mode');
    socket.emit('PAUSE_BUS', `Bus ${bus.regNumber}, Pausing`);
    socket.on('PAUSE_BUS', (data) => {
      setSocketMessage(data);
    });
    setState('PAUSE_BUS');
  };

  const addPassenger = () => {
    if(passengers!==bus.capacity){
      setPassengers((prev) => prev + 1);
      notify('Adding Passengers');
    }else{
      notify('No available seats for new Passengers');
    }
    socket.emit('ADD_PASSENGER', `Bus ${bus.regNumber}, is adding Passenger(s)`);
    socket.on('ADD_PASSENGER', (data) => {
      setSocketMessage(data);
    });
    setState('ADD_PASSENGER');
  };

  const removePassenger = () => {
    if (passengers !== 0) {
      setPassengers((prev) => prev - 1);
      notify('Removing Passengers');
    } else {
      notify('No Passenger To Remove');
    }
    socket.emit('REMOVE_PASSENGER', `Bus ${bus.regNumber}, is Removing Passenger(s)`);
    socket.on('REMOVE_PASSENGER', (data) => {
      setSocketMessage(data);
    });
    setState('REMOVE_PASSENGER');
  };
  const handleResume = () => {
    setResume(true);
    socket.emit('RESUME_BUS', `Bus ${bus.regNumber}, is on Resume`);
    socket.on('RESUME_BUS', (data) => {
      setSocketMessage(data);
    })
    notify('Bus Movement Resumed')
    setState('RESUME_BUS');
  };
  const notify = (toastMsg) => toast(toastMsg);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className='Car__controllers'>
        <div className='Car__controllers_speedMetter'>
          <div className='Car__controllers_speedMetter__logo' ref={logoRef}>
            {calculateTime(summary)}
          </div>
        </div>
        <div className='Car__controllers_actions'>
          <Tooltip title='Engine' arrow>
            <button
              className='Car__controllers_start'
              onClick={handlePower}
              ref={startRef}
            >
              <PowerSettingsNewIcon />
            </button>
          </Tooltip>
          <Tooltip title='Break' arrow>
            <button className='Car__controllers_breake' onClick={handleBreak}>
              |||
            </button>
          </Tooltip>
          <Tooltip title='Accelerator' arrow>
            <button
              className='Car__controllers_accelerator'
              onClick={handleAccelate}
            >
              |||
            </button>
          </Tooltip>
          <Tooltip title='Start moving' arrow>
            <button
              className='Car__controllers_accelerator'
              ref={goRef}
              onClick={handleStart}
            >
              Go
            </button>
          </Tooltip>
          <Tooltip title='Pause' arrow>
            <button
              className='Car__controllers_accelerator'
              onClick={handlePause}
            >
              <PauseIcon />
            </button>
          </Tooltip>
          <Tooltip title='Resume' arrow>
            <button
              className='Car__controllers_accelerator'
              onClick={handleResume}
            >
              <ArrowRightIcon />
            </button>
          </Tooltip>
          <Tooltip title='Add Perssengers' arrow>
            <button
              className='Car__controllers__persengers'
              onClick={addPassenger}
            >
              <PersonAddAltIcon />
            </button>
          </Tooltip>
          <Tooltip title='Remove Perssengers' arrow>
            <button
              className='Car__controllers__persengers'
              onClick={removePassenger}
            >
              <PersonRemoveIcon />
            </button>
          </Tooltip>
        </div>
        <div className='Car__controllers__info'>
          <div className='Car__controllers__platenumber'>
            <div>
              <span>Plate Number</span>
            </div>
            <div>
              <span>RAB123CF</span>
            </div>
          </div>
          <div className='Car__controllers__route'>
            <div className='Car__controllers__route-values'>
              <div>
                <span>Route</span>
              </div>
              <div>
                <span>Nyamirambo-DownTown</span>
              </div>
            </div>
          </div>
          <div className='Car__controllers__route'>
            <div className='Car__controllers__route-values'>
              <div>
                <span>Free-Seats</span>
              </div>
              <div>
                <span>{bus.capacity-passengers}</span>
              </div>
            </div>
          </div>
           <div className='Car__controllers__route'>
            <div className='Car__controllers__route-values'>
              <div>
                <span>Passengers</span>
              </div>
              <div>
                <span>{passengers}</span>
              </div>
            </div>
          </div>
          {socketMessage}
        </div>
      </div>
    </React.Fragment>
  );
};
export default SpeedMeter;
