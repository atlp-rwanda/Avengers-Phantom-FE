import React, { useEffect, useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import L from "leaflet";

import DashboardLayout from "../../Layouts/Dashboard";
import DriverControl from "./DriverControl";
import LocationMaker from "./LocationMaker";
import socket from "../../utils/socket";
import { UserMap, BusState } from '../commons'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const busProps = {
  id: 1,
  reg: "RAA 222X",
  capacity: 10,
  route: {
    id: 1,
    origin: {
      id: 1,
      name: "Nyamirambo",
      lat: -1.97775,
      lng: 30.04476,
    },
    destination: {
      id: 1,
      name: "Downtown",
      lat: -1.939662908,
      lng: 30.055666,
    },
  },
  driver: {
    id: 1,
    firstName: "Mike",
    lastName: "Anguandia",
  }
};

const Simulation = () => {
 const props = BusState();
 useState(() => {
   props.setFreeSeats(busProps.capacity);
 }, [])

  return (
    <DashboardLayout>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={8}>
            <Item elevation={0}>
            <UserMap props={{...props, isDriver: true}} />
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
             <DriverControl props={{...props, ...busProps}} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Simulation;
