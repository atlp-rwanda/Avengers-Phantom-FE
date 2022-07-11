import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import socket from "../utils/socket";

const useStyles = makeStyles(styles);
const Routes = [
    {
      id: 0,
      label: "Select your Road",
    },
    {
      id: 1,
      label: " Down Town Remera ",
      latlng: [12, 12],
    },
    { id: 2, label: "Nyamirambo Down Town", latlng: [12, 12] },
    {
      id: 3,
      label: "Down Town Kimironko",
      latlng: [12, 12],
    },
  ];
  const ClientSideBar = () => {
    const classes = useStyles();
    const [carState, setCarState] = useState('Waiting for Journey status...')
    socket.on('START_ENGINE', (bus) => {
      setCarState(bus)
    })
    socket.on('MOVE_BUS', (bus) => {
      setCarState(bus)
    })
    socket.on('SLOWING_BUS', (bus) => {
      setCarState(bus)
    })
    socket.on('ACCELERATE_BUS', (bus) => {
      setCarState(bus)
    })
    socket.on('PAUSE_BUS', (bus) => {
      setCarState(bus)
    })
    socket.on('RESUME_BUS', (bus) => {
      setCarState(bus)
    })
    socket.on('ADD_PASSENGER', (bus) => {
      setCarState(bus)
    })
    socket.on('REMOVE_PASSENGER', (bus) => {
      setCarState(bus)
    })
    return (
      <div className={classes.clientSideBar}>
        <form>
          <div className={classes.formFields}>
            <div>
              <select className={classes.routeInput}>
                {Routes.map((item) => (
                  <option value={item.latlng} key={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                className={classes.startButton}
                style={{ marginTop: "20px" }}
              >
                Go
              </button>
            </div>
          </div>
        </form>
        <div className={classes.realTimeResults}> 
        
        <h3> Real Time Results <hr/></h3>
        <h6>Journey Status </h6> 
        <h7>{carState}</h7> 
        
        </div>
      </div>
    );
  };

  export default ClientSideBar;