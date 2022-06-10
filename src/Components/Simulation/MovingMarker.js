import React from "react";
import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMapEvents, Marker, Popup, useMap } from "react-leaflet";

/****===========MOVING MARKER==============******/

const MovingMarker = () => {
  var parisKievLL = [
    [48.8567, 2.3508],
    [50.45, 30.523333],
  ];

  var marker1 = L.Marker.movingMarker(parisKievLL, [10000]);
  L.polyline(parisKievLL);
  marker1.once("click", function () {
    marker1.start();
    marker1.closePopup();
    marker1.unbindPopup();
    marker1.on("click", function () {
      if (marker1.isRunning()) {
        marker1.pause();
      } else {
        marker1.start();
      }
    });
    setTimeout(function () {
      marker1.bindPopup("<b>Click me to pause !</b>").openPopup();
    }, 2000);
  });

  marker1.bindPopup("<b>Click me to start !</b>", { closeOnClick: false });
  marker1.openPopup();

  return marker1;
};
export default MovingMarker;
