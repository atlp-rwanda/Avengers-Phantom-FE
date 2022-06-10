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
  const [speed, setSpeed] = React.useState(1000);
  const [pause, setPause] = React.useState(false);
  const [passengers, setPassengers] = React.useState(0);
  const [currentTrack, setCurrentTrack] = React.useState({});

  let cursor = 0;

  useEffect(() => {
    setCurrentTrack(position[cursor]);

    if (start && engine) {
      const interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          setCurrentTrack(position[cursor]);
          return;
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [position, start, engine, speed]);

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
              >
                <RoutingControl
                  setPosition={setPosition}
                  setSummary={setSummary}
                />
                <LocationMaker />
                <LayersControl position="topright">
                  <LayersControl.BaseLayer checked name="Map">
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url={maps.base}
                      styles={{ width: "50vw", height: "20vh" }}
                    />
                    <PhantomBusMarker
                      data={currentTrack ?? { lat: -1.978106, lng: 30.044125 }}
                      speed={speed}
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
                pause={pause}
                setPause={setPause}
                start={start}
                engine={engine}
                passengers={passengers}
                setPassengers={setPassengers}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Simulation;
