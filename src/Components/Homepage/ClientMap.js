import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import LocationMarker from "./../Simulation/LocationMaker";
import Layout from "./../../Layouts/ClientDashoard";
import RoutingControl from "./RoutingControl";
import { PhantomBusMarker } from "./carMarker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const position = [-1.939662908, 30.055666];

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const ClientMap = () => {
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
    if (start) {
      const interval = setInterval(() => {
        if (cursor !== position.length - 1) {
          cursor += 1;
          setCurrentTrack(position[cursor]);
          return;
        } else if (pause) {
          cursor = cursor;
          setCurrentTrack(position[cursor]);
          clearInterval(interval);
        }
      }, speed);
      return () => {
        clearInterval(interval);
      };
    }
  }, [position, start, engine, speed, pause]);

  console.log(position);

  return (
    <Layout>
      <MapContainer
        center={[-1.939662908, 30.055666444]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <RoutingControl setPosition={setPosition} setSummary={setSummary} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />
        <PhantomBusMarker
          data={currentTrack ?? { lat: -1.978106, lng: 30.044125 }}
          pause={pause}
          speed={speed}
        />
      </MapContainer>
    </Layout>
  );
};
export default ClientMap;
