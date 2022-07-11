import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LocationMarker from "./../Simulation/LocationMaker";
import Layout from "./../../Layouts/ClientDashoard";
import { UserMap } from '../commons'
import socket from "./../../utils/socket";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const ClientMap = () => {
  const [position, setPosition] = useState([]);
  const [start, setStart] = useState(false);
  const [engine, setEngine] = useState(false);
  const [isSpeed, setIsSpeed] = useState(false);
  const [summary, setSummary] = useState();
  const [speed, setSpeed] = useState(1000);
  const [pause, setPause] = useState(false);
  const [resume, setResume] = useState(false);
  const [passengers, setPassengers] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({ newCursor });
  const [currentPosition, setCurrentPosition] = useState(cursor);
  const [state, setState] = useState();
  const [slowing, isSlowing] = useState();
  const [carState, setCarState] = useState()

  let cursor = 0;
  let newCursor = currentPosition;
  const mapProps = {
    setPosition,
    setSummary,
    currentTrack,
    resume,
    isSlowing,
    pause,
    speed,
  }
  socket.on('START_ENGINE', (bus) => {
    console.log(bus)
    setCarState(bus)
    setEngine(true)
  })
  socket.on('MOVE_BUS', (bus) => {
    console.log(bus)
    setStart(true)
  })
  socket.on('SLOWING_BUS', (bus) => {
    console.log(bus)
    setIsSlowing(true)
    setIsSpeed(speed + 100)
    setSpeed(speed)
  })
  socket.on('ACCELERATE_BUS', (bus) => {
    console.log(bus)
    setSpeed(speed - 100)
    setIsSpeed(true)
    setSpeed(speed)
  })
  socket.on('PAUSE_BUS', (bus) => {
    console.log(bus)
    setPause(true)
    setStart(false)
    setResume(false)
  })
  socket.on('RESUME_BUS', (bus) => {
    console.log(bus)
    setResume(true)
  })
  socket.on('ADD_PASSENGER', (bus) => {
    console.log(bus)
  })
  socket.on('REMOVE_PASSENGER', (bus) => {
    console.log(bus)
  })

  // setup bus movement 
  // starting bus movement
  useEffect(() => {
    setCurrentTrack(position[cursor]);
    let interval;
    if (start && engine) {
      interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          setCurrentPosition(cursor);
          setCurrentTrack(position[cursor]);

          return;
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    } else if (pause) {
      setCurrentTrack(currentTrack);
      clearInterval(interval);
    }
  }, [position, start, engine, pause, resume]);
// Resume paused bus
useEffect(() => {
  setCurrentTrack(position[newCursor]);
  let interval;
  if (resume && engine) {
    interval = setInterval(() => {
      if (newCursor !== position.length - 1) {
        newCursor += 1;
        setCurrentPosition(newCursor);
        setCurrentTrack(position[newCursor]);
        return;
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  } else if (pause) {
    setCurrentTrack(currentTrack);
    clearInterval(interval);
  }
}, [resume]);
// bus acceleration
useEffect(() => {
  setCurrentTrack(position[newCursor]);
  let interval;
  if (isSpeed && engine) {
    interval = setInterval(() => {
      if (newCursor !== position.length - 1) {
        newCursor += 1;
        setCurrentPosition(newCursor);
        setCurrentTrack(position[newCursor]);
        return;
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  } else if (pause) {
    setCurrentTrack(currentTrack);
    clearInterval(interval);
  }
}, [isSpeed]);
// Bus Deceleration
useEffect(() => {
  setCurrentTrack(position[newCursor]);
  let interval;
  if (isSlowing && engine) {
    interval = setInterval(() => {
      if (newCursor !== position.length - 1) {
        newCursor += 1;
        setCurrentPosition(newCursor);
        setCurrentTrack(position[newCursor]);
        return;
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  } else if (pause) {
    setCurrentTrack(currentTrack);
    clearInterval(interval);
  }
}, [isSlowing]);
  return (
    <Layout>
      <UserMap props={mapProps} />
    </Layout>
  );
};
export default ClientMap;
