import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingControl from "./RoutingControl";
import DashboardLayout from "./../../Layouts/Dashboard";
import "./simulation.css";
import { PhantomBusMarker } from "./CarMarker";
import SpeedMeter from "./SpeedMeter";
import LocationMaker from "./LocationMaker";
import socket from "./../../utils/sokect";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Simulation = () => {
  const [position, setPosition] = React.useState([]);
  const [start, seStart] = React.useState(false);
  const [engine, setEngine] = React.useState(false);
  const [summary, setSummary] = React.useState();
  const [isSpeed, setIsSpeed] = React.useState(false);
  const [isSlowing, setIsSlowing] = React.useState(false);
  const [speed, setSpeed] = React.useState(
    Number(localStorage.getItem("speed", speed)) === 100
      ? 100
      : Number(localStorage.getItem("speed", speed))
  );
  const [pause, setPause] = React.useState(false);
  const [resume, setResume] = React.useState(false);
  const [passengers, setPassengers] = React.useState(0);
  const [currentTrack, setCurrentTrack] = React.useState({});

  let cursor = 0;
  let newCursor = Number(localStorage.getItem("currentPosition"));

  useEffect(() => {
    setCurrentTrack(position[cursor]);
    let interval;
    if (start && engine) {
      interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          localStorage.setItem("currentPosition", cursor);
          setCurrentTrack(position[cursor]);

          return;
        }
      }, Number(localStorage.getItem("speed")));

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
          localStorage.setItem("currentPosition", newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, Number(localStorage.getItem("speed")));

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
          localStorage.setItem("currentPosition", newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, Number(localStorage.getItem("speed")));

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
          localStorage.setItem("currentPosition", newCursor);
          setCurrentTrack(position[newCursor]);
          return;
        }
      }, Number(localStorage.getItem("speed")));

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
              <MapContainer
                center={[-1.939662908, 30.055666444]}
                zoom={10}
                zoomControl={true}
                style={{ width: "100%", height: "85vh" }}
              >
                <RoutingControl
                  setPosition={setPosition}
                  setSummary={setSummary}
                />
                {/* <LocationMaker /> */}
                {/* <RouteBusMotion /> */}
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="Map">
                    <TileLayer url={maps.base} />
                    <PhantomBusMarker
                      data={currentTrack ?? { lat: -1.978106, lng: 30.044125 }}
                      speed={isSpeed}
                      resume={resume}
                      isSlowing={isSlowing}
                      pause={pause}
                    />
                  </LayersControl.BaseLayer>
                </LayersControl>
              </MapContainer>
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
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Simulation;
