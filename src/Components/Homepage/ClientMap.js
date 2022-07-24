import React, { useEffect, useState, useMemo } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LocationMarker from "./../Simulation/LocationMaker";
import Layout from "./../../Layouts/ClientDashoard";
import { UserMap, BusState } from '../commons'
import socket from "./../../utils/socket";

import Fab from '@mui/material/Fab';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Tooltip from '@mui/material/Tooltip';
import ClientSideBar from '../../Layouts/ClientSideBar'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const fabGreenStyle = {
  color: 'white',
  backgroundColor: "#012241",
}

const ClientMap = () => {
  const props = BusState(); 
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {
    engine,
    freeSeats,
    isSlowing, 
    isSpeed,
    pause,
    resume,
    currentCoords,
    currentPosition,
    setCurrentCoords,
    setEngine,
    setFreeSeats,
    setIsSlowing,
    setIsSpeed,
    setPause,
    setCurrentPosition,
    setResume,
    setSpeed,
    setStart,
    speed,
    start,
  } = props;

  const useEffectOnce = (fn) => useMemo(fn, [])
  const pagingResponse = () => {
    socket.emit('PAGING', {});
    socket.on('PAGING_RESPONSE', (bus)=> {
      setCurrentCoords(bus.currentCoords);
      setCurrentPosition(bus.currentPosition);
      setEngine(bus.engine);
      setStart(bus.start);
      setSpeed(bus.speed);
      setIsSpeed(bus.isSpeed);
      setPause(bus.pause);
      setResume(bus.resume);
      setFreeSeats(bus.freeSeats);
    })
  };
  useEffectOnce(pagingResponse);

  useEffect(() => {

    socket.on('START_ENGINE', (bus) => {
      setEngine(true);
    })
    socket.on('MOVE_BUS', (bus) => {
      setStart(true);
    })
    socket.on('ACCELERATE_BUS', (bus) => {
      setSpeed(speed/2);
      setIsSpeed(true);
    })
    socket.on('PAUSE_BUS', (bus) => {
      setPause(true);
      setStart(false);
      setResume(false);
    })
    socket.on('SLOW_BUS', (bus) => {
      setIsSlowing(true);
      setSpeed(speed*2);
      setStatus('on water');
    })
    socket.on('RESUME', (bus) => {
      setResume(true);
    })
    socket.on('ADD_PASSENGER', (bus) => {
      setFreeSeats(freeSeats-1);
    })
    socket.on('REMOVE_PASSENGER', (bus) => {
      setFreeSeats(freeSeats+1);
    })
   
  }, [start, engine, pause, resume, isSlowing, isSpeed, freeSeats, status]);

  return (
    <>
      <div style={{ zIndex: 2, position: "absolute", top: "1500px", left: "50px", }}> 
      <Fab style={fabGreenStyle} onClick={handleExpandClick} size="small"> 
            {
              expanded
                ? <Tooltip title="ExpandLess" arrow><ExpandLess /></Tooltip>
                : <Tooltip title="ExpandMore" arrow><ExpandMore /></Tooltip>
            }
       </Fab>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
       <ClientSideBar 
       currentCoords={currentCoords}
       currentPosition={currentPosition}
       engine={engine}
       start={start}
       speed={speed}
       isSpeed={isSpeed}
       pause={pause}
       resume={resume}
       freeSeats={freeSeats}
       />
      </Collapse>
      </div>
      <UserMap props={props} />
    </>
  );
};
export default ClientMap;
