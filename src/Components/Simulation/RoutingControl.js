import React from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMapEvents, Marker, Popup, useMap } from "react-leaflet";

const createRoutineMachineLayer = ({ setPosition, setSummary }) => {
  const instance = L.Routing.control({
    position: "bottomleft",
    waypoints: [
      L.latLng(-1.978106, 30.044125),
      L.latLng(-1.939662908, 30.055666),
    ],
    lineOptions: {
      styles: [
        {
          color: "#fff",
          weight: 20,
          border: "1px solid #000",
        },
      ],
    },
    show: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  instance.on("routesfound", function (e) {
    const routes = e.routes[0].coordinates;
    const coordinatesValues = Object.values(routes);

    var summary = e.routes[0].summary;

    let coordinates = [];
    for (let i = 0; i < coordinatesValues.length; i++) {
      coordinates.push({
        lat: coordinatesValues[i].lat,
        lng: coordinatesValues[i]?.lng,
      });
    }
    // console.log("machine,cords", coordinates);
    setPosition([...coordinates]);
    setSummary(summary);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
