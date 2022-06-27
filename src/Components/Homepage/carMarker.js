import React, { useEffect, useState } from "react";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";
import L from "leaflet";
import busIcon from "./../../Assets/phantomIconCar.png";

const icon = L.icon({
  iconSize: [20, 25],
  popupAnchor: [2, -20],
  iconUrl: busIcon,
});

export const PhantomBusMarker = ({ data, speed, pause }) => {
  console.log("data", data);

  const { lat, lng } = data;
  const [prevPos, setPrevPos] = useState([lat, lng]);

  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos, pause]);

  return (
    <LeafletTrackingMarker
      icon={icon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={speed}
      keepAtCenter={true}
      rotationOrigin="center"
    />
  );
};