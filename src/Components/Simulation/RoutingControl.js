import React from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useSelector } from "react-redux";

const createRoutineMachineLayer = ({ setPosition, setSummary }) => {
  const route = useSelector((state) => state);

  console.log("state", route.testRouteReducer.route.message[0].from);

  const instance = L.Routing.control({
    position: "bottomleft",
    waypoints: [
      L.latLng(
        route?.testRouteReducer?.route?.message[0].from?.lat,
        route?.testRouteReducer?.route?.message[0].from?.lng
      ),
      L.latLng(
        route?.testRouteReducer?.route?.message[0].to?.lat,
        route?.testRouteReducer?.route?.message[0].to?.lng
      ),
    ],
    lineOptions: {
      styles: [
        {
          color: "#fff",
          weight: 10,
          border: "1px solid #000",
        },
      ],
    },
    show: false,
    // addWaypoints: false,
    // routeWhileDragging: true,
    // draggableWaypoints: true,
    // fitSelectedRoutes: true,
    // showAlternatives: false,
    // zoom: true,
  });

  instance.on("routesfound", function (e) {
    const routes = e.routes[0].coordinates;
    const coordinatesValues = Object.values(routes);

    const summary = e.routes[0].summary;

    let coordinates = [];
    for (let i = 0; i < coordinatesValues.length; i++) {
      coordinates.push({
        lat: coordinatesValues[i].lat,
        lng: coordinatesValues[i]?.lng,
      });
    }

    setPosition([...coordinates]);
    setSummary(summary);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
