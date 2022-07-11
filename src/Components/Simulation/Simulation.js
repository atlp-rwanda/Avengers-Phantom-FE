import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import L from "leaflet";
import DashboardLayout from "./../../Layouts/Dashboard";
import SpeedMeter from "./SpeedMeter";
import LocationMaker from "./LocationMaker";
import socket from "./../../utils/sokect";
import UserMap from "./../commons/Map";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Simulation = () => {
  const [position, setPosition] = useState([]);
  const [start, seStart] = useState(false);
  const [engine, setEngine] = useState(false);
  const [summary, setSummary] = useState();
  const [isSpeed, setIsSpeed] = useState(false);
  const [isSlowing, setIsSlowing] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [pause, setPause] = useState(false);
  const [resume, setResume] = useState(false);
  const [passengers, setPassengers] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentPosition, setCurrentPosition] = useState(cursor);
  const [state, setState] = useState();

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
  };

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
    <DashboardLayout>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <Item elevation={0}>
              <UserMap props={mapProps} />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div
              style={{
                background: "#4b4b4b",
                borderRadius: "20px",
                width: "95%",
                height: "87vh",
              }}
            >
              <SpeedMeter
                seStart={seStart}
                setEngine={setEngine}
                setSpeed={setSpeed}
                speed={speed}
                pause={pause}
                setPause={setPause}
                start={start}
                engine={engine}
                passengers={passengers}
                setPassengers={setPassengers}
                summary={summary}
                setResume={setResume}
                setIsSpeed={setIsSpeed}
                setIsSlowing={setIsSlowing}
                state={state}
                setState={setState}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Simulation;
